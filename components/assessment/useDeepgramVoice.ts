"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type VoiceMode = "toggle" | "push-to-talk";

interface UseDeepgramVoiceOptions {
  onTranscript: (text: string) => void;
  defaultMode?: VoiceMode;
}

interface UseDeepgramVoiceReturn {
  isRecording: boolean;
  isConnecting: boolean;
  error: string | null;
  mode: VoiceMode;
  setMode: (mode: VoiceMode) => void;
  toggleRecording: () => void;
  startRecording: () => void;
  stopRecording: () => void;
  isSupported: boolean;
}

// Cache the API key so we only fetch it once per page load
let cachedApiKey: string | null = null;

export function useDeepgramVoice({
  onTranscript,
  defaultMode = "toggle",
}: UseDeepgramVoiceOptions): UseDeepgramVoiceReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<VoiceMode>(defaultMode);

  const wsRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const onTranscriptRef = useRef(onTranscript);
  const isStoppingRef = useRef(false);

  useEffect(() => {
    onTranscriptRef.current = onTranscript;
  }, [onTranscript]);

  const isSupported =
    typeof window !== "undefined" &&
    !!navigator?.mediaDevices?.getUserMedia &&
    !!window.WebSocket;

  const cleanup = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null;

    if (wsRef.current) {
      if (wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }
      wsRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    setIsRecording(false);
    setIsConnecting(false);
    isStoppingRef.current = false;
  }, []);

  const stopRecording = useCallback(() => {
    if (isStoppingRef.current) return;
    isStoppingRef.current = true;

    const ws = wsRef.current;
    const mediaRecorder = mediaRecorderRef.current;

    // Stop MediaRecorder first to flush buffered audio
    if (mediaRecorder?.state === "recording") {
      mediaRecorder.stop();
    }

    // Signal end of audio to Deepgram then wait for final transcripts
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(new Uint8Array(0));
      setTimeout(() => cleanup(), 1500);
    } else {
      cleanup();
    }

    // Update UI immediately
    setIsRecording(false);
  }, [cleanup]);

  const startRecording = useCallback(async () => {
    if (!isSupported) {
      setError("Voice input is not supported in this browser");
      return;
    }

    setError(null);
    setIsConnecting(true);

    try {
      // Reuse existing stream or request new one
      if (!streamRef.current || streamRef.current.getTracks().every(t => t.readyState === "ended")) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            channelCount: 1,
            sampleRate: 16000,
          },
        });
        streamRef.current = stream;
      }
      const stream = streamRef.current;

      // Cache API key
      if (!cachedApiKey) {
        const tokenRes = await fetch("/api/deepgram/token");
        if (!tokenRes.ok) throw new Error("Failed to get Deepgram token");
        const { apiKey } = await tokenRes.json();
        cachedApiKey = apiKey;
      }

      const ws = new WebSocket(
        `wss://api.deepgram.com/v1/listen?model=nova-2&language=en&smart_format=true&punctuate=true&interim_results=false&endpointing=300`,
        ["token", cachedApiKey]
      );
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnecting(false);
        setIsRecording(true);

        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
            ? "audio/webm;codecs=opus"
            : "audio/webm",
        });
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0 && ws.readyState === WebSocket.OPEN) {
            ws.send(event.data);
          }
        };

        mediaRecorder.start(100);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          const transcript = data?.channel?.alternatives?.[0]?.transcript;
          if (transcript && data.is_final) {
            onTranscriptRef.current(transcript);
          }
        } catch {
          // Ignore parse errors
        }
      };

      ws.onerror = () => {
        setError("Voice connection error. Please try again.");
        cleanup();
      };

      ws.onclose = () => {
        if (!isStoppingRef.current) {
          cleanup();
        }
      };
    } catch (err: any) {
      if (err.name === "NotAllowedError") {
        setError("Microphone access denied. Please allow mic access.");
      } else {
        setError(err.message || "Failed to start voice input");
      }
      cleanup();
    }
  }, [isSupported, cleanup]);

  const toggleRecording = useCallback(() => {
    if (isRecording) {
      stopRecording();
    } else if (!isConnecting) {
      startRecording();
    }
  }, [isRecording, isConnecting, startRecording, stopRecording]);

  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  return {
    isRecording,
    isConnecting,
    error,
    mode,
    setMode,
    toggleRecording,
    startRecording,
    stopRecording,
    isSupported,
  };
}
