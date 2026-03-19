"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileHeader() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isProd = process.env.NODE_ENV === 'production';
    const repoName = 'portfolio';
    const basePath = isProd ? `/${repoName}` : '';
    const cvUrl = `${basePath}/cv.pdf`;

    const isActive = (path: string) => pathname === path;
    const mobileLinkClasses = (path: string) =>
        `text-lg font-bold uppercase tracking-widest transition-all py-2 ${isActive(path) ? "text-primary dark:text-slate-100" : "text-primary/60 dark:text-slate-100/60"
        }`;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className="flex items-center bg-white dark:bg-[#191919] p-4 border-b border-slate-100 dark:border-slate-800 justify-between sticky top-0 z-50">
                <div onClick={toggleMenu} className="text-primary dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined text-2xl">menu</span>
                </div>
                <div className="flex-1 px-4">
                    <h2 className="text-primary dark:text-slate-100 text-lg font-extrabold leading-tight tracking-tight uppercase">LN</h2>
                </div>
                <div className="flex items-center justify-end">
                    <a href={cvUrl} download="locngo_cv.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="bg-primary dark:bg-slate-100 text-white dark:text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-tight hover:opacity-90 transition-opacity">
                            Resume
                        </button>
                    </a>
                </div>
            </nav>

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
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
                        />

                        {/* Menu Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 bottom-0 left-0 w-72 bg-white dark:bg-[#191919] shadow-2xl z-[70] flex flex-col p-6 border-r border-slate-100 dark:border-slate-800 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-primary dark:text-slate-100 text-xs font-bold uppercase tracking-[0.2em]">
                                    Navigation
                                </h2>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 -mr-2 text-primary/60 dark:text-slate-100/60 hover:text-primary dark:hover:text-slate-100 transition-colors"
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

                                <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />

                                <a
                                    href={cvUrl}
                                    download="locngo_cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-primary dark:text-slate-100 font-bold uppercase tracking-widest text-xs py-2 w-full text-left"
                                >
                                    <Download size={16} />
                                    Download CV
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
