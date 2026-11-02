
import ProfileCard from "@/components/ProfileCard";

export default function About() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">

            <section className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-6">
                    About Me
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-5">
                    I am a Chemical and Polymer Engineer with a growing
                    passion for software development, technology and
                    problem-solving.
                </p>

                <p className="text-slate-600 leading-relaxed">
                    My professional experience in process engineering
                    has strengthened my analytical thinking and ability
                    to approach complex problems. I am currently expanding
                    my technical skills through software development studies
                    and practical programming projects.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    My Technical Interests
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <ProfileCard
                        title="Software Development"
                        description="Building web applications, learning full-stack development, and exploring technologies such as JavaScript, React, Next.js, Node.js and databases."
                    />

                    <ProfileCard
                        title="Engineering and Technology"
                        description="Applying engineering principles, analytical thinking and technical problem-solving to practical industrial and technological challenges."
                    />

                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    My Learning Journey
                </h2>

                <p className="text-slate-600 leading-relaxed">
                    I am currently pursuing a Software Development
                    education while building practical experience through
                    coursework and independent projects. My goal is to
                    combine my engineering foundation with software
                    development to create meaningful technological solutions.
                </p>
            </section>

        </main>
    );
}
