import Link from "next/link";

const projectCategories = [
    {
        title: "Open Source & Personal Projects",
        description:
            "Explore my independent and collaborative software development projects, including web applications, APIs, and practical programming experiments.",
        href: "/projects/opensource",
        number: "01",
    },
    {
        title: "Academic Projects",
        description:
            "Explore projects developed through my Software Development education, covering frontend development, backend systems, databases, and full-stack technologies.",
        href: "/projects/school",
        number: "02",
    },
];

export default function ProjectsPage() {
    return (
        <main>
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Building Through Practice
                </h2>

                <p className="text-slate-600 leading-relaxed max-w-3xl">
                    My development journey combines practical engineering experience
                    with an expanding knowledge of software development. These projects
                    represent my progress in learning, experimenting, collaborating,
                    and building useful digital solutions.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectCategories.map((category) => (
                    <article
                        key={category.number}
                        className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <p className="text-blue-600 font-bold text-sm mb-4">
                            {category.number}
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {category.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            {category.description}
                        </p>

                        <Link
                            href={category.href}
                            className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800"
                        >
                            Explore Projects →
                        </Link>
                    </article>
                ))}
            </section>

            <section className="mt-12 rounded-xl bg-blue-50 border border-blue-100 p-7">
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                    Engineering Meets Software
                </h2>

                <p className="text-slate-700 leading-relaxed">
                    I am particularly interested in how software can improve
                    industrial processes, technical operations, data management,
                    and everyday problem-solving.
                </p>
            </section>
        </main>
    );
}