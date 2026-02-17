'use client';

import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, RefreshCcw } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
    const { nextSlide, prevSlide, currentSlide, totalSlides } = useNavigation();
    const pathname = usePathname();
    const router = useRouter();

    // Hide footer on intro page
    if (pathname === '/') {
        return null;
    }

    const pages = ['/', '/experience', '/education', '/projects', '/skills', '/contact'];
    const currentIndex = pages.indexOf(pathname);

    // Determine previous and next pages
    const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
    const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

    return (
        <footer className="flex items-center justify-between pt-4 md:pt-8">
            {/* Footer Navigation */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                {/* Vertical Nav Buttons */}
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    {
                        (totalSlides > 1 && !pathname.includes('/contact')) && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                    className={`size-12 rounded-full border border-primary/20 flex items-center justify-center transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/5'}`}
                                >
                                    <span className="material-symbols-outlined text-primary text-xl">
                                        <ChevronUp size={16} />
                                    </span>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentSlide === totalSlides - 1}
                                    className={`size-12 rounded-full border border-primary/20 flex items-center justify-center transition-colors ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/5'}`}
                                >
                                    <span className="material-symbols-outlined text-primary text-xl">
                                        <ChevronDown size={16} />
                                    </span>
                                </button>
                            </>
                        )
                    }
                </div>

                {/* Section Navigation Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => prevPage && router.push(prevPage)}
                        disabled={!prevPage}
                        className={`h-12 px-8 rounded-lg border border-primary/20 flex items-center gap-3 transition-all ${!prevPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/5'}`}
                    >
                        <span className="material-symbols-outlined text-sm">
                            <ArrowLeft size={16} />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest">
                            Previous Section
                        </span>
                    </button>

                    {pathname === '/contact' ? (
                        <button
                            onClick={() => router.push('/')}
                            className="h-12 px-8 rounded-lg bg-primary text-white flex items-center gap-3 hover:bg-primary/90 transition-all"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest">
                                Restart Deck
                            </span>
                            <span className="material-symbols-outlined text-sm">
                                <RefreshCcw size={16} />
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={() => nextPage && router.push(nextPage)}
                            disabled={!nextPage}
                            className={`h-12 px-8 rounded-lg bg-primary text-white flex items-center gap-3 transition-all ${!nextPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}`}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest">
                                Next Section
                            </span>
                            <span className="material-symbols-outlined text-sm">
                                <ArrowRight size={16} />
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </footer>
    );
}
