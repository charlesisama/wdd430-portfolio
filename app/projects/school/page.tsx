
import { Suspense } from "react";
import type { Project } from "@/lib/projects-db";
import { getBaseUrl } from "@/lib/get-base-url";

// This component fetches and displays the school projects.
async function SchoolProjectList() {
    const baseUrl = await getBaseUrl();



    const response = await fetch(
        `${baseUrl}/api/projects?type=school`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch academic projects");
    }

    const result: { data: Project[] } = await response.json();
    const projects = result.data;

    return (
        <section>
            <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold text-slate-900">
                    Coursework Projects
                </h2>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                    {projects.length} Projects
                </span>
            </div>

            {projects.length === 0 ? (
                <p className="rounded-lg bg-slate-50 p-6 text-slate-600">
                    No academic projects are currently available.
                </p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                        >
                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                {project.title}
                            </h3>

                            <p className="mb-5 leading-relaxed text-slate-600">
                                {project.description}
                            </p>

                            <div className="mb-5">
                                <h4 className="mb-2 text-sm font-semibold text-slate-800">
                                    Technologies Used
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    View Project →
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

// Skeleton displayed while SchoolProjectList is loading.
function SchoolProjectsSkeleton() {
    return (
        <section className="animate-pulse">
            <div className="mb-6 flex items-center justify-between gap-3">
                <div className="h-7 w-52 rounded bg-slate-200" />
                <div className="h-9 w-28 rounded-full bg-slate-200" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {[1, 2].map((item) => (
                    <article
                        key={item}
                        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="mb-4 h-6 w-3/4 rounded bg-slate-200" />
                        <div className="mb-2 h-4 w-full rounded bg-slate-200" />
                        <div className="mb-2 h-4 w-5/6 rounded bg-slate-200" />
                        <div className="mb-6 h-4 w-2/3 rounded bg-slate-200" />
                        <div className="mb-3 h-4 w-40 rounded bg-slate-200" />

                        <div className="mb-6 flex gap-2">
                            <div className="h-6 w-20 rounded-full bg-slate-200" />
                            <div className="h-6 w-24 rounded-full bg-slate-200" />
                            <div className="h-6 w-16 rounded-full bg-slate-200" />
                        </div>

                        <div className="h-4 w-28 rounded bg-slate-200" />
                    </article>
                ))}
            </div>
        </section>
    );
}

// The main page renders independently of the project list.
export default function SchoolProjectsPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <section className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Portfolio / Academic
                </p>

                <h1 className="mb-4 text-4xl font-bold text-slate-900">
                    Academic Projects
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                    This collection highlights projects completed during
                    my software development studies. They demonstrate my
                    understanding of programming concepts, application
                    development, and practical problem-solving.
                </p>
            </section>

            <Suspense fallback={<SchoolProjectsSkeleton />}>
                <SchoolProjectList />
            </Suspense>
        </main>
    );
}
