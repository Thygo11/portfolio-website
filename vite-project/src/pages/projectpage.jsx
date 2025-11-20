import { Link } from "react-router-dom";
import "../app.css";

function Projectpage() {
  return (
    <section className="projectpage">
      <h1 className="projectpage-title">Projectenpagina</h1>

      
      <div className="project-row">
        <div className="project-text">
          <span className="project-label orange">Database PHPMyAdmin</span>
          <p>
            We hebben met deze project opdracht een eigen database gemaakt. Die
            functioneer voor een webshop waar je eten en drinken kan kopen.
          </p>
          <Link to="/project/1" className="btn orange-btn">
            Zie meer info ›
          </Link>
        </div>

        <img
          src="/images/project1.png"
          className="project-photo"
          alt="Database project"
        />
      </div>

     
      <div className="project-row reverse">
        <img
          src="/images/project2.png"
          className="project-photo"
          alt="React project"
        />

        <div className="project-text">
          <span className="project-label blue">Website React</span>
          <p>
            We zijn op het moment nog bezig met het ontwikkelen van de React
            website ik heb wel een andere opdracht die ik jullie kan laten zien.
            Zie het als een voorproefje.
          </p>
          <Link to="/project/2" className="btn blue-btn">
            Zie meer info ›
          </Link>
        </div>
      </div>

     
      <div className="project-row">
        <div className="project-text">
          <span className="project-label green">PHP Website</span>
          <p>
            Zoals ik bij een vorige project mij database laat zien wil ik nu de
            website laten zien die we er bij gemaakt hebben.
          </p>
          <Link to="/project/3" className="btn green-btn">
            Zie meer info ›
          </Link>
        </div>

        <img
          src="/images/project3.png"
          className="project-photo"
          alt="PHP website"
        />
      </div>
    </section>
  );
}

export default Projectpage;