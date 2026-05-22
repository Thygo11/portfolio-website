import "../App.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Welkom op mijn website</h1>
          <p> Hallo allemaal, mijn naam is <strong>Thygo Huigen</strong>. Ik ben op dit moment student op het <strong>Techniek College Rotterdam</strong> en doe de opleiding <strong>Front-end Developer</strong>. Ik wil graag nog veel leren zodat ik in de toekomst bij een goed bedrijf terecht kan komen. Laten we nu beginnen!  </p>
        </div>

        <div className="home-image">
          <img src="/images/ik.png" alt="home" />
        </div>
      </div>
    </div>
  );
}
