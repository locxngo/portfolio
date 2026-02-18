'use client';

import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigation } from "../../context/NavigationContext";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import fortna from "@/img/fortna.jpg"
import wala from "@/img/wala.png"
import cnd from "@/img/cnc.jpeg"
import vtcc from "@/img/vtcc.jpg"

const experiences = [
    {
        id: 1,
        company: "Fortna, Inc.",
        location: "Atlanta, GA",
        period: "Jan 2022 — Present",
        logo: "fortna",
        roles: [
            {
                title: "Senior Software Architect",
                period: "Mar 2025 — Present",
                current: true,
                description: "Led the migration to a distributed microservices architecture handling <span class=\"font-semibold text-primary\">10M+ daily requests</span> across 12 global regions.",
                contributions: [
                    { icon: "bolt", text: "Reduced system latency by 45% through strategic implementation of edge caching and optimized API gateways." },
                    { icon: "groups", text: "Mentored a cross-functional team of 25+ engineers, implementing DDD principles and automated CI/CD pipelines." },
                    { icon: "layers", text: "Architected a scalable data mesh platform integrating Snowflake and Kafka for real-time analytics." },
                    { icon: "security", text: "Established Zero-Trust security protocols across all cloud infrastructure, achieving SOC2 compliance." }
                ]
            },
            {
                title: "Software Architect",
                period: "Mar 2022 — Mar 2025",
                current: false,
                description: "Spearheaded the development of core machine learning infrastructure processing <span class=\"font-semibold text-primary\">5TB+ of data daily</span> for predictive analytics.",
                contributions: [
                    { icon: "memory", text: "Optimized tensor processing pipelines, reducing model training time by 60% using distributed GPU clusters." },
                    { icon: "api", text: "Designed and implemented high-throughput RESTful APIs serving 500+ enterprise clients with 99.99% uptime." },
                    { icon: "database", text: "Migrated legacy monolithic database to partitioned PostgreSQL clusters, improving query performance by 40%." },
                    { icon: "code", text: "Introduced comprehensive unit and integration testing suites, increasing code coverage from 40% to 90%." }
                ]
            }
        ]
    },
    {
        id: 2,
        company: "Fortna Vietnam LLC",
        location: "Hanoi, Vietnam",
        period: "Jan 2017 — Feb 2022",
        logo: "fortna",
        roles: [
            {
                title: "Software Architect",
                current: false,
                period: "",
                description: "Built and launched the MVP for a fintech platform, scaling from <span class=\"font-semibold text-primary\">0 to 50k users</span> in the first year.",
                contributions: [
                    { icon: "web", text: "Developed responsive React frontend and Node.js backend, ensuring seamless cross-platform user experience." },
                    { icon: "payments", text: "Integrated Stripe and PayPal payment gateways, processing over $2M in transactions securely." },
                    { icon: "cloud", text: "Deployed and managed AWS infrastructure using Terraform, establishing scalable cloud foundation." },
                    { icon: "analytics", text: "Implemented real-time user analytics dashboard, driving data-informed product decisions." }
                ]
            }
        ]
    },
    {
        id: 3,
        company: "YCTECH",
        location: "Hanoi, Vietnam",
        period: "Jan 2016 — Jan 2017",
        logo: "", // Placeholder if no specific logo
        roles: [
            {
                title: "Founder & Lead Architect",
                period: "",
                current: false,
                description: "Built and launched the MVP for a fintech platform, scaling from <span class=\"font-semibold text-primary\">0 to 50k users</span> in the first year.",
                contributions: [
                    { icon: "web", text: "Developed responsive React frontend and Node.js backend, ensuring seamless cross-platform user experience." },
                    { icon: "payments", text: "Integrated Stripe and PayPal payment gateways, processing over $2M in transactions securely." },
                    { icon: "cloud", text: "Deployed and managed AWS infrastructure using Terraform, establishing scalable cloud foundation." },
                    { icon: "analytics", text: "Implemented real-time user analytics dashboard, driving data-informed product decisions." }
                ]
            }
        ]
    },
    {
        id: 4,
        company: "Viettel Cyberspace ​Center - Viettel Group",
        location: "Hanoi, Vietnam",
        period: "Feb 2015 — June 2016",
        logo: "vtcc",
        roles: [
            {
                title: "Backend and Big-Data Developer",
                period: "",
                current: false,
                description: "Built and launched the MVP for a fintech platform, scaling from <span class=\"font-semibold text-primary\">0 to 50k users</span> in the first year.",
                contributions: [
                    { icon: "web", text: "Developed responsive React frontend and Node.js backend, ensuring seamless cross-platform user experience." },
                    { icon: "payments", text: "Integrated Stripe and PayPal payment gateways, processing over $2M in transactions securely." },
                    { icon: "cloud", text: "Deployed and managed AWS infrastructure using Terraform, establishing scalable cloud foundation." },
                    { icon: "analytics", text: "Implemented real-time user analytics dashboard, driving data-informed product decisions." }
                ]
            }
        ]
    },
    {
        id: 5,
        company: "Wala",
        location: "Hanoi, Vietnam",
        logo: "wala",
        period: "Feb 2012 — Jan 2015",
        roles: [
            {
                title: "Android Technical Lead",
                period: "",
                current: false,
                description: "Built and launched the MVP for a fintech platform, scaling from <span class=\"font-semibold text-primary\">0 to 50k users</span> in the first year.",
                contributions: [
                    { icon: "web", text: "Developed responsive React frontend and Node.js backend, ensuring seamless cross-platform user experience." },
                    { icon: "payments", text: "Integrated Stripe and PayPal payment gateways, processing over $2M in transactions securely." },
                    { icon: "cloud", text: "Deployed and managed AWS infrastructure using Terraform, establishing scalable cloud foundation." },
                    { icon: "analytics", text: "Implemented real-time user analytics dashboard, driving data-informed product decisions." }
                ]
            }
        ]
    },
    {
        id: 6,
        company: "CNC Software",
        location: "Hanoi, Vietnam",
        period: "Aug 2010 — Jan 2012",
        logo: "cnc",
        roles: [
            {
                title: "Android Technical Lead",
                period: "",
                current: false,
                description: "Built and launched the MVP for a fintech platform, scaling from <span class=\"font-semibold text-primary\">0 to 50k users</span> in the first year.",
                contributions: [
                    { icon: "web", text: "Developed responsive React frontend and Node.js backend, ensuring seamless cross-platform user experience." },
                    { icon: "payments", text: "Integrated Stripe and PayPal payment gateways, processing over $2M in transactions securely." },
                    { icon: "cloud", text: "Deployed and managed AWS infrastructure using Terraform, establishing scalable cloud foundation." },
                    { icon: "analytics", text: "Implemented real-time user analytics dashboard, driving data-informed product decisions." }
                ]
            }
        ]
    },
];

