"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { courses, tracks, rarityColors } from "@/components/landing/CatalogNew";

type Course = (typeof courses)[number];

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, delay: Math.min(index, 8) * 0.02 }}
      className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/5 flex flex-col"
    >
      {course.rarity && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${rarityColors[course.rarity]}`}>
            {course.rarity}
          </span>
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-20">
          {course.name}
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{course.subtitle}</p>
        <p className="text-slate-600 dark:text-white/60 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-white/40 mb-6 mt-auto">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.hours}h
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {course.modules} modules
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="text-center p-2 rounded-lg bg-slate-100 dark:bg-slate-700/50">
            <p className="text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-wider mb-0.5">Self-Paced</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">${course.price.selfPaced.toLocaleString()}</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 relative">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-blue-500 text-white text-[8px] font-bold rounded-full uppercase">Popular</span>
            <p className="text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">Cohort</p>
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400">${course.price.cohort.toLocaleString()}</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-amber-500/10">
            <p className="text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-0.5">Founder</p>
            <p className="text-sm font-bold text-amber-600 dark:text-amber-400">${course.price.founder.toLocaleString()}</p>
          </div>
        </div>
        <Link
          href={`/courses/${course.slug}`}
          className="block w-full text-center py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
        >
          View Masterclass
        </Link>
      </div>
    </motion.div>
  );
}

export default function CatalogClient() {
  const [query, setQuery] = useState("");

  const byId = useMemo(() => {
    const m: Record<string, Course> = {};
    for (const c of courses) m[c.id] = c;
    return m;
  }, []);

  const trimmed = query.trim().toLowerCase();
  const searching = trimmed.length > 0;

  const results = useMemo(() => {
    if (!searching) return [];
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(trimmed) ||
        c.subtitle.toLowerCase().includes(trimmed) ||
        c.description.toLowerCase().includes(trimmed)
    );
  }, [searching, trimmed]);

  return (
    <section className="relative py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            The Full Masterclass Catalog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            32 Masterclasses.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              One Personalized to You.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white/60">
            Every masterclass begins with an AI assessment that maps your knowledge gaps, adapts the
            material to close them, and ends with a custom deliverable you build and own.
          </p>
        </div>

        {/* How-it-works mini strip */}
        <div className="grid sm:grid-cols-3 gap-3 mb-12 max-w-4xl mx-auto">
          {[
            { n: "01", t: "Pre-Masterclass Assessment", d: "We map your gaps before day one.", c: "text-blue-600 dark:text-blue-400" },
            { n: "02", t: "AI-Personalized Path", d: "The material adapts to close them.", c: "text-purple-600 dark:text-purple-400" },
            { n: "03", t: "A Custom Deliverable", d: "You leave with something you built.", c: "text-emerald-600 dark:text-emerald-400" },
          ].map((s) => (
            <div
              key={s.n}
              className="flex items-start gap-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 p-4"
            >
              <span className={`text-lg font-black ${s.c} opacity-60`}>{s.n}</span>
              <div>
                <p className="font-semibold text-sm text-slate-900 dark:text-white">{s.t}</p>
                <p className="text-xs text-slate-500 dark:text-white/50">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls: track jump-nav + search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12 lg:sticky lg:top-20 z-20 py-3 lg:bg-slate-50/80 lg:dark:bg-slate-900/60 lg:backdrop-blur rounded-2xl">
          {!searching && (
            <div className="flex flex-wrap gap-2">
              {tracks.map((t) => (
                <a
                  key={t.id}
                  href={`#track-${t.id}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-blue-500/40 transition-all"
                >
                  {t.name.split("—")[0].trim()}
                </a>
              ))}
            </div>
          )}
          <div className="relative lg:ml-auto flex-shrink-0">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search masterclasses..."
              className="w-full lg:w-72 pl-9 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Search results (flat) */}
        {searching ? (
          <div>
            <p className="text-sm text-slate-500 dark:text-white/40 mb-6">
              {results.length} result{results.length === 1 ? "" : "s"} for “{query.trim()}”
            </p>
            {results.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {results.map((c, i) => (
                    <CourseCard key={c.id} course={c} index={i} />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-slate-500 dark:text-white/50 mb-4">No masterclasses match “{query.trim()}”.</p>
                <button onClick={() => setQuery("")} className="text-blue-600 dark:text-blue-400 font-semibold">
                  Clear search
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Curated tracks */
          <div className="space-y-20">
            {tracks.map((track) => {
              const trackCourses = track.courseIds.map((id) => byId[id]).filter(Boolean) as Course[];
              if (trackCourses.length === 0) return null;
              return (
                <div key={track.id} id={`track-${track.id}`} className="scroll-mt-40">
                  <div className="flex items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        {track.name}
                      </h2>
                      <p className="text-slate-600 dark:text-white/60 max-w-2xl">{track.description}</p>
                    </div>
                    <span className="hidden sm:inline-block flex-shrink-0 text-sm font-semibold text-slate-400 dark:text-white/40">
                      {trackCourses.length} masterclass{trackCourses.length === 1 ? "" : "es"}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trackCourses.map((c, i) => (
                      <CourseCard key={c.id} course={c} index={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
