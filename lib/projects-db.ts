export interface Project {
    id: number;
    title: string;
    description: string;
    type: "opensource" | "school";
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "StudyShelf",
        description:
            "A personal book discovery and study application that integrates Google Books and Open Library APIs. Users can discover books and manage their personal reading shelf.",
        type: "opensource",
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
        id: 2,
        title: "Student Course Management API",
        description:
            "A RESTful API for managing student course records, built with Express and MongoDB. Includes CRUD operations, API documentation, and GitHub OAuth authentication.",
        type: "opensource",
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Swagger",
            "JavaScript",
        ],
        link: "https://github.com/charlesisama/CSE341",
    },
    {
        id: 3,
        title: "WDD430 Portfolio Application",
        description:
            "A personal developer portfolio built to demonstrate modern full-stack web development concepts, reusable components, routing, and API integration.",
        type: "school",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
        ],
        link: "https://github.com/charlesisama/wdd430-portfolio",
    },
    {
        id: 4,
        title: "Dynamic Book Discovery Application",
        description:
            "An academic team project exploring book discovery, external API integration, and browser-based data persistence.",
        type: "school",
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "REST APIs",
            "Local Storage",
        ],
        link: "https://github.com/charlesisama/wdd330-team-one-",
    },
];

export function getProjects(
    type?: "opensource" | "school" | null
): Project[] {
    if (type) {
        return projects.filter((project) => project.type === type);
    }

    return projects;
}

export function getProjectById(id: number): Project | null {
    return projects.find((project) => project.id === id) ?? null;
}