export default function ExperiencePage() {
    const { currentSlide, setTotalSlides, nextSlide, prevSlide, totalSlides, goToSlide, setCurrentLabel } = useNavigation();

    useEffect(() => {
        setTotalSlides(experiences.length);
        goToSlide(0);
        return () => {
            setTotalSlides(1);
            goToSlide(0);
        };
    }, [setTotalSlides, goToSlide, setCurrentLabel]);

    useEffect(() => {
        const experience = experiences[currentSlide] || experiences[0];
        let year = new Date().getFullYear().toString();
        setCurrentLabel(year);
        if (experience) {
            const period = experience.period;
            if (period) {
                const parts = period.split('—').map(p => p.trim());
                if (parts.length > 1) {
                    const end = parts[1];
                    if (end.toLowerCase() === 'present') {
                        year = new Date().getFullYear().toString();
                    } else {
                        const match = end.match(/\d{4}/);
                        if (match) year = match[0];
                    }
                } else {
                    const match = period.match(/\d{4}/);
                    if (match) year = match[0];
                }
            }
            setCurrentLabel(year);
        }
    }, [currentSlide, setCurrentLabel]);

    const experience = experiences[currentSlide] || experiences[0];

    const getLogoSrc = (logo: string) => {
        switch (logo) {
            case "fortna":
                return fortna;
            case "wala":
                return wala;
            case "cnc":
                return cnd;
            case "vtcc":
                return vtcc;
            default:
                return null;
        }
    }

    return (
        <main className="flex flex-1 items-center justify-center relative w-full p-2 md:p-4 h-full overflow-y-auto md:overflow-hidden">
            <div className="slide-container w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={experience.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full max-w-7xl bg-white border border-gray-100 rounded-xl shadow-2xl shadow-gray-200/50 md:shadow-gray-300 overflow-hidden flex flex-col md:flex-row h-full md:h-auto md:max-h-150"
                    >
                        {/* Role Visual/Identity */}
                        <div className="bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 border-b md:border-b-0 md:border-r border-gray-100 md:w-1/3 shrink-0">
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                            <div className="z-10 text-center">
                                <div className="mb-4 md:mb-6 inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-primary overflow-hidden bg-white shadow-sm">
                                    {experience.logo ? (
                                        // <img src={experience.logo} alt={experience.company} className="w-full h-full object-cover" />
                                        <Image src={getLogoSrc(experience.logo) || "/default-logo.png"} alt={experience.company} width={96} height={96} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">business</span>
                                    )}
                                </div>
                                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Company</h3>
                                <p className="text-xl md:text-2xl font-bold text-primary">{experience.company}</p>
                                <p className="text-xs md:text-sm text-gray-500 mt-2 italic">{experience.location}</p>
                            </div>
                        </div>
                        {/* Role Details */}
                        <div className="flex-1 p-6 md:p-16 flex flex-col overflow-y-auto md:w-2/3">
                            <div>
                                <div className="inline-flex items-center bg-black text-white px-3 py-1 md:px-4 md:py-1.5 rounded mb-6 md:mb-8 sticky top-0 z-20 shadow-md">
                                    <span className="material-symbols-outlined text-xs md:text-sm mr-2"><Calendar size={14} className="md:w-4.5 md:h-4.5" /></span>
                                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">{experience.period}</span>
                                </div>
                                {/* Timeline Container */}
                                <div className="space-y-8 md:space-y-12 relative before:absolute before:left-2.75 before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                                    {experience.roles.map((role, index) => (
                                        <div key={index} className="relative pl-8 md:pl-10">
                                            {/* Timeline Dot */}
                                            <div className={`absolute left-0 top-1.5 md:top-2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${role.current ? 'bg-black' : 'bg-gray-200'}`}>
                                                <div className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full ${role.current ? 'bg-white' : 'bg-gray-400'}`}></div>
                                            </div>

                                            <div className="mb-2">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">{role.period || ''}</span>
                                                <h2 className={`text-xl md:text-3xl font-black text-primary tracking-tight ${!role.current && 'opacity-70'}`}>{role.title}</h2>
                                            </div>

                                            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: role.description }}></p>

                                            <div className="grid grid-cols-1 gap-3 md:gap-4">
                                                {role.contributions.map((contribution, cIndex) => (
                                                    <div key={cIndex} className="flex gap-3 items-start p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                                        <span className={`material-symbols-outlined text-base md:text-lg mt-0.5 ${role.current ? 'text-primary' : 'text-gray-400'}`}>{contribution.icon}</span>
                                                        <p className="text-xs text-gray-700 leading-snug">{contribution.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
