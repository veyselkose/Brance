import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
function Navbar() {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <Logo />
          <h3 className="title">Brance</h3>
        </Link>
        <button className="menu-icon" onClick={handleClick}>
          {Click ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className={Click ? "navbar-collapse open" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="portfolio"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" onClick={handleClick}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={handleClick}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
