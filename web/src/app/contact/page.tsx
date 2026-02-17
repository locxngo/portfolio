import { Mail, ArrowUpRight, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="flex-1 flex flex-col min-h-0 overflow-y-auto w-full">
            <div className="max-w-7xl mx-auto w-full py-6 md:py-0 my-auto">
                {/* Hero Heading */}
                <div className="mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-7xl lg:text-9xl font-extrabold tracking-wider uppercase mb-4 opacity-95 break-words">
                        CONTACT
                    </h1>
                    <p className="text-lg md:text-2xl font-medium text-primary/70 dark:text-white/70 max-w-xl leading-relaxed">
                        Let's build something together.
                        <span className="block mt-2 md:mt-1">Available for strategic architecture consulting and core system design.</span>
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pb-6 md:pb-0">
                    {/* Email */}
                    <a
                        className="group flex flex-col gap-4 p-6 md:p-8 border border-subtle hover:border-primary dark:hover:border-white transition-all duration-300 rounded-lg bg-white/50 md:bg-transparent"
                        href="mailto:hello@architect.dev"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-primary dark:text-white">
                                <Mail className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                            </span>
                            <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity text-primary dark:text-white">
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-1">
                                Email
                            </h3>
                            <p className="text-base md:text-lg font-bold break-all">xuanloc0511@gmail.com</p>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <Link
                        className="group flex flex-col gap-4 p-6 md:p-8 border border-subtle hover:border-primary dark:hover:border-white transition-all duration-300 rounded-lg bg-white/50 md:bg-transparent"
                        href="https://linkedin.com/in/locxngo"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-primary dark:text-white">
                                <Linkedin className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                            </span>
                            <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity text-primary dark:text-white">
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-1">
                                LinkedIn
                            </h3>
                            <p className="text-base md:text-lg font-bold break-all">linkedin.com/in/locxngo</p>
                        </div>
                    </Link>

                    {/* GitHub */}
                    <Link
                        className="group flex flex-col gap-4 p-6 md:p-8 border border-subtle hover:border-primary dark:hover:border-white transition-all duration-300 rounded-lg bg-white/50 md:bg-transparent"
                        href="https://github.com/locxngo"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-primary dark:text-white">
                                <Github className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                            </span>
                            <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity text-primary dark:text-white">
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-1">
                                GitHub
                            </h3>
                            <p className="text-base md:text-lg font-bold break-all">github.com/locxngo</p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
