
import { sql } from "@vercel/postgres";

export interface Project {
    id: number;
    title: string;
    description: string;
    type: "opensource" | "school";
    technologies: string[];
    link?: string;
}

export async function getProjects(
    type?: "opensource" | "school" | null
): Promise<Project[]> {
    if (type) {
        const { rows } = await sql<Project>`
            SELECT * FROM projects
            WHERE type = ${type}
            ORDER BY id
        `;

        return rows;
    }

    const { rows } = await sql<Project>`
        SELECT * FROM projects
        ORDER BY id
    `;

    return rows;
}

export async function getProjectById(
    id: number
): Promise<Project | null> {
    const { rows } = await sql<Project>`
        SELECT * FROM projects
        WHERE id = ${id}
    `;

    return rows[0] ?? null;
}
