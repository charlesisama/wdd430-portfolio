
"use client";

import {
    usePathname,
    useSearchParams,
} from "next/navigation";

import Link from "next/link";

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({
    totalPages,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;

    function createPageURL(pageNumber: number) {
        const params = new URLSearchParams(searchParams);

        params.set("page", pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav
            aria-label="Project pagination"
            className="mt-8 flex items-center justify-center gap-4"
        >
            <Link
                href={createPageURL(currentPage - 1)}
                aria-disabled={currentPage <= 1}
                className={`rounded-lg border px-4 py-2 ${currentPage <= 1
                        ? "pointer-events-none opacity-50"
                        : "hover:bg-gray-100"
                    }`}
                tabIndex={currentPage <= 1 ? -1 : undefined}
            >
                Previous
            </Link>

            <span className="text-sm">
                Page {currentPage} of {totalPages}
            </span>

            <Link
                href={createPageURL(currentPage + 1)}
                aria-disabled={currentPage >= totalPages}
                className={`rounded-lg border px-4 py-2 ${currentPage >= totalPages
                        ? "pointer-events-none opacity-50"
                        : "hover:bg-gray-100"
                    }`}
                tabIndex={currentPage >= totalPages ? -1 : undefined}
            >
                Next
            </Link>
        </nav>
    );
}
