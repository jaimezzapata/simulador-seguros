import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/simulador" className="nav-link">
              Simulador
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
