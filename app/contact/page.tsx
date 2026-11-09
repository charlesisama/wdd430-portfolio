import Link from "next/link";

const contactMethods = [
    {
        title: "Email",
        description: "For professional enquiries, opportunities, and collaboration.",
        value: "Send me an email",
        href: "mailto:charlesisama@gmail.com",
    },
    {
        title: "LinkedIn",
        description: "Connect with me and explore my professional background.",
        value: "View LinkedIn profile",
        href: "https://www.linkedin.com/in/charles-isama-465b28369",
    },
    {
        title: "GitHub",
        description: "Explore my software development projects and code.",
        value: "Visit GitHub profile",
        href: "https://github.com/charlesisama",
    },
];

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-16">

            <section className="mb-14 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Get in touch
                </p>

                <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Lets connect and build something meaningful.
                </h1>

                <p className="text-lg leading-relaxed text-slate-600">
                    I am always interested in connecting with professionals,
                    exploring new opportunities, and collaborating on meaningful
                    engineering and software development projects.
                    If you have an opportunity or an idea to discuss, I would be glad
                    to hear from you.
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
                {contactMethods.map((method) => (
                    <article
                        key={method.title}
                        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <h2 className="mb-3 text-xl font-bold text-slate-900">
                            {method.title}
                        </h2>

                        <p className="mb-6 min-h-16 leading-relaxed text-slate-600">
                            {method.description}
                        </p>

                        <Link
                            href={method.href}
                            target={method.href.startsWith("http") ? "_blank" : undefined}
                            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            {method.value} →
                        </Link>
                    </article>
                ))}
            </section>

            <section className="mt-14 rounded-xl bg-slate-900 px-8 py-10 text-white">
                <h2 className="mb-3 text-2xl font-bold">
                    A little about what I do
                </h2>

                <p className="max-w-3xl leading-relaxed text-slate-300">
                    My background combines chemical and polymer engineering with
                    growing experience in software development. I am interested in
                    building practical digital solutions, learning modern web
                    technologies, and applying technical problem-solving to
                    real-world challenges.
                </p>
            </section>

        </main>
    );
}