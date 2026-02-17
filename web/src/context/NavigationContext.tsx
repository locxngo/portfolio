'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

type NavigationContextType = {
    currentSlide: number;
    totalSlides: number;
    setTotalSlides: (total: number) => void;
    nextSlide: () => void;
    prevSlide: () => void;
    goToSlide: (index: number) => void;
    currentLabel: string;
    setCurrentLabel: (label: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(1); // Default to 1 slide

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide((prev) => (index >= 0 && index < totalSlides ? index : prev));
    }, [totalSlides]);

    const [currentLabel, setCurrentLabel] = useState("");

    const value = useMemo(() => ({
        currentSlide,
        totalSlides,
        setTotalSlides,
        nextSlide,
        prevSlide,
        goToSlide,
        currentLabel,
        setCurrentLabel,
    }), [currentSlide, totalSlides, setTotalSlides, nextSlide, prevSlide, goToSlide, currentLabel]);

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};
