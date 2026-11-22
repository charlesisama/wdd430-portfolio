"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProjectFormSchema, type FormState } from "./schema";


// 2. Create the Server Action

export async function createProject(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {

    const validatedFields = ProjectFormSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        type: formData.get("type"),
        technologies: formData.get("technologies"),
        link: formData.get("link"),
        yearCompleted: formData.get("yearCompleted"),
    });

    // Return field-level validation errors if validation fails
    if (!validatedFields.success) {
        return {
            message: "Please correct the errors below.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const {
        title,
        description,
        type,
        technologies,
        link,
        yearCompleted,
    } = validatedFields.data;

    const technologyList = technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean);

    // Save the project to the database
    try {
        await sql`
            INSERT INTO projects (
                title,
                description,
                type,
                technologies,
                link,
                year_completed
            )
            VALUES (
                ${title},
                ${description},
                ${type},
                ARRAY(
                    SELECT jsonb_array_elements_text(
                        ${JSON.stringify(technologyList)}::jsonb
                    )
                ),
                ${link || null},
                ${yearCompleted}
            )
        `;
    } catch (error) {
        console.error("Error creating project:", error);

        return {
            message: "Database error. Unable to create project.",
        };
    }

    revalidatePath("/projects");
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

    const validatedFields = ProjectFormSchema.safeParse(rawData);

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

    const technologyList: string[] = technologies
        .split(",")
        .map((technology: string) => technology.trim())
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


