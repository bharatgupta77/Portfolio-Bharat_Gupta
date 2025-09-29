import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footerContainer}>
        <h2>Bringing ideas to life through code, creativity, and passion.</h2>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerBottom}>
          &copy; {new Date().getFullYear()} Bharat Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
