import Link from "next/link";
import CreateProjectForm from "./create-form";

export default function NewProjectPage() {
    return (
        <main className="mx-auto max-w-2xl px-6 py-12">
            <h1 className="mb-6 text-3xl font-bold">
                Create New Project
            </h1>

            <CreateProjectForm />

            <Link
                href="/projects"
                className="mt-6 inline-block text-blue-600 hover:underline"
            >
                Back to Projects
            </Link>
        </main>
    );
}