import React, { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjust to navbar height
        behavior: "smooth",
      });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PORTFOLIO</div>

      {/* Burger Menu */}
      <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <div
          className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}
        ></div>
        <div
          className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}
        ></div>
        <div
          className={menuOpen ? `${styles.bar} ${styles.open}` : styles.bar}
        ></div>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
        <li className={styles.navItem} onClick={() => scrollToSection("hero")}>
          Home
        </li>
        <li
          className={styles.navItem}
          onClick={() => scrollToSection("education")}
        >
          Education
        </li>
        <li
          className={styles.navItem}
          onClick={() => scrollToSection("experience")}
        >
          Experiences
        </li>
        <li
          className={styles.navItem}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className={styles.navItem}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className={styles.navItem}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
