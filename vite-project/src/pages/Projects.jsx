import { projects } from "../data/Data";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="projects-title">Mijn Projecten</h1>

      {projects.map((proj, index) => (
        <div
          key={proj.id}
          className={`project-row ${index % 2 === 1 ? "reverse" : ""}`}
        >
          <ProjectCard
            title={proj.title}
            description={proj.description}
            image={proj.image}
            color={proj.color}
            link={proj.link}
          />
        </div>
      ))}
    </section>
  );
}
