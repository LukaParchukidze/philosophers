import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper blue-grey darken-3">
          <Link to="/" className="brand-logo">
            <i className="material-icons" style={{ fontSize: "32px" }}>
              school
            </i>
            Philosophers
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/philosophers">Philosophers</Link>
            </li>
            <li>
              <Link to="/chronology">Chronology</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
