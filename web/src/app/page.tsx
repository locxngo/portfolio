'use client'

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <main className="hidden md:flex flex-1 flex-col items-center justify-center text-center">
        <div className="max-w-3xl w-full space-y-8">
          {/* Decorative Element */}
          <div className="w-12 h-px bg-primary/20 mx-auto mb-8 md:mb-12"></div>
          <div className="space-y-4">
            <h1 className="text-primary text-4xl md:text-7xl lg:text-9xl font-extrabold tracking-widest uppercase leading-[0.9]">
              Loc Ngo<br />
            </h1>
            <h2 className="text-primary/60 text-xs md:text-lg font-medium tracking-[0.3em] uppercase pt-2 md:pt-4">
              Senior Software Architect | Technical Consultant
            </h2>
          </div>
          <div className="max-w-xl mx-auto pt-6 md:pt-8">
            <p className="text-primary/70 text-sm md:text-lg leading-relaxed font-normal px-4 md:px-0">
              Crafting scalable distributed systems and defining technical
              excellence for over 15 years. This is a journey through my
              architectural philosophy and key projects.
            </p>
          </div>
          {/* Primary CTA */}
          <div className="pt-8 md:pt-12">
            <Link href="/experience" className="group inline-flex items-center justify-center gap-4 bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                Start Journey
              </span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                <ChevronRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* --- MOBILE VIEW --- */}
      <main className="flex md:hidden flex-1 flex-col justify-center px-6 py-12">
        <div className="max-w-md">
          <h1 className="text-primary dark:text-slate-100 tracking-tighter text-[52px] font-extrabold leading-[1.05] mb-8 uppercase">
            Loc<br />Ngo
          </h1>
          <div className="w-12 h-1 bg-primary dark:bg-slate-100 mb-8"></div>
          <p className="text-slate-700 dark:text-slate-300 text-xl font-medium leading-relaxed max-w-xs">
            Senior Software Architect & Technical Consultant focusing on scalable distributed systems.
          </p>
          <div className="mt-12">
            <Link href="/experience" className="flex items-center gap-2 text-primary dark:text-slate-100 font-bold text-sm tracking-widest uppercase group">
              Start Journey
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
