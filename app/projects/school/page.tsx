import Link from "next/link";

const academicProjects = [
    {
        title: "WDD430 Portfolio Application",
        course: "WDD430 – Web Full-stack Development",
        description:
            "A personal portfolio application built with Next.js, React, TypeScript, and Tailwind CSS. It demonstrates component-based development, application routing, reusable layouts, and modern frontend development practices.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/charlesisama/wdd430-portfolio",
    },
    {
        title: "Student Course Management API",
        course: "CSE341 – Web Services",
        description:
            "A backend development project focused on creating RESTful API endpoints for managing student and course records. It includes MongoDB integration, CRUD operations, authentication, and API documentation.",
        technologies: ["Node.js", "Express", "MongoDB", "Swagger"],
        link: "https://github.com/charlesisama/CSE341",
    },
    {
        title: "Dynamic Book Discovery Application",
        course: "WDD330 – Frontend Web Development",
        description:
            "A collaborative web application that integrates external book APIs to support book discovery and personal reading-list management.",
        technologies: ["JavaScript", "HTML", "CSS", "REST APIs"],
        link: "https://github.com/charlesisama/wdd330-team-one-",
    },
];

export default function SchoolProjectsPage() {
    return (
        <main>
            <div className="mb-8">
                <p className="text-blue-600 font-semibold text-sm mb-2">
                    LEARNING BY BUILDING
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Academic Projects
                </h2>

                <p className="text-slate-600 leading-relaxed">
                    My academic projects provide opportunities to apply concepts
                    learned in software development, from frontend interfaces
                    to backend services and database management.
                </p>
            </div>

            <div className="space-y-6">
                {academicProjects.map((project) => (
                    <article
                        key={project.title}
                        className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                    >
                        <p className="text-blue-600 text-xs font-semibold uppercase mb-3">
                            {project.course}
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {project.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-5">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <Link
                            href={project.link}
                            target="_blank"
                            className="font-semibold text-blue-600 hover:text-blue-800"
                        >
                            View Project →
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}