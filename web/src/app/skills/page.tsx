'use client';

import { Cloud, CodeXml, LayoutGrid } from "lucide-react";
import { useNavigation } from "../../context/NavigationContext";
import { useEffect } from "react";

export default function SkillsPage() {
    const { setTotalSlides, goToSlide } = useNavigation();

    useEffect(() => {
        setTotalSlides(1);
        goToSlide(0);
    }, [setTotalSlides, goToSlide]);

    return (
        <div className="flex-1 flex flex-col min-h-full overflow-y-auto w-full items-center md:justify-center">
            <div className="flex flex-col  p-6 md:p-0 pt-4 md:pt-0 pb-0 md:max-w-7xl">
                {/* Header Section */}
                <header className="flex justify-between items-start mb-10 md:mb-20 h-auto md:h-24 shrink-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-primary uppercase">
                            Technical <br /> Expertise
                        </h1>
                    </div>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-primary/10 pt-8 md:pt-16 md:overflow-hidden">
                    {/* Category 1: Architecture */}
                    <section className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Core Architecture</h2>
                        </div>
                        <ul className="flex flex-col gap-6">
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Software and System design</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">Microservices, Distributed system, and Event-driven architecture.</p>
                            </li>
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Warehouse & Supply Chain</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">Warehouse Operations and Warehouse Execution System</p>
                            </li>
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">AI Agent & Agentic</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">Data Pipeline, Contextual Retrieval (RAG, BM25), Agent Orchestration, Prompting techniques</p>
                            </li>
                        </ul>
                    </section>
                    {/* Category 2: Languages & Frameworks */}
                    <section className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            {/* <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span> */}
                            <CodeXml size={24} className="text-primary" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Languages & Dev</h2>
                        </div>
                        <ul className="flex flex-col gap-6">
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Programming Languages</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">Java, Go, Python, Typescript (React, NextJS), Shell script</p>
                            </li>
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Frameworks & Platforms</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">Agno (Agent Framework), Micronaut, NextJS, ReactJS, Expo, Hadoop MapReduce, Spark, Flink, Storm</p>
                            </li>
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Databases</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">PostgreSQL, Redis, MySQL, MongoDB</p>
                            </li>
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Vector Databases</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">ChromaDB, PgVector, Leann, LanceDB</p>
                            </li>
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Message Brokers</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">NATS, RabbitMQ, Redis Streams, ActiveMQ, Kafka</p>
                            </li>
                        </ul>
                    </section>
                    {/* Category 3: Infrastructure & Leadership */}
                    <section className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Infrastructure</h2>
                        </div>
                        <ul className="flex flex-col gap-6">
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Docker & IaC</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">Docker, Ansible</p>
                            </li>
                            <li className="group">
                                <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">CI/CD & Observability</h3>
                                <p className="text-primary/60 text-sm leading-relaxed">Github Action, GitOps pipeline, Grafana stacks.</p>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>

            {/* Background Decorative Element (Subtle grid pattern) */}
            <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            </div>
        </div>
    );
}
