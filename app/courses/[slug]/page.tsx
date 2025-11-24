import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import HeaderNew from '@/components/landing/HeaderNew';
import Footer from '@/components/Footer';
import { getCourseBySlug, getAllCourseSlugs, Course } from '@/lib/courses';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: `${course.name} | DrLee.ai Masterclass`,
    description: course.description.slice(0, 160),
  };
}

function CourseHero({ course }: { course: Course }) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-blue-deep/50 to-brand-slate"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#catalog" className="hover:text-white transition-colors">Catalog</Link>
              <span>/</span>
              <span className="text-white/70">{course.category}</span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {course.rarity && (
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.rarity === "Extremely Rare" ? "bg-purple-500/20 text-purple-400" :
                  course.rarity === "Cutting Edge" ? "bg-red-500/20 text-red-400" :
                  course.rarity === "Frontier AI" ? "bg-orange-500/20 text-orange-400" :
                  course.rarity === "Flagship" ? "bg-brand-yellow/20 text-yellow-400" :
                  course.rarity === "Very Rare" ? "bg-brand-blue/20 text-brand-blue" :
                  "bg-brand-green/20 text-brand-green"
                }`}>
                  {course.rarity}
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm">
                {course.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {course.name}
            </h1>
            <p className="text-xl md:text-2xl text-brand-green font-medium mb-6">
              {course.subtitle}
            </p>

            {/* Hook */}
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              {course.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{course.hours} hours</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>{course.modules} modules</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#enroll"
                className="btn btn-lg bg-gradient-to-r from-brand-blue to-brand-green text-white border-0 hover:shadow-lg hover:shadow-brand-blue/30 transition-all"
              >
                Enroll Now - ${course.price.toLocaleString()}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#curriculum"
                className="btn btn-lg btn-outline border-white/30 text-white hover:bg-white/10"
              >
                View Curriculum
              </a>
            </div>
          </div>

          {/* Right - Price card */}
          <div className="hidden lg:block">
            <div className="glass rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <span className="text-sm text-white/50 uppercase tracking-wider">Cohort-Based</span>
                <div className="text-5xl font-bold text-white mt-2">
                  ${course.price.toLocaleString()}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  `${course.hours} hours of content`,
                  `${course.modules} comprehensive modules`,
                  "Lifetime access to materials",
                  "Private community access",
                  "Direct instructor support",
                  "Certificate of completion"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <svg className="w-5 h-5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#enroll"
                className="btn btn-lg w-full bg-gradient-to-r from-brand-blue to-brand-green text-white border-0"
              >
                Enroll Now
              </a>

              <p className="text-center text-white/40 text-sm mt-4">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYoullLearn({ course }: { course: Course }) {
  return (
    <section className="bg-base-100 py-20 md:py-28" id="outcomes">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You&apos;ll Build</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            By the end of this masterclass, you&apos;ll have built real systems and gained deep understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.outcomes.map((outcome, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-base-200 border border-base-300 hover:border-brand-blue/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white font-bold mb-4">
                {i + 1}
              </div>
              <p className="text-base-content/80 group-hover:text-base-content transition-colors">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum({ course }: { course: Course }) {
  return (
    <section className="bg-base-200 py-20 md:py-28" id="curriculum">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Curriculum</h2>
          <p className="text-base-content/70">
            {course.modules} modules &middot; {course.hours} hours of content
          </p>
        </div>

        <div className="space-y-4">
          {course.curriculum.map((module, i) => (
            <div key={i} className="bg-base-100 rounded-xl border border-base-300 overflow-hidden">
              <div className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{module.title}</h3>
                  <p className="text-sm text-base-content/60">{module.lessons.length} lessons</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <ul className="space-y-2 pl-14">
                  {module.lessons.map((lesson, j) => (
                    <li key={j} className="flex items-center gap-3 text-base-content/70 text-sm">
                      <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies({ course }: { course: Course }) {
  return (
    <section className="bg-base-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies You&apos;ll Master</h2>
          <p className="text-base-content/70">
            Hands-on experience with industry-standard tools
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {course.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-6 py-3 rounded-full bg-base-200 border border-base-300 text-base-content font-medium hover:border-brand-blue/50 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollCTA({ course }: { course: Course }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="enroll">
      <div className="absolute inset-0 animated-gradient opacity-90"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Build {course.name}?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join the next cohort and transform your understanding of AI. Stop being a consumer—become a builder.
        </p>

        <div className="glass rounded-2xl p-8 md:p-12 max-w-lg mx-auto border border-white/10">
          <div className="text-5xl font-bold text-white mb-2">
            ${course.price.toLocaleString()}
          </div>
          <p className="text-white/60 mb-8">One-time payment &middot; Lifetime access</p>

          <button className="btn btn-lg w-full bg-white text-brand-slate hover:bg-white/90 border-0 mb-4">
            Enroll Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-white/50 text-sm">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderNew />
      </Suspense>
      <main className="pt-16">
        <CourseHero course={course} />
        <WhatYoullLearn course={course} />
        <Curriculum course={course} />
        <Technologies course={course} />
        <EnrollCTA course={course} />
      </main>
      <Footer />
    </>
  );
}
