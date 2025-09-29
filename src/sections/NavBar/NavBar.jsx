import React, { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const isMobile = window.innerWidth <= 768;
      let offset;

      // Use Projects section offset for all sections to maintain consistency
      if (id === 'hero') {
        offset = 0; // Hero should be at top
      } else {
        // All sections use same offset as Projects section for consistency
        offset = isMobile ? 80 : 100;
      }

      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>PORTFOLIO</div>
        {/* Theme toggle switch - moved next to logo */}
        <div className={styles.toggleSwitch} onClick={toggleTheme}>
          <div className={`${styles.toggleSlider} ${theme === 'dark' ? styles.toggleSliderActive : ''}`}>
            <img
              className={styles.toggleIcon}
              src={themeIcon}
              alt="Theme toggle"
            />
          </div>
        </div>
      </div>

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
          onClick={() => scrollToSection("certificates")}
        >
          Certificates
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
