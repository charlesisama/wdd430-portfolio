
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white mt-12">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center">

                <p className="text-sm text-slate-300">
                    Copyright &copy; {currentYear} Charles Isama.
                    All rights reserved.
                </p>

                <p className="text-xs text-slate-400 mt-2">
                    Built with Next.js, React, TypeScript and Tailwind CSS.
                </p>

                <a
                    href="https://github.com/charlesisama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-300 hover:text-white transition-colors"
                >
                    Visit my GitHub
                </a>

            </div>
        </footer>
    );
}
