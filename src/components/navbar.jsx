import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          blogify<span>.</span>
        </Link>

        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/posts">
            Posts
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
