'use client'

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center">
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
  );
}
