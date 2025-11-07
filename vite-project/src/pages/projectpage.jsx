import "../app.css";

function Projectpage() {
  return (
    <section className="projectpage">
      <h1 className="projectpage-title">Project details</h1>

      <div className="project-grid">
        <div className="project-card">
          <img
            src="/images/project1.png"
            alt="Project 1 en 3"
            className="project-image"
          />
          <h2>Project 1 & 3</h2>
          <p>
            We hebben in dit project een eigen database ontworpen en gebouwd.
            Deze database functioneert als de basis voor een webshop waar
            klanten brood kunnen bestellen en verder veel info over het milieu.
            Daarnaast hebben we in de code ook een aparte toegang voor admins
            gemaakt. Zij kunnen klanten toevoegen, verwijderen of hun gegevens
            inzien. Klanten zelf kunnen uiteraard een eigen account aanmaken en
            hun gegevens aanpassen wanneer dat nodig is.
          </p>
          <button className="project-button">Zie website›</button>
        </div>

        
        <div className="project-card">
          <img
            src="/images/project2.png"
            alt="Project 2"
            className="project-image"
          />
          <h2>Project 2</h2>
          <p>
            Zoals ik al kort aangaf is dit een opdracht gemaakt met React. Dit
            was een van de eerste opdrachten die we maakten met de code en ik
            merk dat ik al veel vooruitgang boek met de code. En is de code veel
            fijner om te gebruiken in vergelijking met andere programmeertalen.
          </p>
          <button className="project-button">Zie preview›</button>
        </div>
      </div>
    </section>
  );
}

export default Projectpage;
