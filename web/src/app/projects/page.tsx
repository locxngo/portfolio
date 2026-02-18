"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { useNavigation } from "../../context/NavigationContext";

interface Project {
    id: number;
    title: string;
    subtitle: string;
    period: string,
    description: string;
    challenge: string;
    solution: string;
    tags: string[];
    links: {
        source: string;
        demo?: string;
    };
    visual: "code" | "yaml" | "chroma";
}

const projects: Project[] = [
    {
        id: 1,
        title: "Atticus",
        subtitle: "Project One",
        period: "2025 — Present",
        description: "",
        challenge: "Building a low-latency data processing engine that could handle over 50,000 concurrent websocket connections while maintaining sub-millisecond serialization speeds.",
        solution: "I implemented a custom memory-mapped ring buffer and utilized high-performance Go routines to distribute ingestion loads across multi-core architectures.",
        tags: ["AI Agent", "LLM", "RAG", "Hybrid Search", "Python", "Typescripts", "Ansible", "Github Action"],
        links: { source: "#", demo: "https://staging.atticus.vn/en" },
        visual: "code",
    },
    {
        id: 2,
        title: "Chroma Client",
        subtitle: "Project Two",
        period: "2025",
        description: "",
        challenge: "Modernizing legacy customer data pipelines into a real-time reactive interface that scales with enterprise-level datasets.",
        solution: "Developed a serverless event-driven architecture using AWS Lambda and DynamoDB Streams to ensure eventual consistency and zero-downtime migrations.",
        tags: ["RAG", "LLM", "Java", "Embedding"],
        links: { source: "https://github.com/locxngo/chroma-client" },
        visual: "chroma"
    },
    {
        id: 3,
        title: "Vulcan",
        subtitle: "Project Three",
        period: "2021",
        description: "",
        challenge: "Improving developer experience by reducing build times and automating security scanning without complex configuration files.",
        solution: "I built a Docker-native orchestration layer that leverages shared layer caching and automated YAML linting to speed up build cycles by 40%.",
        tags: ["Go", "CI/CD", "Workflow", "Docker"],
        links: { source: "https://github.com/locxngo/vulcan" },
        visual: "yaml"
    }
];

