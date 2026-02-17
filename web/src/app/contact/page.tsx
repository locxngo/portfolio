import { Mail, ArrowUpRight, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="flex-1 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Hero Heading */}
                <div className="mb-12">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-wider uppercase mb-4 opacity-95">
                        CONTACT
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-primary/70 dark:text-white/70 max-w-xl">
                        Let's build something together.
                        <span className="block mt-1">Available for strategic architecture consulting and core system design.</span>
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Email */}
                    <a
                        className="group flex flex-col gap-4 p-8 border border-subtle hover:border-primary dark:hover:border-white transition-all duration-300 rounded-lg"
                        href="mailto:hello@architect.dev"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-primary dark:text-white">
                                <Mail size={32} strokeWidth={1.5} />
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary dark:text-white">
                                <ArrowUpRight size={24} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-1">
                                Email
                            </h3>
                            <p className="text-lg font-bold break-all">xuanloc0511@gmail.com</p>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <Link
                        className="group flex flex-col gap-4 p-8 border border-subtle hover:border-primary dark:hover:border-white transition-all duration-300 rounded-lg"
                        href="#"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-primary dark:text-white">
                                <Linkedin size={32} strokeWidth={1.5} />
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary dark:text-white">
                                <ArrowUpRight size={24} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-1">
                                LinkedIn
                            </h3>
                            <p className="text-lg font-bold break-all">linkedin.com/in/locxngo</p>
                        </div>
                    </Link>

                    {/* GitHub */}
                    <Link
                        className="group flex flex-col gap-4 p-8 border border-subtle hover:border-primary dark:hover:border-white transition-all duration-300 rounded-lg"
                        href="#"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-primary dark:text-white">
                                <Github size={32} strokeWidth={1.5} />
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary dark:text-white">
                                <ArrowUpRight size={24} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-1">
                                GitHub
                            </h3>
                            <p className="text-lg font-bold break-all">github.com/locxngo</p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
