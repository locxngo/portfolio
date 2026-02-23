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
                description: "",
                contributions: [
                    { icon: "architecture", text: "Architected the Order Planner, a module that intelligently controls and balances order throughput volume across the distribution center." },
                    { icon: "simulation", text: "Designed and implemented a human operations simulation framework used to benchmark WES performance and validate algorithmic behavior under realistic DC conditions, decoupling quality assurance from physical operational dependencies." },
                    { icon: "graph_2", text: "Designed and implemented a custom partition support solution for NATS messaging, engineering a capability not available natively to meet the platform's scalability, ordering, and fault-tolerance requirements." },
                    { icon: "auto_awesome", text: "Pioneered AI adoption initiatives by defining best practices, processes, and documentation for integrating AI tooling into the software development lifecycle, measurably improving code quality and delivery velocity." }
                ]
            },
            {
                title: "Software Architect",
                period: "Mar 2022 — Mar 2025",
                current: false,
                description: "",
                contributions: [
                    { icon: "upgrade", text: "Enhanced the internal Java framework to support Java 17+, introducing an improved dependency injection mechanism via Google Guice to increase application flexibility, extensibility, and customization." },
                    { icon: "device_hub", text: "Designed and developed a Hardware Abstraction Service capable of managing 2,000+ concurrent devices across the distribution center, significantly reducing hardware constraints on application development teams." },
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
                description: "",
                contributions: [
                    { icon: "swap_horiz", text: "Led the architectural transformation of the company's legacy Warehouse Execution System (FortnaWES) into a modern microservices-based platform, improving scalability, maintainability, and deployment agility." },
                    { icon: "sdk", text: "Designed and built an internal Java-based development framework that accelerated application development and enforced consistent coding standards across all services." },
                    { icon: "modeling", text: "Engineered a unit-sorter simulator that enabled development, testing, and performance benchmarking of sorting services without requiring physical hardware integration, maintaining full quality and performance guarantees." },
                    { icon: "rebase", text: "Designed and developed the Orchestration Engine, coordinating order and work sequencing across all operational areas within the distribution center." },
                    { icon: "graph_4", text: "Architected and built a modular micro-frontend UI platform enabling parallel development across distributed teams, improving delivery speed and long-term maintainability." }
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
                description: "",
                contributions: [
                    { icon: "open_run", text: "Founded and led the technical division of an outsourcing startup, owning architectural strategy, solution design, and end-to-end technical decision-making across client engagements." },
                    { icon: "deployed_code", text: "Designed and delivered the first version of Yojee — a now-publicly listed logistics technology platform serving global freight forwarders and shippers including Maersk, CEVA Logistics, and Geodis" },
                    { icon: "architecture", text: "Defined system architecture for a real-time logistics platform handling complex supply chain operations across road, air, and ocean freight networks across Asia Pacific." },
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
                description: "Built large-scale distributed systems, delivering two high-impact platforms: a real-time spam SMS filtering system and a real-time message analytics platform.",
                contributions: [
                    { icon: "graph_7", text: "Designed and developed distributed backend systems and analytical tools for large-scale network traffic monitoring leveraging Kafka, Storm, Hadoop, and Zookeeper." },
                    { icon: "scan", text: "Architected and implemented a real-time spam SMS filtering and blocking system capable of processing nearly 1,000,000 SMS/minute, successfully eliminating 80–90% of spam across the entire carrier network — recognized with a Bronze Award at IT World Awards 2016" },
                    { icon: "query_stats", text: "Built a high-throughput, real-time message storage and analytics platform using HDFS and MapReduce, engineered to sustain throughput exceeding 1,000,000 messages/second" },
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
                description: "Owned full-cycle Android development for a consumer messaging application, with a deep focus on low-level performance engineering.",
                contributions: [
                    { icon: "android", text: "Developed and shipped a full-featured Android messaging application, owning end-to-end UI implementation and core feature delivery." },
                    { icon: "avg_time", text: "Benchmarked and optimized connection management libraries, improving network reliability and reducing latency for real-time messaging." },
                    { icon: "memory", text: "Engineered photo optimization pipelines to reduce bandwidth consumption and enhance media loading performance." },
                    { icon: "bolt", text: "Optimized UI rendering pipelines, application performance, and battery efficiency, resulting in improved end-user experience." }
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
                description: "Led technical solution design and mobile architecture for client projects",
                contributions: [
                    { icon: "architecture", text: "Architected and designed mobile application frameworks and communication models aligned with client requirements and technical speciﬁcations." },
                    { icon: "partner_exchange", text: "Led end-to-end solution design for client-facing Android applications, translating business concepts into eﬃcient technical implementations." },
                    { icon: "code", text: "Researched, developed internal libraries and frameworks to streamline the development lifecycle and accelerate delivery" },
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
                        <div className="flex-1 p-6 md:p-10 flex flex-col overflow-y-auto md:w-2/3">
                            <div>
                                <div className="inline-flex items-center bg-black text-white px-3 py-1 md:px-4 md:py-1.5 rounded mb-6 md:mb-8 sticky top-0 z-20 shadow-md">
                                    <span className="material-symbols-outlined text-xs md:text-sm mr-2"><Calendar size={14} className="md:w-4.5 md:h-4.5" /></span>
                                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">{experience.period}</span>
                                </div>
                                {/* Timeline Container */}
                                <div className="space-y-4 md:space-y-8 relative before:absolute before:left-2.75 before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
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

                                            <div className="grid grid-cols-1 gap-1 md:gap-2">
                                                {role.contributions.map((contribution, cIndex) => (
                                                    <div key={cIndex} className="flex gap-3 items-start p-1 rounded-lg hover:bg-gray-50 transition-colors">
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
