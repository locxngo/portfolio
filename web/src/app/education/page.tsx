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
        <main className="flex flex-1 items-center justify-center relative w-full h-full">
            <div className="slide-container w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {currentSlide === 0 && (
                        <motion.div
                            key="masters"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full flex items-center justify-center p-6"
                        >
                            <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-primary/5 overflow-hidden flex flex-col items-center justify-center p-12 relative" id="milestone-1">
                                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                                    <div className="md:col-span-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Highest Achievement</span>
                                            <div className="h-px flex-1 bg-primary/10"></div>
                                        </div>
                                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-8">Master of Information Systems</h1>
                                        <div className="flex flex-wrap gap-x-12 gap-y-6">
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Institution</p>
                                                <p className="text-xl font-medium">Military Technical Academy</p>
                                                <p className="text-xs font-light">Hanoi, Vietnam</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Period</p>
                                                <p className="text-xl font-medium">2020 — 2022</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Location</p>
                                                <p className="text-xl font-medium">Hanoi, Vietnam</p>
                                            </div>
                                        </div>
                                        <div className="mt-12 border-t border-primary/10 pt-8 max-w-2xl">
                                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                                Concentrated in Digital Media and Interactive Design. Thesis explored the intersection of minimalist UI patterns and cognitive load in academic environments.
                                            </p>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                                                    <span className="text-sm font-medium">Graduated with Presidential Honors (GPA 3.9/4.0)</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                                                    <span className="text-sm font-medium">Research Grant: $15,000 for "Future of Interfaces"</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="md:col-span-4 flex justify-center md:justify-end">
                                        <div className="relative group">
                                            <div className="absolute -inset-4 border border-primary/5 rounded-xl group-hover:scale-105 transition-transform"></div>
                                            <div className="w-64 h-64 bg-background-light flex items-center justify-center rounded-xl overflow-hidden grayscale">
                                                <span className="material-symbols-outlined text-8xl text-primary/20">architecture</span>
                                            </div>
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
                            className="w-full h-full flex items-center justify-center p-6"
                        >
                            <section className="w-full max-w-6xl bg-gray-50 rounded-3xl shadow-2xl border border-primary/5 overflow-hidden flex flex-col items-center justify-center p-12 relative" id="milestone-2">
                                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                                    <div className="md:col-span-4 flex justify-center md:justify-start order-2 md:order-1">
                                        <div className="w-64 h-80 bg-white border border-primary/10 p-8 flex flex-col justify-between rounded-lg shadow-sm">
                                            <span className="material-symbols-outlined text-6xl text-primary/10">auto_awesome</span>
                                            <div>
                                                <h3 className="font-bold text-sm mb-1 uppercase tracking-tighter">Honors Program</h3>
                                                <p className="text-xs text-gray-500 leading-tight">Member of the Alpha Lambda Delta Honor Society for academic excellence.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-8 order-1 md:order-2">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="bg-gray-200 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Foundational Studies</span>
                                            <div className="h-px flex-1 bg-primary/10"></div>
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-8">Bachelor of Science in Engineering Physics</h2>
                                        <div className="flex flex-wrap gap-x-12 gap-y-6">
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Institution</p>
                                                <p className="text-xl font-medium">University of Engineering and Technology, Vietnam National University.</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Period</p>
                                                <p className="text-xl font-medium">2006 — 2010</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Major</p>
                                                <p className="text-xl font-medium">Physic</p>
                                            </div>
                                        </div>
                                        <div className="mt-12 space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-6 border border-primary/5 bg-white rounded-lg shadow-sm">
                                                    <p className="text-[10px] font-bold uppercase text-primary mb-2">Key Project</p>
                                                    <p className="text-sm text-gray-600 font-medium italic">"Re-defining the Grid: A study on Swiss Typography in digital mobile layouts."</p>
                                                </div>
                                                <div className="p-6 border border-primary/5 bg-white rounded-lg shadow-sm">
                                                    <p className="text-[10px] font-bold uppercase text-primary mb-2">Achievements</p>
                                                    <p className="text-sm text-gray-600 font-medium italic">Dean's List for 8 consecutive semesters. Lead UI Designer for the Parsons Annual.</p>
                                                </div>
                                            </div>
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
                            className="w-full h-full flex items-center justify-center p-6"
                        >
                            <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-primary/5 overflow-hidden flex flex-col items-center justify-center p-12 relative" id="milestone-3">
                                <div className="max-w-4xl w-full">
                                    <div className="text-center mb-16">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Additional Education</span>
                                        <h2 className="text-5xl font-black mt-4">Professional Certifications</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10 rounded-xl overflow-hidden">
                                        {/* Cert 1 */}
                                        <div className="bg-white p-10 hover:bg-gray-50 transition-colors">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                                                <span className="text-[10px] font-bold border border-primary px-2 py-0.5 rounded">2023</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 leading-tight">Advanced Interaction Design Certificate</h3>
                                            <p className="text-sm text-gray-500 font-medium">Interaction Design Foundation (IxDF)</p>
                                            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
                                                <span>Credential ID: IXDF-99201-B</span>
                                            </div>
                                        </div>
                                        {/* Cert 2 */}
                                        <div className="bg-white p-10 hover:bg-gray-50 transition-colors">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="material-symbols-outlined text-4xl text-primary">analytics</span>
                                                <span className="text-[10px] font-bold border border-primary px-2 py-0.5 rounded">2022</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 leading-tight">Human-Computer Interaction Specialization</h3>
                                            <p className="text-sm text-gray-500 font-medium">Georgia Institute of Technology</p>
                                            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
                                                <span>Credential ID: GT-UX-8812</span>
                                            </div>
                                        </div>
                                        {/* Cert 3 */}
                                        <div className="bg-white p-10 hover:bg-gray-50 transition-colors">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="material-symbols-outlined text-4xl text-primary">palette</span>
                                                <span className="text-[10px] font-bold border border-primary px-2 py-0.5 rounded">2021</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 leading-tight">Google UX Design Professional</h3>
                                            <p className="text-sm text-gray-500 font-medium">Coursera / Google</p>
                                            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
                                                <span>Credential ID: GOOG-UX-7712</span>
                                            </div>
                                        </div>
                                        {/* Cert 4 */}
                                        <div className="bg-white p-10 hover:bg-gray-50 transition-colors flex flex-col justify-center items-center text-center">
                                            <p className="text-sm font-bold uppercase tracking-widest mb-4">Continuing Education</p>
                                            <button className="bg-primary text-white text-xs px-6 py-3 rounded-lg font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                                View Full List
                                            </button>
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
