import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between">

                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/profile.jpg"
                        alt="Portrait of Charles Isama"
                        width={52}
                        height={52}
                        priority
                        className="rounded-full border-2 border-blue-400 object-cover"
                    />

                    <div>
                        <p className="text-lg font-bold text-slate-900">
                            Charles Isama
                        </p>
                        <p className="text-xs text-slate-500">
                            Engineer. Coder. Creator.
                        </p>
                    </div>
                </Link>

                <NavLinks />

            </div>
        </header>
    );
}