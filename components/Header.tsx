import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-900 text-white shadow-md">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-5">

                <div className="flex items-center gap-3">
                    <Image
                        src="/profile.jpg"
                        alt="Portrait of Charles Isama"
                        width={52}
                        height={52}
                        priority
                        className="rounded-full object-cover border-2 border-blue-400"
                    />

                    <div>
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-wide hover:text-blue-300 transition-colors"
                        >
                            Charles Isama
                        </Link>

                        <p className="text-xs text-slate-300 mt-1">
                            Engineer. Coder. Creator.
                        </p>
                    </div>
                </div>

                <ul className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/about"
                            className="hover:text-blue-300 transition-colors"
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/projects"
                            className="hover:text-blue-300 transition-colors"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}