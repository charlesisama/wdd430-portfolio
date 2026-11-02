
import ProjectCard from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({
    projects
}: ProjectListProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-10">

            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Featured Projects
                </h2>

                <p className="text-slate-600">
                    A selection of my engineering and software development projects.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>

        </section>
    );
}
