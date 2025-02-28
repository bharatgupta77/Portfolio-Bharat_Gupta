import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footerContainer}>
        <h2>Building digital experiences with passion.</h2>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Bharat Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
