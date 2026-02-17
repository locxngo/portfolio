'use client';

import { useNavigation } from "../../context/NavigationContext";
import { useEffect } from "react";

export default function SkillsPage() {
    const { setTotalSlides, goToSlide } = useNavigation();

    useEffect(() => {
        setTotalSlides(1);
        goToSlide(0);
    }, [setTotalSlides, goToSlide]);

    return (
        <div className="flex-1 flex flex-col pt-20">
            {/* Header Section */}
            <header className="flex justify-between items-start mb-20 h-32">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-2 text-primary/60 uppercase tracking-[0.2em] text-[10px] font-bold">
                        <span className="w-12 h-[2px] bg-primary"></span>
                        Professional Portfolio
                    </div>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-primary uppercase">
                        Technical <br /> Expertise
                    </h1>
                </div>
            </header>

            <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/10 pt-16">
                {/* Category 1: Architecture */}
                <section className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                        <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Core Architecture</h2>
                    </div>
                    <ul className="flex flex-col gap-6">
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Microservices</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Scalable, decoupled service meshes with gRPC and REST.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Event-Driven Design</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Asynchronous messaging patterns using Kafka and RabbitMQ.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Distributed Systems</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">High-availability consensus, replication, and partitioning.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">DDD</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Strategic and tactical patterns for complex domain logic.</p>
                        </li>
                    </ul>
                </section>
                {/* Category 2: Languages & Frameworks */}
                <section className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                        <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Languages & Dev</h2>
                    </div>
                    <ul className="flex flex-col gap-6">
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Go (Golang)</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Concurrent backend services and CLI tooling.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Python & TypeScript</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Full-stack development with React, Node, and FastAPI.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">GraphQL & SQL</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Optimized API design and complex relational modeling.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">System Audits</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Deep-dive technical reviews and performance profiling.</p>
                        </li>
                    </ul>
                </section>
                {/* Category 3: Infrastructure & Leadership */}
                <section className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                        <h2 className="text-xl font-bold uppercase tracking-widest text-primary">Infra & Leadership</h2>
                    </div>
                    <ul className="flex flex-col gap-6">
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Cloud Native (AWS)</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">EKS, Lambda, RDS, and Serverless architectures.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Kubernetes & IaC</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Terraform, Helm, and container orchestration.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">CI/CD & Observability</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">GitOps pipelines, Prometheus, and Grafana stacks.</p>
                        </li>
                        <li className="group">
                            <h3 className="text-lg font-bold text-primary mb-1 group-hover:translate-x-1 transition-transform">Technical Strategy</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">Roadmapping, mentoring, and stakeholder management.</p>
                        </li>
                    </ul>
                </section>
            </main>

            {/* Side Navigation / Indicator for Skills Page */}
            <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-40 hidden xl:flex">
                <div className="flex flex-col gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                </div>
                <div className="h-32 w-[1px] bg-primary/10 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40">
                        Skills 2024
                    </div>
                </div>
            </div>

            {/* Background Decorative Element (Subtle grid pattern) */}
            <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            </div>
        </div>
    );
}
