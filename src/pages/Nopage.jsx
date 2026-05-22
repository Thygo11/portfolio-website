import { Link } from "react-router-dom";

const Nopage = () => {
  return (
    <div className="nopage-container">
      <h1>404 - Pagina niet gevonden</h1>
      <p>De pagina die je zoekt bestaat niet.</p>
      <Link to="/" className="btn orange-btn">
        Terug naar Home
      </Link>
    </div>
  );
};

export default Nopage;