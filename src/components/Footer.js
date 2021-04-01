import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styles from "../style/footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow}>
          <span>
            © 2021 Brance - Responsive Brance React Template. All Rights
            Reserved.
          </span>
          <div className={styles.icons}>
            <IconContext.Provider value={{ color: "#D4B2A6", size: 24 }}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaBehance />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
