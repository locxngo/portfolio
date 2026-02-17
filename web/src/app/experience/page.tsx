'use client';

import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigation } from "../../context/NavigationContext";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
    {
        id: 1,
        company: "Fortna, Inc.",
        location: "Atlanta, GA",
        role: "Senior Software Architect",
        period: "Mar 2022 — Present",
        description: "Led the migration to a distributed microservices architecture handling <span class=\"font-semibold text-primary\">10M+ daily requests</span> across 12 global regions.",
        contributions: [
            { icon: "bolt", text: "Reduced system latency by 45% through strategic implementation of edge caching and optimized API gateways." },
            { icon: "groups", text: "Mentored a cross-functional team of 25+ engineers, implementing DDD principles and automated CI/CD pipelines." },
            { icon: "layers", text: "Architected a scalable data mesh platform integrating Snowflake and Kafka for real-time analytics." },
            { icon: "security", text: "Established Zero-Trust security protocols across all cloud infrastructure, achieving SOC2 compliance." }
        ]
    },
    {
        id: 2,
        company: "Fortna",
        location: "Hanoi, Vietnam",
        role: "Lead Software Architect",
        period: "Jan 2017 — Feb 2022",
        description: "Spearheaded the development of core machine learning infrastructure processing <span class=\"font-semibold text-primary\">5TB+ of data daily</span> for predictive analytics.",
        contributions: [
            { icon: "memory", text: "Optimized tensor processing pipelines, reducing model training time by 60% using distributed GPU clusters." },
            { icon: "api", text: "Designed and implemented high-throughput RESTful APIs serving 500+ enterprise clients with 99.99% uptime." },
            { icon: "database", text: "Migrated legacy monolithic database to partitioned PostgreSQL clusters, improving query performance by 40%." },
            { icon: "code", text: "Introduced comprehensive unit and integration testing suites, increasing code coverage from 40% to 90%." }
        ]
    },
    {
        id: 3,
        company: "StartUp Inc",
        location: "Austin, TX",
        role: "Full Stack Developer",
        period: "Jun 2015 — Feb 2017",
        description: "Built and launched the MVP for a fintech platform, scaling from <span class=\"font-semibold text-primary\">0 to 50k users</span> in the first year.",
        contributions: [
            { icon: "web", text: "Developed responsive React frontend and Node.js backend, ensuring seamless cross-platform user experience." },
            { icon: "payments", text: "Integrated Stripe and PayPal payment gateways, processing over $2M in transactions securely." },
            { icon: "cloud", text: "Deployed and managed AWS infrastructure using Terraform, establishing scalable cloud foundation." },
            { icon: "analytics", text: "Implemented real-time user analytics dashboard, driving data-informed product decisions." }
        ]
    }
];

export default function ExperiencePage() {
    const { currentSlide, setTotalSlides, nextSlide, prevSlide, totalSlides, goToSlide } = useNavigation();

    useEffect(() => {
        setTotalSlides(experiences.length);
        goToSlide(0);
        return () => {
            setTotalSlides(1);
            goToSlide(0);
        };
    }, [setTotalSlides, goToSlide]);

    const experience = experiences[currentSlide] || experiences[0];

    return (
        <main className="flex flex-1 items-center justify-center relative w-full h-full">
            <div className="slide-container w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={experience.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full max-w-5xl bg-white border border-gray-100 rounded-xl shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col md:flex-row min-h-[600px]"
                    >
                        {/* Role Visual/Identity */}
                        <div className="md:w-1/3 bg-gray-50 relative overflow-hidden flex items-center justify-center p-12 border-b md:border-b-0 md:border-r border-gray-100">
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                            <div className="z-10 text-center">
                                <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-primary">
                                    <img src='https://pbs.twimg.com/profile_images/1605565455695024129/4UM8RVOP_400x400.jpg' className="rounded-full"/>
                                    {/* <span className="material-symbols-outlined text-4xl text-primary">
                                        
                                    </span> */}
                                </div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Company</h3>
                                <p className="text-2xl font-bold text-primary">{experience.company}</p>
                                <p className="text-sm text-gray-500 mt-2 italic">{experience.location}</p>
                            </div>
                        </div>
                        {/* Role Details */}
                        <div className="md:w-2/3 p-8 md:p-16 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center bg-black text-white px-4 py-1.5 rounded mb-8">
                                    <span className="material-symbols-outlined text-sm mr-2"><Calendar size={18} /></span>
                                    <span className="text-xs font-bold tracking-widest uppercase">{experience.period}</span>
                                </div>
                                <div className="mb-10">
                                    <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-4">{experience.role}</h1>
                                    <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: experience.description }}></p>
                                </div>
                                <div className="space-y-6 mb-12">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2">Key Contributions</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {experience.contributions.map((contribution, index) => (
                                            <div key={index} className="flex gap-4">
                                                <span className="material-symbols-outlined text-primary">{contribution.icon}</span>
                                                <p className="text-sm text-gray-700 leading-snug">{contribution.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={prevSlide}
                                        disabled={currentSlide === 0}
                                        className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-black'}`}
                                    >
                                        <ChevronUp size={16} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        disabled={currentSlide === totalSlides - 1}
                                        className={`flex items-center justify-center size-10 rounded-full border border-gray-200 transition-colors ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-black'}`}
                                    >
                                        <ChevronDown size={16} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">Download PDF</button>
                                    <button className="bg-black text-white px-6 py-3 rounded-lg text-xs font-bold hover:shadow-xl transition-all flex items-center gap-2 uppercase tracking-widest">
                                        <span>Case Study</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
