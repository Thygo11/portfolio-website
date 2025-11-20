import { Link, Outlet, useLocation } from 'react-router-dom';
import '../App.css'; 

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
          </li>
          <li>
            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">Over Ons</Link>
          </li>
          <li>
            <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={`nav-link ${location.pathname === '/projectpage' ? 'active' : ''}`} to="/projectpage">Projectpage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
