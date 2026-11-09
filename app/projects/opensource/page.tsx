import Link from "next/link";

const projects = [
    {
        title: "StudyShelf",
        category: "Book Discovery Application",
        description:
            "A personal book and study discovery application developed collaboratively. It allows users to discover books through external APIs and organize their personal reading lists using browser local storage.",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Google Books API",
            "Open Library API",
            "Local Storage",
        ],
        link: "https://github.com/charlesisama/wdd330-team-one-",
    },
    {
        title: "Student Course Management API",
        category: "Backend Development",
        description:
            "A RESTful API designed to manage student and course information. The project demonstrates backend development, database integration, CRUD operations, API documentation, and deployment.",
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Swagger",
            "JavaScript",
        ],
        link: "https://github.com/charlesisama/CSE341",
    },
];

export default function OpenSourceProjectsPage() {
    return (
        <main>
            <div className="mb-8">
                <p className="text-blue-600 font-semibold text-sm mb-2">
                    PRACTICAL DEVELOPMENT
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Open Source & Personal Projects
                </h2>

                <p className="text-slate-600 leading-relaxed">
                    These projects reflect my practical experience in building
                    applications, working with APIs, managing data, and collaborating
                    on software solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
                    >
                        <p className="text-blue-600 text-xs font-semibold uppercase mb-3">
                            {project.category}
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {project.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            {project.description}
                        </p>

                        <h4 className="text-sm font-semibold text-slate-800 mb-3">
                            Technologies
                        </h4>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
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
                            View on GitHub →
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}