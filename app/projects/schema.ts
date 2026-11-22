
import { z } from "zod";

export const ProjectFormSchema = z.object({
    title: z.string().min(3, "Title must contain at least 3 characters."),
    description: z.string().min(20, "Description must contain at least 20 characters."),
    type: z.enum(["opensource", "school"]),
    technologies: z.string().min(2, "Enter at least one technology."),
    link: z.union([
        z.string().url("Enter a valid URL."),
        z.literal("")
    ]),
    yearCompleted: z.coerce
        .number()
        .int("Year must be a whole number.")
        .min(1900, "Enter a valid completion year.")
        .refine(
            (year) => year <= new Date().getFullYear(),
            "Year cannot be in the future."
        ),
});

export type FormState = {
    message: string | null;
    errors?: {
        title?: string[];
        description?: string[];
        type?: string[];
        technologies?: string[];
        link?: string[];
        yearCompleted?: string[];
    };
};

export const initialState: FormState = {
    message: null,
    errors: {},
};
