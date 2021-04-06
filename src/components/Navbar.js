import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../style/navbar.module.scss";
import Logo from "./Logo";

function Navbar() {
  const [Click, setClick] = useState(false);
  const menuclose = () => setClick(false);
  const handleClick = () => setClick(!Click);
  const [PortfolioDropdown, setPortfolioDropdown] = useState(false);
  const [BlogDropdown, setBlogDropdown] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.brand} to="/" onClick={menuclose}>
          <Logo />
          <h3 className={styles.title}> Brance </h3>
        </Link>
        <button className={styles.menuIcon} onClick={handleClick}>
          {Click ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div
          className={
            Click ? `${styles.collapse} ${styles.open}` : styles.collapse
          }
        >
          <ul className={styles.nav}>
            <li className={styles.item}>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                exact
                to="/"
                onClick={menuclose}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to="/about"
                onClick={menuclose}
              >
                About
              </NavLink>
            </li>
            <li
              className={
                PortfolioDropdown ? `${styles.item} ${styles.collapsed}` : styles.item
              }
              onClick={() => setPortfolioDropdown(!PortfolioDropdown)}
            >
              <span
                className={styles.link}
                style={{ display: "flex", alignItems: "center" }}
              >
                Portfolio
                <IoIosArrowDown
                  style={{ marginLeft: "10px", marginTop: "px" }}
                />
              </span>
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <NavLink
                    className={styles.dropdownLink}
                    activeClassName={styles.active}
                    to="portfolio-two"
                    onClick={menuclose}
                  >
                    Column Two
                  </NavLink>
                </li>
                <li className={styles.dropdownItem}>
                  <NavLink
                    activeClassName={styles.active}
                    className={styles.dropdownLink}
                    to="portfolio-three"
                    onClick={menuclose}
                  >
                    Column Three
                  </NavLink>
                </li>
                <li className={styles.dropdownItem}>
                  <NavLink
                    activeClassName={styles.active}
                    className={styles.dropdownLink}
                    to="portfolio-four"
                    onClick={menuclose}
                  >
                    Column Four
                  </NavLink>
                </li>
              </ul>
            </li>
            <li
              className={
                BlogDropdown ? `${styles.item} ${styles.collapsed}` : styles.item
              }
              onClick={() => setBlogDropdown(!BlogDropdown)}
            >
              <span
                className={styles.link}
                style={{ display: "flex", alignItems: "center" }}
              >
                Blog
                <IoIosArrowDown
                  style={{ marginLeft: "10px", marginTop: "px" }}
                />
              </span>
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <NavLink
                    activeClassName={styles.active}
                    className={styles.dropdownLink}
                    to="blog"
                    onClick={menuclose}
                  >
                    Blog Page
                  </NavLink>
                </li>
                <li className={styles.dropdownItem}>
                  <NavLink
                    activeClassName={styles.active}
                    className={styles.dropdownLink}
                    to="blog-post"
                    onClick={menuclose}
                  >
                    Blog Post Page
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to="/contact"
                onClick={menuclose}
              >
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
