//import React from "react";
//import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Navbar = () => {
  const status = useOnlineStatus();
  return (
    <div>
      <nav className="nav-card">
        <Link>{status ? "✅" : "🛑"}</Link>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/form">Login</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
