"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const linkClasses = (path: string) =>
    `text-xs font-bold uppercase tracking-widest transition-all pb-1 ${isActive(path)
      ? "text-primary border-b-2 border-primary"
      : "text-primary/60 hover:text-primary hover:border-b-2 hover:border-primary/30"
    }`;

  const mobileLinkClasses = (path: string) =>
    `text-lg font-bold uppercase tracking-widest transition-all py-2 ${isActive(path) ? "text-primary" : "text-primary/60"
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex items-center justify-between pb-8 md:pb-12 relative z-50">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button - Left Side */}
        <button
          className="md:hidden p-2 -ml-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <Link href="/" className={linkClasses("/")}>
          Intro
        </Link>
        <Link href="/experience" className={linkClasses("/experience")}>
          Experience
        </Link>
        <Link href="/education" className={linkClasses("/education")}>
          Education
        </Link>
        <Link href="/projects" className={linkClasses("/projects")}>
          Projects
        </Link>
        <Link href="/skills" className={linkClasses("/skills")}>
          Skills
        </Link>
        <Link href="/contact" className={linkClasses("/contact")}>
          Contact
        </Link>
      </nav>

      <div className="flex items-center">
        {/* Desktop Download Button */}
        <button className="hidden md:block bg-primary text-white rounded-full h-10 px-6 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all cursor-pointer">
          Download CV
        </button>

        {/* Mobile Download Icon - Right Side */}
        <button
          className="md:hidden p-2 -mr-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
          aria-label="Download CV"
        >
          <Download size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-[280px] bg-white shadow-2xl z-50 md:hidden flex flex-col p-6 border-r border-primary/10"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                  Navigation
                </h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 -mr-2 text-primary/60 hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses("/")}>
                  Intro
                </Link>
                <Link href="/experience" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses("/experience")}>
                  Experience
                </Link>
                <Link href="/education" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses("/education")}>
                  Education
                </Link>
                <Link href="/projects" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses("/projects")}>
                  Projects
                </Link>
                <Link href="/skills" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses("/skills")}>
                  Skills
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses("/contact")}>
                  Contact
                </Link>

                <div className="h-px bg-primary/10 my-2" />

                <button className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs py-2">
                  <Download size={16} />
                  Download CV
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
