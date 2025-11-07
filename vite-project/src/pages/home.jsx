import "../App.css"

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Thygo Huigen</h1>
          <p>
            Hallo allemaal, mijn naam is <strong>Thygo Huigen</strong>. 
            Ik ben op dit moment student op het <strong>Techniek College Rotterdam</strong> 
            en doe de opleiding <strong>Front-end Developer</strong>. 
            Ik wil graag nog veel leren zodat ik in de toekomst bij een goed bedrijf terecht kan komen!
          </p>

          <button className="start-button">Laten we beginnen </button>
        </div>

        <div className="home-image">
          <img src="./images/ik.png" alt="Thygo Huigen" />
        </div>
      </div>
    </div>
  );
}

export default Home;
