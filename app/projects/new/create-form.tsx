
"use client";

import { useActionState } from "react";
import { createProject } from "../actions";
import { initialState } from "../schema";

export default function CreateProjectForm() {
    const [state, formAction, pending] = useActionState(
        createProject,
        initialState
    );

    return (
        <form action={formAction} className="space-y-6">

            <div>
                <label htmlFor="title" className="block font-medium">
                    Project Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    aria-invalid={!!state.errors?.title}
                    aria-describedby={
                        state.errors?.title ? "title-error" : undefined
                    }
                    className="mt-1 w-full rounded-md border p-2"
                />
                {state.errors?.title?.map((error) => (
                    <p
                        key={error}
                        id="title-error"
                        aria-live="polite"
                        className="text-sm text-red-600"
                    >
                        {error}
                    </p>
                ))}
            </div>

            <div>
                <label htmlFor="description" className="block font-medium">
                    Project Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    required
                    aria-invalid={!!state.errors?.description}
                    aria-describedby={
                        state.errors?.description
                            ? "description-error"
                            : undefined
                    }
                    className="mt-1 w-full rounded-md border p-2"
                />
                {state.errors?.description?.map((error) => (
                    <p
                        key={error}
                        id="description-error"
                        aria-live="polite"
                        className="text-sm text-red-600"
                    >
                        {error}
                    </p>
                ))}
            </div>

            <div>
                <label htmlFor="type" className="block font-medium">
                    Project Type
                </label>
                <select
                    id="type"
                    name="type"
                    required
                    className="mt-1 w-full rounded-md border p-2"
                >
                    <option value="school">School</option>
                    <option value="opensource">Open Source</option>
                </select>
            </div>

            <div>
                <label htmlFor="technologies" className="block font-medium">
                    Technologies (comma-separated)
                </label>
                <input
                    id="technologies"
                    name="technologies"
                    type="text"
                    required
                    aria-invalid={!!state.errors?.technologies}
                    aria-describedby={
                        state.errors?.technologies
                            ? "technologies-error"
                            : undefined
                    }
                    className="mt-1 w-full rounded-md border p-2"
                />
                {state.errors?.technologies?.map((error) => (
                    <p
                        key={error}
                        id="technologies-error"
                        aria-live="polite"
                        className="text-sm text-red-600"
                    >
                        {error}
                    </p>
                ))}
            </div>

            <div>
                <label htmlFor="yearCompleted" className="block font-medium">
                    Year Completed
                </label>
                <input
                    id="yearCompleted"
                    name="yearCompleted"
                    type="number"
                    required
                    min="1900"
                    aria-invalid={!!state.errors?.yearCompleted}
                    aria-describedby={
                        state.errors?.yearCompleted
                            ? "yearCompleted-error"
                            : undefined
                    }
                    className="mt-1 w-full rounded-md border p-2"
                />
                {state.errors?.yearCompleted?.map((error) => (
                    <p
                        key={error}
                        id="yearCompleted-error"
                        aria-live="polite"
                        className="text-sm text-red-600"
                    >
                        {error}
                    </p>
                ))}
            </div>

            <div>
                <label htmlFor="link" className="block font-medium">
                    Project Link (Optional)
                </label>
                <input
                    id="link"
                    name="link"
                    type="url"
                    className="mt-1 w-full rounded-md border p-2"
                />
            </div>

            <p aria-live="polite" className="text-sm text-red-600">
                {state.message}
            </p>

            <button
                type="submit"
                disabled={pending}
                className="rounded-md bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
                {pending ? "Creating Project..." : "Create Project"}
            </button>
        </form>
    );
}
