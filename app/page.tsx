
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "StudyShelf",
    description:
      "A personal book and study discovery application built to help users discover books and organize their reading lists. It integrates book data from Google Books and Open Library, with local storage for managing a personal shelf.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Google Books API",
      "Open Library API",
      "Local Storage"
    ],
    link: "https://github.com/charlesisama/wdd330-team-one-"
  },
  {
    title: "Student Course Management API",
    description:
      "A RESTful backend API developed to manage student and course information. It supports CRUD operations, MongoDB data storage, API documentation with Swagger, and deployment on Render.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Swagger",
      "JavaScript"
    ],
    link: "https://github.com/charlesisama/CSE341"
  }
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Introduction section */}
      <section className="text-center py-16">
        <p className="text-blue-600 font-semibold mb-3">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
          Hello, I am Charles Isama.
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-600 mb-6">
          Engineer. Coder. Creator.
        </h2>

        <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
          I am a Chemical and Polymer Engineer exploring the
          world of software development. I enjoy combining
          engineering knowledge, programming and technology
          to solve practical problems and build useful applications.
        </p>
      </section>

      {/* Project collection */}
      <ProjectList projects={projects} />

    </main>
  );
}
