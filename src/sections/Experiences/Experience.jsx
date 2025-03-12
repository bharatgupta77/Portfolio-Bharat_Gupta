import React, { useState, useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import { motion, AnimatePresence } from "framer-motion";

import hsbc from "../../assets/hsbc_logo.png";
import atechnos from "../../assets/atechnos_logo.jpeg";
import persistent_systems from "../../assets/persistent.png";

const experiences = [
  {
    id: 1,
    logo: hsbc,
    company: "HSBC Software Development",
    role: "Senior Software Engineer | Software Engineer | Trainee Software Engineer",
    duration: "Sept 2020 - July 2024",
    description:
      "Developed innovative solutions and optimized performance for the platform.",
    techStack: "React, Node.js, GraphQL",
    awards: "Employee of the Month",
  },
  {
    id: 2,
    logo: atechnos,
    company: "ATechnos",
    role: "Web Development Intern",
    duration: "June 2020 - Aug 2020",
    description:
      "Built user-friendly interfaces and improved accessibility standards.",
    techStack: "Vue.js, Sass, JavaScript",
    awards: "Best UI/UX Design Award",
  },
  {
    id: 3,
    logo: persistent_systems,
    company: "Persistent Systems",
    role: "BE Project Intern",
    duration: "August 2019 - May 2020",
    description:
      "Worked on both backend and frontend development ensuring robust applications.",
    techStack: "Angular, Python, Django",
    awards: "Team Excellence Award",
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const inactivityTimerRef = useRef(null);
  const autoPlayIntervalRef = useRef(null);
  const activeExp = experiences[currentIndex];

  // Reset the inactivity timer: if no user click occurs for 60s, enable auto-play.
  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 60000);
  };

  // On mount and whenever currentIndex changes by user (i.e. when auto-play is off), reset inactivity timer.
  useEffect(() => {
    if (!isAutoPlay) {
      resetInactivityTimer();
    }
    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [currentIndex, isAutoPlay]);

  // Auto-play effect: when isAutoPlay is true, start rotating carousel every 3 seconds.
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
      }, 3000);
    } else {
      if (autoPlayIntervalRef.current)
        clearInterval(autoPlayIntervalRef.current);
    }
    return () => {
      if (autoPlayIntervalRef.current)
        clearInterval(autoPlayIntervalRef.current);
    };
  }, [isAutoPlay]);

  // Handle tab click: disable auto-play and reset inactivity timer.
  const handleTabClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    resetInactivityTimer();
  };

  return (
    <div id="experience" className={styles.container}>
      {/* Section Heading */}
      <h1 className={styles.sectionHeading}>Experiences</h1>

      {/* Tabs with Framer Motion animations */}
      <div className={styles.tabs}>
        {experiences.map((exp, index) => (
          <motion.button
            key={exp.id}
            className={`${styles.tab} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {exp.company}
          </motion.button>
        ))}
      </div>

      {/* Carousel card with left-to-right animation using AnimatePresence */}
      <div className={styles.carousel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className={styles.card}
          >
            {/* Logo / Image Section */}
            <div className={styles.logoContainer}>
              <img
                src={activeExp.logo}
                alt={`${activeExp.company} logo`}
                className={styles.logo}
              />
            </div>

            {/* Text Content Section */}
            <div className={styles.cardContent}>
              <h3 className={styles.company}>{activeExp.company}</h3>

              <p className={styles.role}>
                <span className={styles.emoji} role="img" aria-label="Role">
                  👨‍💻
                </span>
                <strong>Role:</strong> {activeExp.role}
              </p>

              <p className={styles.duration}>
                <span className={styles.emoji} role="img" aria-label="Calendar">
                  🗓️
                </span>
                <strong>Duration:</strong> {activeExp.duration}
              </p>

              <p className={styles.description}>
                <span className={styles.emoji} role="img" aria-label="Idea">
                  💡
                </span>
                {activeExp.description}
              </p>

              <p className={styles.techStack}>
                <span className={styles.emoji} role="img" aria-label="Gear">
                  ⚙️
                </span>
                <strong>Tech Stack:</strong> {activeExp.techStack}
              </p>

              <p className={styles.awards}>
                <span className={styles.emoji} role="img" aria-label="Trophy">
                  🏆
                </span>
                <strong>Awards:</strong> {activeExp.awards}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
