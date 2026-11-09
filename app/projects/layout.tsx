import Link from "next/link";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <p className="text-blue-300 font-semibold text-sm mb-2">
                        MY DEVELOPMENT JOURNEY
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                        Projects & Experiments
                    </h1>

                    <p className="text-slate-300 max-w-2xl leading-relaxed">
                        A collection of projects through which I apply engineering
                        principles, programming knowledge, and creative problem-solving.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-6">
                <nav className="flex flex-wrap gap-3 border-b border-slate-200 pb-5">
                    <Link
                        href="/projects"
                        className="px-4 py-2 rounded-lg bg-slate-200 text-slate-900 font-medium hover:bg-slate-300 transition-colors"
                    >
                        Overview
                    </Link>

                    <Link
                        href="/projects/opensource"
                        className="px-4 py-2 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                        Open Source
                    </Link>

                    <Link
                        href="/projects/school"
                        className="px-4 py-2 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                        Academic Projects
                    </Link>
                </nav>

                <div className="py-8">
                    {children}
                </div>
            </div>
        </section>
    );
}