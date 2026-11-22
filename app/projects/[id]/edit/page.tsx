
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects-db";
import { updateProject } from "../../actions";

export const instant = false;

interface EditProjectPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditProjectPage({
    params,
}: EditProjectPageProps) {
    const { id } = await params;

    const project = await getProjectById(Number(id));

    if (!project) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <div className="mb-8">
                <Link
                    href="/projects"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                >
                    ← Back to Projects
                </Link>

                <h1 className="mt-6 mb-3 text-3xl font-bold text-slate-900">
                    Edit Project
                </h1>

                <p className="text-slate-600">
                    Update the information for {project.title}.
                </p>
            </div>

            <form
                action={updateProject.bind(null, id)}
                className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
                <div>
                    <label
                        htmlFor="title"
                        className="mb-2 block font-semibold text-slate-700"
                    >
                        Project Title
                    </label>

                    <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        minLength={3}
                        defaultValue={project.title}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="mb-2 block font-semibold text-slate-700"
                    >
                        Project Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        required
                        minLength={20}
                        rows={5}
                        defaultValue={project.description}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label
                        htmlFor="type"
                        className="mb-2 block font-semibold text-slate-700"
                    >
                        Project Category
                    </label>

                    <select
                        id="type"
                        name="type"
                        required
                        defaultValue={project.type}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="school">
                            Academic Project
                        </option>

                        <option value="opensource">
                            Open Source Project
                        </option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="technologies"
                        className="mb-2 block font-semibold text-slate-700"
                    >
                        Technologies Used
                    </label>

                    <input
                        id="technologies"
                        name="technologies"
                        type="text"
                        required
                        defaultValue={project.technologies.join(", ")}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <p className="mt-2 text-sm text-slate-500">
                        Separate technologies with commas.
                    </p>
                </div>

                <div>
                    <label
                        htmlFor="link"
                        className="mb-2 block font-semibold text-slate-700"
                    >
                        Project URL (Optional)
                    </label>

                    <input
                        id="link"
                        name="link"
                        type="url"
                        defaultValue={project.link ?? ""}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Save Changes
                    </button>

                    <Link
                        href="/projects"
                        className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </main>
    );
}
