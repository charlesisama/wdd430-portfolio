
import { Suspense } from "react";
import Link from "next/link";
import {
    fetchFilteredProjects,
    fetchProjectsPages,
} from "@/lib/projects-db";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";

interface ProjectsContentProps {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>;
}

async function ProjectsContent({
    searchParams,
}: ProjectsContentProps) {
    const params = await searchParams;

    // Validate and sanitize the search query.
    const query = (params.query ?? "").trim().slice(0, 100);

    // Validate the requested page number.
    const requestedPage = Number(params.page);

    const currentPage =
        Number.isSafeInteger(requestedPage) && requestedPage > 0
            ? requestedPage
            : 1;

    // Calculate the total number of pages.
    const totalPages = await fetchProjectsPages(query);

    // Prevent requests for pages beyond the available results.
    const validPage = Math.min(
        currentPage,
        Math.max(1, totalPages)
    );

    // Retrieve projects for the requested page.
    const projects = await fetchFilteredProjects(
        query,
        validPage
    );

    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <section className="mb-12">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                    My Work
                </p>

                <h1 className="mb-4 text-4xl font-bold text-slate-900">
                    Projects Portfolio
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                    Explore a collection of my software development projects,
                    including academic assignments and independent projects.
                    Each project reflects my continuous learning and practical
                    application of modern web technologies.
                </p>
            </section>

            <section className="mb-12 grid gap-6 md:grid-cols-2">
                <Link
                    href="/projects/opensource"
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                    <h2 className="mb-3 text-xl font-bold text-slate-900">
                        Open Source Projects
                    </h2>

                    <p className="mb-4 text-slate-600">
                        Explore independent and collaborative projects that
                        demonstrate practical software development skills.
                    </p>

                    <span className="font-semibold text-blue-600">
                        Explore projects →
                    </span>
                </Link>

                <Link
                    href="/projects/school"
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                    <h2 className="mb-3 text-xl font-bold text-slate-900">
                        Academic Projects
                    </h2>

                    <p className="mb-4 text-slate-600">
                        Discover projects completed as part of my software
                        development coursework.
                    </p>

                    <span className="font-semibold text-blue-600">
                        Explore projects →
                    </span>
                </Link>
            </section>

            <section>
                <div className="mb-6">
                    <h2 className="mb-4 text-2xl font-bold text-slate-900">
                        All Projects
                    </h2>

                    <ProjectSearch key={query} />

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-slate-600">
                            {query
                                ? `Search results for "${query}"`
                                : "Browse all available projects"}
                        </p>

                        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            {projects.length} Projects
                        </span>
                    </div>
                </div>

                {projects.length === 0 ? (
                    <p className="rounded-lg bg-slate-50 p-6 text-slate-600">
                        No projects found. Try another search term.
                    </p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                            >
                                <div className="mb-3 flex items-start justify-between gap-3">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {project.title}
                                    </h3>

                                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">
                                        {project.type === "opensource"
                                            ? "Open Source"
                                            : "Academic"}
                                    </span>
                                </div>

                                <p className="mb-5 leading-relaxed text-slate-600">
                                    {project.description}
                                </p>

                                <div className="mb-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                                        >
                                            {technology}
                                        </span>
                                    ))}
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

                <Pagination totalPages={totalPages} />
            </section>
        </main>
    );
}

interface ProjectsPageProps {
    searchParams: Promise<{
        query?: string;
        page?: string;
    }>;
}

export default function ProjectsPage({
    searchParams,
}: ProjectsPageProps) {
    return (
        <Suspense
            fallback={
                <main className="mx-auto max-w-6xl px-6 py-12">
                    <p className="animate-pulse text-slate-500">
                        Loading projects...
                    </p>
                </main>
            }
        >
            <ProjectsContent searchParams={searchParams} />
        </Suspense>
    );
}
