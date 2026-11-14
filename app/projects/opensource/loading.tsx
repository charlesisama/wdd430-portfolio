
export default function Loading() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-12 animate-pulse">
            {/* Page heading skeleton */}
            <section className="mb-10">
                <div className="mb-3 h-4 w-40 rounded bg-slate-200" />

                <div className="mb-4 h-10 w-80 max-w-full rounded bg-slate-200" />

                <div className="mb-2 h-5 w-full max-w-2xl rounded bg-slate-200" />
                <div className="h-5 w-3/4 max-w-xl rounded bg-slate-200" />
            </section>

            {/* Project collection heading */}
            <section>
                <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="h-7 w-52 rounded bg-slate-200" />
                    <div className="h-9 w-28 rounded-full bg-slate-200" />
                </div>

                {/* Project card skeletons */}
                <div className="grid gap-6 md:grid-cols-2">
                    {[1, 2].map((item) => (
                        <article
                            key={item}
                            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="mb-4 h-6 w-3/4 rounded bg-slate-200" />

                            <div className="mb-2 h-4 w-full rounded bg-slate-200" />
                            <div className="mb-2 h-4 w-5/6 rounded bg-slate-200" />
                            <div className="mb-6 h-4 w-2/3 rounded bg-slate-200" />

                            <div className="mb-3 h-4 w-40 rounded bg-slate-200" />

                            <div className="mb-6 flex flex-wrap gap-2">
                                <div className="h-6 w-20 rounded-full bg-slate-200" />
                                <div className="h-6 w-24 rounded-full bg-slate-200" />
                                <div className="h-6 w-16 rounded-full bg-slate-200" />
                            </div>

                            <div className="h-4 w-28 rounded bg-slate-200" />
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
