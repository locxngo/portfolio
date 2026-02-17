"use client";

import { useNavigation } from "../../context/NavigationContext";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    challenge: string;
    solution: string;
    tags: string[];
    links: {
        source: string;
        demo: string;
    };
    visual: "code" | "dashboard" | "pipeline";
}

const projects: Project[] = [
    {
        id: 1,
        title: "Hyperion Engine",
        subtitle: "Project One",
        description: "",
        challenge: "Building a low-latency data processing engine that could handle over 50,000 concurrent websocket connections while maintaining sub-millisecond serialization speeds.",
        solution: "I implemented a custom memory-mapped ring buffer and utilized high-performance Go routines to distribute ingestion loads across multi-core architectures.",
        tags: ["Golang", "Redis", "WebSockets", "Prometheus"],
        links: { source: "#", demo: "#" },
        visual: "code"
    },
    {
        id: 2,
        title: "Nexus CRM",
        subtitle: "Project Two",
        description: "",
        challenge: "Modernizing legacy customer data pipelines into a real-time reactive interface that scales with enterprise-level datasets.",
        solution: "Developed a serverless event-driven architecture using AWS Lambda and DynamoDB Streams to ensure eventual consistency and zero-downtime migrations.",
        tags: ["React", "TypeScript", "Node.js", "AWS"],
        links: { source: "#", demo: "#" },
        visual: "dashboard"
    },
    {
        id: 3,
        title: "Lumen CI/CD",
        subtitle: "Project Three",
        description: "",
        challenge: "Improving developer experience by reducing build times and automating security scanning without complex configuration files.",
        solution: "I built a Docker-native orchestration layer that leverages shared layer caching and automated YAML linting to speed up build cycles by 40%.",
        tags: ["Docker", "Kubernetes", "Rust", "gRPC"],
        links: { source: "#", demo: "#" },
        visual: "pipeline"
    }
];

export default function ProjectsPage() {
    const { currentSlide, setTotalSlides, nextSlide, prevSlide, totalSlides, goToSlide } = useNavigation();

    useEffect(() => {
        setTotalSlides(projects.length);
        goToSlide(0);
        return () => {
            setTotalSlides(1);
            goToSlide(0);
        };
    }, [setTotalSlides, goToSlide]);

    const project = projects[currentSlide] || projects[0];

    const renderVisual = (type: Project["visual"]) => {
        switch (type) {
            case "code":
                return (
                    <div className="w-full h-full flex items-center justify-center group relative p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
                        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl border border-primary/5 p-6 flex flex-col gap-4 translate-y-4 group-hover:translate-y-2 transition-transform duration-700">
                            <div className="flex items-center gap-2 border-b border-primary/5 pb-4">
                                <div className="size-3 rounded-full bg-red-400"></div>
                                <div className="size-3 rounded-full bg-yellow-400"></div>
                                <div className="size-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex flex-col gap-2 font-mono text-[12px] text-primary/40 leading-relaxed">
                                <p className="text-primary/80">func (e *Engine) Run() {"{"}</p>
                                <p className="pl-4">for range e.input {"{"}</p>
                                <p className="pl-8 text-primary/80">e.serialize()</p>
                                <p className="pl-8 text-primary/80">e.broadcast()</p>
                                <p className="pl-4">{"}"}</p>
                                <p>{"}"}</p>
                            </div>
                        </div>
                    </div>
                );
            case "dashboard":
                return (
                    <div className="w-full h-full flex items-center justify-center group relative p-8">
                        <div className="absolute inset-0 flex items-center justify-center opacity-5">
                            <span className="material-symbols-outlined text-[200px]">layers</span>
                        </div>
                        <div className="w-full max-w-md bg-primary text-white rounded-lg shadow-2xl p-8 flex flex-col justify-between translate-y-4 group-hover:translate-y-2 transition-transform duration-700 aspect-[4/3]">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-1">
                                    <div className="h-2 w-24 bg-white/20 rounded"></div>
                                    <div className="h-2 w-16 bg-white/10 rounded"></div>
                                </div>
                                <div className="size-10 rounded-full border border-white/20"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-full bg-white/10 rounded-lg aspect-square"></div>
                                <div className="h-full bg-white/10 rounded-lg aspect-square"></div>
                                <div className="h-full bg-white/10 rounded-lg aspect-square"></div>
                            </div>
                        </div>
                    </div>
                );
            case "pipeline":
                return (
                    <div className="w-full h-full flex items-center justify-center group relative p-8">
                        <div className="w-full max-w-sm flex flex-col gap-8 items-center justify-center">
                            <div className="w-full flex justify-between items-center relative">
                                <div className="absolute h-px w-full bg-primary/10 z-0"></div>
                                <div className="size-12 rounded-full bg-white border border-primary/20 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform bg-white">
                                    <span className="material-symbols-outlined text-primary/40">source</span>
                                </div>
                                <div className="size-12 rounded-full bg-white border border-primary/20 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform delay-75 bg-white">
                                    <span className="material-symbols-outlined text-primary">build</span>
                                </div>
                                <div className="size-12 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform delay-150">
                                    <span className="material-symbols-outlined text-white">rocket_launch</span>
                                </div>
                            </div>
                            <div className="w-full h-2 bg-primary/5 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-primary group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                            </div>
                            <div className="text-[10px] font-mono text-primary/40 uppercase tracking-widest bg-primary/5 px-4 py-2 rounded">
                                Pipeline Executing: Deploying...
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <main className="flex flex-1 items-center justify-center relative w-full h-full">
            <div className="slide-container w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                    >
                        {/* Text Content */}
                        <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary/40">{project.subtitle}</span>
                                <h1 className="text-5xl md:text-6xl font-black leading-tight text-primary">{project.title}</h1>
                            </div>

                            <div className="flex flex-col gap-4 text-primary/70 leading-relaxed text-sm md:text-base">
                                <p>
                                    <span className="font-bold text-primary">The Challenge:</span> {project.challenge}
                                </p>
                                <p>
                                    <span className="font-bold text-primary">The Solution:</span> {project.solution}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="bg-primary/5 text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-primary/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a href={project.links.source} className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:opacity-90 transition-opacity">
                                    <span className="material-symbols-outlined text-[20px]">code</span>
                                    <span className="text-xs font-bold uppercase tracking-wider">View Source</span>
                                </a>
                                <a href={project.links.demo} className="flex items-center gap-2 border border-primary/20 px-5 py-3 rounded-lg hover:bg-primary/5 transition-colors text-primary">
                                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                                    <span className="text-xs font-bold uppercase tracking-wider">Live Demo</span>
                                </a>
                            </div>

                            {/* Navigation Controls (Mobile/Desktop) */}
                            <div className="flex items-center gap-4 mt-4">
                                <button
                                    onClick={prevSlide}
                                    disabled={currentSlide === 0}
                                    className={`p-3 rounded-full border border-primary/10 hover:border-primary/50 transition-colors ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/5'}`}
                                >
                                    <ChevronUp size={20} className="text-primary" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentSlide === totalSlides - 1}
                                    className={`p-3 rounded-full border border-primary/10 hover:border-primary/50 transition-colors ${currentSlide === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/5'}`}
                                >
                                    <ChevronDown size={20} className="text-primary" />
                                </button>
                                <span className="text-xs font-mono text-primary/40 ml-auto">
                                    0{currentSlide + 1} / 0{totalSlides}
                                </span>
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="lg:col-span-7 h-[400px] md:h-[500px] w-full bg-primary/5 rounded-2xl border border-primary/10 overflow-hidden relative order-1 lg:order-2">
                            {renderVisual(project.visual)}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
