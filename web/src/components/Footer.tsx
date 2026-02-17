'use client';

import { ArrowLeft, ChevronDown, ChevronUp, RefreshCcw } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";

export default function Footer() {
    const { nextSlide, prevSlide, currentSlide, totalSlides, goToSlide } = useNavigation();

    return (
        <footer className="flex items-center justify-between pt-12">
            {/* Footer Navigation */}
            <div className="flex items-center justify-between w-full">
                {/* Vertical Nav Buttons */}
                <div className="flex items-center gap-4">
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
                </div>
                {/* Copyright Text */}
                {/* <div className="text-primary/40 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                    © 2024 SENIOR SOFTWARE ARCHITECT PORTFOLIO. ALL RIGHTS RESERVED.
                </div> */}
                {/* Slide Navigation Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`h-12 px-8 rounded-lg border border-primary/20 flex items-center gap-3 transition-all ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/5'}`}
                    >
                        <span className="material-symbols-outlined text-sm">
                            <ArrowLeft size={16} />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest">
                            Previous Slide
                        </span>
                    </button>
                    <button
                        onClick={() => goToSlide(0)}
                        className="h-12 px-8 rounded-lg bg-primary text-white flex items-center gap-3 hover:bg-primary/90 transition-all"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest">
                            Restart Deck
                        </span>
                        <span className="material-symbols-outlined text-sm">
                            <RefreshCcw size={16} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
