
"use client";

import {
    useSearchParams,
    usePathname,
    useRouter,
} from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export default function ProjectSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const query = searchParams.get("query") ?? "";

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term.trim()) {
            params.set("query", term.trim());
        } else {
            params.delete("query");
        }

        params.set("page", "1");

        router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="w-full">
            <label
                htmlFor="project-search"
                className="mb-2 block text-sm font-medium"
            >
                Search projects
            </label>

            <input
                id="project-search"
                type="search"
                placeholder="Search by title, description, or technology..."
                defaultValue={query}
                onChange={(event) => handleSearch(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
}
