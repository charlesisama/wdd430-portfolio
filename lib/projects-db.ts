
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

// Number of items to display per page
export const ITEMS_PER_PAGE = 6;


// Function to fetch filtered projects based on search query and pagination
export async function fetchFilteredProjects(
    query: string,
    currentPage: number
): Promise<Project[]> {
    const searchTerm = query.trim();
    const offset =
        (Math.max(1, currentPage) - 1) * ITEMS_PER_PAGE;

    if (!searchTerm) {
        const { rows } = await sql<Project>`
            SELECT * FROM projects
            ORDER BY id
            LIMIT ${ITEMS_PER_PAGE}
            OFFSET ${offset}
        `;

        return rows;
    }

    const searchPattern = `%${searchTerm}%`;

    const { rows } = await sql<Project>`
        SELECT * FROM projects
        WHERE
            title ILIKE ${searchPattern}
            OR description ILIKE ${searchPattern}
            OR EXISTS (
                SELECT 1
                FROM unnest(technologies) AS tech(technology)
                WHERE technology ILIKE ${searchPattern}
            )
        ORDER BY id
        LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
    `;

    return rows;
}


// Function to fetch the total number of pages based on the search query
export async function fetchProjectsPages(
    query: string
): Promise<number> {
    const searchTerm = query.trim();

    if (!searchTerm) {
        const { rows } = await sql<{ count: number }>`
            SELECT COUNT(*)::int AS count
            FROM projects
        `;

        return Math.ceil(rows[0].count / ITEMS_PER_PAGE);
    }

    const searchPattern = `%${searchTerm}%`;

    const { rows } = await sql<{ count: number }>`
        SELECT COUNT(*)::int AS count
        FROM projects
        WHERE
            title ILIKE ${searchPattern}
            OR description ILIKE ${searchPattern}
            OR EXISTS (
                SELECT 1
                FROM unnest(technologies) AS tech(technology)
                WHERE technology ILIKE ${searchPattern}
            )
    `;

    return Math.ceil(rows[0].count / ITEMS_PER_PAGE);
}