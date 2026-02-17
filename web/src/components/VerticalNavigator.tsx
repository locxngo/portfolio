'use client';

import { useNavigation } from "../context/NavigationContext";

export default function VerticalNavigator() {
    const { currentSlide, totalSlides, goToSlide } = useNavigation();

    // If totalSlides is 1, return null to hide navigation
    if (totalSlides <= 1) return null;

    return (
        <aside className="fixed top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-20 right-10">
            <div className="flex flex-col gap-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        // Use w-1.5 h-1.5 instead of size-1.5 if size not available, but user had size-1.5
                        className={`size-1.5 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "bg-primary scale-125"
                                : "border border-primary/30 hover:bg-primary/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {/* Empty content */}
                    </button>
                ))}
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="h-24 w-px bg-primary/10"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] rotate-90 whitespace-nowrap origin-center translate-y-8 text-primary/40">
                    Timeline 2024
                </span>
            </div>
        </aside>
    );
}
