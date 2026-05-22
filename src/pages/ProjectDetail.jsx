import { useParams, Link } from "react-router-dom";
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

      <Link
        to="/projects"
        className={`btn ${project.color}-btn`}
      >
        Terug naar projecten
      </Link>
    </div>
  );
}
