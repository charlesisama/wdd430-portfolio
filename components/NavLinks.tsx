"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-2">
            {links.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                            }`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}