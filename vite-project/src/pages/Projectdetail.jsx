import { useParams } from "react-router-dom";
import { projects } from "../data/data";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p>Project niet gevonden</p>;

  return (
    <div className="project-detail">
      <h1 className="project-detail-title">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="project-detail-image"
      />

      <p className="project-detail-description">{project.description}</p>

      <a
        href={project.link}
        className={`btn ${project.color}-btn`}
        target="_blank"
      >
        Open project
      </a>
    </div>
  );
}
