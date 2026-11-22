
"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// 1. Define the validation rules
const ProjectSchema = z.object({
    title: z.string().min(3, "Title must contain at least 3 characters."),
    description: z.string().min(20, "Description must contain at least 20 characters."),
    type: z.enum(["opensource", "school"]),
    technologies: z.string().min(2, "Enter at least one technology."),
    link: z.union([
        z.string().url("Enter a valid URL."),
        z.literal("")
    ]),
});

// 2. Create the Server Action
export async function createProject(formData: FormData) {

    // 3. Collect submitted form values
    const rawData = {
        title: formData.get("title"),
        description: formData.get("description"),
        type: formData.get("type"),
        technologies: formData.get("technologies"),
        link: formData.get("link"),
    };

    // 4. Validate the submitted information
    const validatedFields = ProjectSchema.safeParse(rawData);

    if (!validatedFields.success) {
        throw new Error("Invalid project information. Please check your entries.");
    }

    // 5. Prepare the validated information
    const {
        title,
        description,
        type,
        technologies,
        link,
    } = validatedFields.data;

    // Convert comma-separated technologies into an array
    const technologyList = technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean);

    // 6. Insert the new project into Neon
    try {
        await sql`
        INSERT INTO projects (
            title,
            description,
            type,
            technologies,
        link
    )
    VALUES (
        ${title},
        ${description},
        ${type},
        ARRAY(
            SELECT jsonb_array_elements_text(${JSON.stringify(technologyList)}::jsonb)
        ),
        ${link || null}
    )
`;
    } catch (error) {
        console.error("Error inserting project:", error);
        throw new Error("Failed to create the project. Please try again.");
    }
    // 7. Refresh the projects page
    revalidatePath("/projects");

    // 8. Redirect after successful creation
    redirect("/projects");
}

export async function updateProject(
    id: string,
    formData: FormData
) {
    const rawData = {
        title: formData.get("title"),
        description: formData.get("description"),
        type: formData.get("type"),
        technologies: formData.get("technologies"),
        link: formData.get("link"),
    };

    const validatedFields = ProjectSchema.safeParse(rawData);

    if (!validatedFields.success) {
        throw new Error("Invalid project information.");
    }

    const {
        title,
        description,
        type,
        technologies,
        link,
    } = validatedFields.data;

    const technologyList = technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean);

    try {
        await sql`
            UPDATE projects
            SET
                title = ${title},
                description = ${description},
                type = ${type},
            technologies = ARRAY(
                SELECT jsonb_array_elements_text(
                    ${JSON.stringify(technologyList)}::jsonb
                )
            ),
            link = ${link || null}
        WHERE id = ${Number(id)}
    `;
    } catch (error) {
        console.error("Error updating project:", error);
        throw new Error("Failed to update the project. Please try again.");
    }

    revalidatePath("/projects");
    redirect("/projects");
}


export async function deleteProject(formData: FormData) {
    const id = Number(formData.get("id"));

    // Validate the project ID
    if (!Number.isSafeInteger(id) || id <= 0) {
        throw new Error("Invalid project ID.");
    }

    // Delete only the project with the matching ID
    try {
        await sql`
            DELETE FROM projects
            WHERE id = ${id}
        `;
    } catch (error) {
        console.error("Error deleting project:", error);
        throw new Error("Failed to delete the project. Please try again.");
    }

    // Refresh the projects page after deletion
    revalidatePath("/projects");

    // Return to the projects list
    redirect("/projects");
}


