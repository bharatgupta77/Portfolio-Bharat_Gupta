import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const themeIcon = theme === "light" ? sun : moon;

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
        <li className={styles.navItem}>
          {/* Theme toggle switch - at the end of tabs */}
          <div className={styles.toggleSwitch} onClick={toggleTheme}>
            <div className={`${styles.toggleSlider} ${theme === 'dark' ? styles.toggleSliderActive : ''}`}>
              <img
                className={styles.toggleIcon}
                src={themeIcon}
                alt="Theme toggle"
              />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
