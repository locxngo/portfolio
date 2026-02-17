"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;
    const linkClasses = (path: string) => `text-xs font-bold uppercase tracking-widest transition-all pb-1 ${isActive(path) ? "text-primary border-b-2 border-primary" : "text-primary/60 hover:text-primary hover:border-b-2 hover:border-primary/30"}`;

    return (
        <header className="flex items-center justify-between pb-12">
            <div className="flex items-center gap-3">
                {/* <div className="size-6 bg-primary flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-white text-[16px]">
              school
            </span>
          </div>
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
            CURRICULUM VITAE
          </h2> */}
            </div>
            <nav className="hidden md:flex items-center gap-12">
                <Link href="/" className={linkClasses("/")}>Intro</Link>
                <Link href="/experience" className={linkClasses("/experience")}>Experience</Link>
                <Link href="#" className={linkClasses("/education")}>Education</Link>
                <Link href="#" className={linkClasses("/projects")}>Projects</Link>
                <Link href="#" className={linkClasses("/skills")}>Skills</Link>
                <Link href="/contact" className={linkClasses("/contact")}>Contact</Link>
            </nav>
            <button className="bg-primary text-white rounded-full h-10 px-6 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all">
                Download CV
            </button>
        </header >
    );
}