export default function ProjectsPage() {
    const { currentSlide, setTotalSlides, goToSlide, setCurrentLabel } = useNavigation();

    useEffect(() => {
        setTotalSlides(projects.length);
        goToSlide(0);
        return () => {
            setTotalSlides(1);
            goToSlide(0);
        };
    }, [setTotalSlides, goToSlide]);

    const project = projects[currentSlide] || projects[0];

    useEffect(() => {
        const experience = projects[currentSlide] || projects[0];
        setCurrentLabel("");
        if (experience) {
            setCurrentLabel(experience.period);
        }
    }, [currentSlide, setCurrentLabel]);

    const renderVisual = (type: Project["visual"]) => {
        switch (type) {
            case "code":
                return (
                    <div className="relative lg:h-full flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-linear-to-tr from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 opacity-50 blur-3xl rounded-full"></div>
                        <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB50SXF8RXhrqRTfWblTQywaNID9v0Pbcgkza7T7kOdLTWXBGR6Oe-jgfYVNs7QQmST5TRgGg5MNdSHOu6VrcYd7LPb1M-GQ_f0yyuIMD1XxvyPsMOQ2TOj-iImJ4JyCJAVaV9d71UopZ-L0D_TSMEMtB6G3N4WEFjj8C_5fxlUPpRQC3uHTYbruSlLbfFa3ZCf7pPEbAYS72lXMMGdEI0GfstuSya8dy5S_-X1Xj0qKVdd4TvkV_d81uspg8K7jy31hLUZ5jYrsQ')", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 p-6">
                                <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                    <div className="ml-auto text-xs text-slate-400 font-mono">Contract_Analysis_v2.pdf</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="h-2 w-full rounded bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="h-2 w-5/6 rounded bg-slate-200 dark:bg-slate-700"></div>
                                    <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
                                        <div className="flex gap-2 items-start">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">auto_awesome</span>
                                            <div className="space-y-1">
                                                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Risk Detected: Article 4 Clause 2</p>
                                                <p className="text-xs text-slate-600 dark:text-slate-400">This indemnity clause is unusually broad compared to standard market practice.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "yaml":
                return (
                    <div className="w-full h-full flex items-center justify-center group relative p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
                        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl border border-primary/5 p-6 flex flex-col gap-4 translate-y-4 group-hover:translate-y-2 transition-transform duration-700">
                            <div className="flex items-center gap-2 border-b border-primary/5 pb-4">
                                <div className="size-3 rounded-full bg-red-400"></div>
                                <div className="size-3 rounded-full bg-yellow-400"></div>
                                <div className="size-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex flex-col font-mono text-[10px] text-primary/60 leading-relaxed">
                                <p><span className="text-primary/80">name:</span> "Using Vulcan to build Vulcan"</p>
                                <p><span className="text-primary/80">jobs:</span></p>
                                <p className="pl-2"><span className="text-primary/80">vexec:</span></p>
                                <p className="pl-4"><span className="text-primary/80">name:</span> "Build vulcan executor binary"</p>
                                <p className="pl-4"><span className="text-primary/80">run-on:</span> "golang:1.16.5-alpine3.13"</p>
                                <p className="pl-4"><span className="text-primary/80">steps:</span></p>
                                <p className="pl-6">- <span className="text-primary/80">name:</span> "add missing and remove unused mod"</p>
                                <p className="pl-8"><span className="text-primary/80">run:</span> go mod tidy</p>
                                <p className="pl-6">- <span className="text-primary/80">name:</span> "download necessary modules and make vendored copy of dependencies"</p>
                                <p className="pl-8"><span className="text-primary/80">run:</span> |</p>
                                <p className="pl-10">go get -v ./cmd/vexec</p>
                                <p className="pl-10">rm -rf vendor</p>
                                <p className="pl-10">go mod vendor</p>
                                <p className="pl-6">- <span className="text-primary/80">name:</span> "build binary file"</p>
                                <p className="pl-8"><span className="text-primary/80">run:</span> go build -ldflags='-s -w' -o ./bin/vexec ./cmd/vexec</p>
                            </div>
                        </div>
                    </div>
                );
            case "chroma":
                return (
                    <div className="w-full h-full flex items-center justify-center p-8 group">
                        <div className="w-full max-w-lg bg-[#282c34] rounded-xl shadow-2xl overflow-hidden border border-slate-700/50 transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="ml-4 text-xs text-white/40 font-mono">Client.java</div>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-gray-300">
                                    <div><span className="text-[#c678dd]">Client</span> client = <span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">Client</span>(<span className="text-[#e5c07b]">Config</span>.defaultConfig());</div>
                                    <div className="h-2"></div>
                                    <div><span className="text-[#c678dd]">EmbeddingFunction</span> ef = <span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">OpenAIEmbeddingFunction</span>(</div>
                                    <div>    <span className="text-[#e5c07b]">EmbeddingOption</span>.builder()</div>
                                    <div>        .apiKey(<span className="text-[#e5c07b]">System</span>.getenv(<span className="text-[#98c379]">&quot;OPENAI_API_KEY&quot;</span>))</div>
                                    <div>        .model(<span className="text-[#e5c07b]">System</span>.getenv(<span className="text-[#98c379]">&quot;OPENAI_MODEL&quot;</span>))</div>
                                    <div>        .build()</div>
                                    <div>);</div>
                                    <div className="h-2"></div>
                                    <div><span className="text-[#c678dd]">Collection</span> collection = client.getCollection(</div>
                                    <div>    <span className="text-[#e5c07b]">CreateCollectionParam</span>.builder().name(<span className="text-[#98c379]">&quot;example&quot;</span>).getOrCreate(<span className="text-[#d19a66]">true</span>)</div>
                                    <div>        .embeddingFunction(ef).build()</div>
                                    <div>);</div>
                                    <div className="h-2"></div>
                                    <div><span className="text-[#c678dd]">QueryResponse</span> queryResponse = collection.query(</div>
                                    <div>    <span className="text-[#e5c07b]">QueryCollectionRecordParam</span>.builder()</div>
                                    <div>        .queryTexts(<span className="text-[#e5c07b]">List</span>.of(<span className="text-[#98c379]">&quot;This is a query document about florida&quot;</span>))</div>
                                    <div>        .numberOfResults(<span className="text-[#d19a66]">5</span>)</div>
                                    <div>        .build()</div>
                                    <div>);</div>
                                </pre>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <main className="flex flex-1 items-center justify-center relative w-full p-2 md:p-8 h-full overflow-y-auto md:overflow-hidden">
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
                                    <Github size={20} className="text-white" />
                                    <span className="text-xs font-bold uppercase tracking-wider">View Source</span>
                                </a>
                                {
                                    project.links.demo && (
                                        <a href={project.links.demo} className="flex items-center gap-2 border border-primary/20 px-5 py-3 rounded-lg hover:bg-primary/5 transition-colors text-primary">
                                            <ExternalLink size={20} className="text-primary" />
                                            <span className="text-xs font-bold uppercase tracking-wider">Live Demo</span>
                                        </a>
                                    )
                                }
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="hidden lg:block lg:col-span-7 h-100 md:h-125 w-full bg-primary/5 rounded-2xl border border-primary/10 overflow-hidden relative order-1 lg:order-2">
                            {renderVisual(project.visual)}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
