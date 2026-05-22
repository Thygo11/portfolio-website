import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, image, color, link }) {
  return (
    <>
      <img src={image} alt={title} className="project-photo" />

      <div className="project-text">
        <span className={`project-label ${color}`}>{title}</span>

        <p>{description}</p>

        <Link to={link} className={`btn ${color}-btn`}>
          Bekijk project
        </Link>
      </div>
    </>
  );
}
