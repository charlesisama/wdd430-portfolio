
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link
}: ProjectCardProps) {
    return (
        <article className="p-6 border-l-4 border-blue-600 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">

            <h3 className="text-xl font-bold text-slate-900 mb-3">
                {title}
            </h3>

            <p className="text-slate-600 mb-4 leading-relaxed">
                {description}
            </p>

            <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">
                    Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-semibold hover:underline"
                >
                    View Project →
                </a>
            )}

        </article>
    );
}
