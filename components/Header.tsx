
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-900 text-white shadow-md">
            <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">

                {/* Website identity */}
                <div>
                    <Link href="/" className="text-2xl font-bold tracking-wide">
                        Charles Isama
                    </Link>
                    <p className="text-sm text-slate-300">
                        Engineer. Coder. Creator.
                    </p>
                </div>

                {/* Navigation links */}
                <ul className="flex items-center gap-6 text-sm font-medium">
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
                </ul>

            </nav>
        </header>
    );
}
