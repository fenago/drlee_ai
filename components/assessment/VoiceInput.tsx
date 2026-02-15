"use client";

import { useCallback } from "react";
import { useDeepgramVoice } from "./useDeepgramVoice";

interface VoiceInputProps {
  onTranscript: (text: string) => void;
}

export default function VoiceInput({ onTranscript }: VoiceInputProps) {
  const {
    isRecording,
    isConnecting,
    error,
    mode,
    setMode,
    toggleRecording,
    startRecording,
    stopRecording,
    isSupported,
  } = useDeepgramVoice({ onTranscript });

  // Push-to-talk handlers
  const handleMouseDown = useCallback(() => {
    if (mode === "push-to-talk" && !isRecording && !isConnecting) {
      startRecording();
    }
  }, [mode, isRecording, isConnecting, startRecording]);

  const handleMouseUp = useCallback(() => {
    if (mode === "push-to-talk" && isRecording) {
      stopRecording();
    }
  }, [mode, isRecording, stopRecording]);

  // Toggle mode handler
  const handleClick = useCallback(() => {
    if (mode === "toggle") {
      toggleRecording();
    }
  }, [mode, toggleRecording]);

  if (!isSupported) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-3">
        {/* Mic button */}
        <button
          type="button"
          onClick={handleClick}
          onMouseDown={mode === "push-to-talk" ? handleMouseDown : undefined}
          onMouseUp={mode === "push-to-talk" ? handleMouseUp : undefined}
          onMouseLeave={mode === "push-to-talk" ? handleMouseUp : undefined}
          onTouchStart={mode === "push-to-talk" ? handleMouseDown : undefined}
          onTouchEnd={mode === "push-to-talk" ? handleMouseUp : undefined}
          disabled={isConnecting}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            isRecording
              ? "bg-red-500 text-white scale-110 shadow-lg shadow-red-500/30"
              : isConnecting
                ? "bg-base-300 text-base-content/50 cursor-wait"
                : "bg-base-200 text-base-content hover:bg-primary hover:text-primary-content"
          }`}
          title={
            mode === "push-to-talk"
              ? "Hold to speak"
              : isRecording
                ? "Click to stop"
                : "Click to start"
          }
        >
          {/* Pulsing ring when recording */}
          {isRecording && (
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30" />
          )}

          {/* Icon */}
          {isConnecting ? (
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : isRecording ? (
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="6" width="12" height="12" rx="2" />
            </svg>
          ) : (
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          )}
        </button>

        {/* Label + mode switcher */}
        <div className="flex flex-col">
          <span className="text-xs text-base-content/50">
            {isRecording
              ? mode === "push-to-talk"
                ? "Release to stop"
                : "Click to stop"
              : isConnecting
                ? "Connecting..."
                : mode === "push-to-talk"
                  ? "Hold to speak"
                  : "Click to speak"}
          </span>
          <button
            type="button"
            onClick={() => setMode(mode === "toggle" ? "push-to-talk" : "toggle")}
            className="text-[10px] text-base-content/30 hover:text-base-content/60 transition-colors text-left"
          >
            Switch to {mode === "toggle" ? "hold-to-talk" : "click start/stop"}
          </button>
        </div>
      </div>

      {/* Recording indicator */}
      {isRecording && (
        <p className="text-xs text-red-500 animate-pulse">Listening...</p>
      )}

      {/* Error */}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}
