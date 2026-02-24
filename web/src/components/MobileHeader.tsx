"use client";

import { Menu } from "lucide-react";

export default function MobileHeader() {
    const isProd = process.env.NODE_ENV === 'production';
    const repoName = 'portfolio';
    const basePath = isProd ? `/${repoName}` : '';
    const cvUrl = `${basePath}/cv.pdf`;

    return (
        <nav className="flex items-center bg-white dark:bg-[#191919] p-4 border-b border-slate-100 dark:border-slate-800 justify-between sticky top-0 z-50">
            <div className="text-primary dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer">
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
    );
}
