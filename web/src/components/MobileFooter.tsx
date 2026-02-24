"use client";

import { usePathname, useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

export default function MobileFooter() {
    const { nextSlide, prevSlide, currentSlide, totalSlides } = useNavigation();
    const pathname = usePathname();
    const router = useRouter();

    const pages = ['/', '/experience', '/education', '/projects', '/skills', '/contact'];
    const currentIndex = pages.indexOf(pathname);

    // Determine previous and next pages
    const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
    const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

    return (
        <footer className="bg-white dark:bg-[#191919] border-t border-slate-100 dark:border-slate-800 p-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
                {/* Horizontal Navigation */}
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 rounded-full p-1">
                    <button
                        onClick={() => prevPage && router.push(prevPage)}
                        disabled={!prevPage}
                        aria-label="Previous Page"
                        className={`w-12 h-12 flex items-center justify-center text-primary dark:text-slate-100 rounded-full transition-colors ${!prevPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white dark:hover:bg-slate-800'}`}
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                    <button
                        onClick={() => nextPage && router.push(nextPage)}
                        disabled={!nextPage}
                        aria-label="Next Page"
                        className={`w-12 h-12 flex items-center justify-center text-primary dark:text-slate-100 rounded-full transition-colors ${!nextPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white dark:hover:bg-slate-800'}`}
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>

                {/* Page Indicator */}
                <div className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}
                </div>

                {/* Vertical Navigation */}
                <div className="flex items-center bg-slate-50 dark:bg-slate-900 rounded-full p-1">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0 || totalSlides <= 1}
                        aria-label="Scroll Up"
                        className={`w-12 h-12 flex items-center justify-center text-primary dark:text-slate-100 rounded-full transition-colors ${currentSlide === 0 || totalSlides <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white dark:hover:bg-slate-800'}`}
                    >
                        <span className="material-symbols-outlined">expand_less</span>
                    </button>
                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1 || totalSlides <= 1}
                        aria-label="Scroll Down"
                        className={`w-12 h-12 flex items-center justify-center text-primary dark:text-slate-100 rounded-full transition-colors ${currentSlide === totalSlides - 1 || totalSlides <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white dark:hover:bg-slate-800'}`}
                    >
                        <span className="material-symbols-outlined">expand_more</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
