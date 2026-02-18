'use client';

import { useNavigation } from "../../context/NavigationContext";
import { use, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function EducationPage() {
    const { currentSlide, setTotalSlides, goToSlide, setCurrentLabel } = useNavigation();

    useEffect(() => {
        setTotalSlides(3);
        goToSlide(0);
        return () => {
            setTotalSlides(1);
            goToSlide(0);
        };
    }, [setTotalSlides, goToSlide]);

    useEffect(() => {
        const labels = ["2020-2022", "2006-2010", "Certifications"];
        setCurrentLabel(labels[currentSlide] || "");
    }, [currentSlide, setCurrentLabel]);

    return (
        <main className="flex flex-1 items-start md:items-center justify-center relative w-full h-full max-h-full overflow-y-auto md:overflow-hidden">
            <div className="slide-container w-full min-h-full flex items-start md:items-center justify-center py-4 md:py-0">

                <AnimatePresence mode="wait">
                    {currentSlide === 0 && (
                        <motion.div
                            key="masters"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center p-4 md:p-6"
                        >
                            <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl shadow-gray-200 md:shadow-gray-300 border border-primary/5 overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 relative" id="milestone-1">
                                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                                    <div className="md:col-span-12">
                                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                                            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Highest Achievement</span>
                                            <div className="h-px flex-1 bg-primary/10"></div>
                                        </div>
                                        <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-none mb-6 md:mb-8">Master of Information Systems</h1>
                                        <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Institution</p>
                                                <p className="text-lg md:text-xl font-medium">Military Technical Academy</p>
                                                <p className="text-xs font-light">Hanoi, Vietnam</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Period</p>
                                                <p className="text-lg md:text-xl font-medium">2013 — 2016</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Location</p>
                                                <p className="text-lg md:text-xl font-medium">Hanoi, Vietnam</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-8 border-t border-primary/10 pt-6 md:pt-8 max-w-full">
                                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                                                Concentrated in Distributed System and Machine Learning. Thesis focused on the application of genetic programming for time series forecasting, comparing its performance against traditional ARIMA models in financial data analysis.
                                            </p>
                                            <ul className="space-y-3">
                                                <li className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-sm mt-1">book</span>
                                                    <span className="text-sm font-medium">Thesis: Genetic programming for time series forecastin</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {currentSlide === 1 && (
                        <motion.div
                            key="bachelors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center p-4 md:p-6"
                        >
                            <section className="w-full max-w-6xl bg-gray-50 rounded-3xl shadow-2xl shadow-gray-200 md:shadow-gray-300 border border-primary/5 overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 relative" id="milestone-2">
                                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
                                    <div className="md:col-span-12 order-1 md:order-2">
                                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                                            <span className="bg-gray-200 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Foundational Studies</span>
                                            <div className="h-px flex-1 bg-primary/10"></div>
                                        </div>
                                        <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-none mb-6 md:mb-8">Bachelor of Science in Engineering Physics</h2>
                                        <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Institution</p>
                                                <p className="text-lg md:text-xl font-medium">University of Engineering and Technology.</p>
                                                <p className="text-xs font-light">Vietnam National University, Hanoi, Vietnam</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Period</p>
                                                <p className="text-lg md:text-xl font-medium">2006 — 2010</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Major</p>
                                                <p className="text-lg md:text-xl font-medium">Math and Physic</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-8 border-t border-primary/10 pt-6 md:pt-8 max-w-full">
                                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                                                The main subjects focus on mathematics, quantum physics, and nanotechnology. They include probability theory and numerical analysis, as well as Monte Carlo simulations to calculate and predict the properties of magnetic materials when there are changes in the material structure at the nanoscale.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {currentSlide === 2 && (
                        <motion.div
                            key="certifications"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center p-4 md:p-6"
                        >
                            <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl shadow-gray-200 md:shadow-gray-300 border border-primary/5 overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 relative" id="milestone-3">
                                <div className="max-w-4xl w-full">
                                    <div className="text-center mb-4 md:mb-8">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Additional Education</span>
                                        <h2 className="text-3xl md:text-5xl font-black mt-2 md:mt-4">Certifications</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10 rounded-xl overflow-hidden">
                                        {/* Cert 1 */}
                                        <div className="bg-white p-6 md:p-10 hover:bg-gray-50 transition-colors">
                                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">workspace_premium</span>
                                                <span className="text-[10px] font-bold border border-primary px-2 py-0.5 rounded">2023</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">Course Certficate for Machine Learning</h3>
                                            <p className="text-xs md:text-sm text-gray-500 font-medium">Stanford Online</p>
                                            <div className="flex items-center gap-2 text-xs opacity-50 mt-2">
                                                <span>This course provides a broad introduction to machine learning, data-mining, and statistical pattern recognition.</span>
                                            </div>
                                        </div>
                                        {/* Cert 2 */}
                                        <div className="bg-white p-6 md:p-10 hover:bg-gray-50 transition-colors">
                                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">license</span>
                                                <span className="text-[10px] font-bold border border-primary px-2 py-0.5 rounded">2010-2012</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">Higher Diploma Software Engineering</h3>
                                            <p className="text-xs md:text-sm text-gray-500 font-medium">Hanoi Aptech</p>
                                            <div className="flex items-center gap-2 text-xs opacity-50 mt-2">
                                                <span>Focus on software development and engineering principles.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
