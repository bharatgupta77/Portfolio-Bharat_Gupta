import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { useTheme } from "../../common/ThemeContext";

const skillsData = {
  Frontend: [
    {
      name: "JavaScript",
      imageLight: "/icons/skills/javascript.svg",
      imageDark: "/icons/skills/javascript.svg",
      brandColor: "#B8860B",
      rating: 4,
      experience: "1+ years",
      linesOfCode: "15,000+",
      projects: "5+ projects"
    },
    {
      name: "React.js",
      imageLight: "/icons/skills/react.svg",
      imageDark: "/icons/skills/react.svg",
      brandColor: "#61DAFB",
      rating: 4,
      experience: "1+ years",
      linesOfCode: "10,000+",
      projects: "2 projects"
    },
    {
      name: "HTML5",
      imageLight: "/icons/skills/html5.svg",
      imageDark: "/icons/skills/html5.svg",
      brandColor: "#E34F26",
      rating: 4,
      experience: "1+ years",
      linesOfCode: "30,000+",
      projects: "7+ projects"
    },
    {
      name: "CSS3",
      imageLight: "/icons/skills/css3.svg",
      imageDark: "/icons/skills/css3.svg",
      brandColor: "#1572B6",
      rating: 4,
      experience: "1+ years",
      linesOfCode: "30,000+",
      projects: "7+ projects"
    },
    {
      name: "Bootstrap",
      imageLight: "/icons/skills/bootstrap.svg",
      imageDark: "/icons/skills/bootstrap.svg",
      brandColor: "#7952B3",
      rating: 4,
      experience: "1+ years",
      linesOfCode: "5,000+",
      projects: "6 projects"
    },
    {
      name: "Angular",
      imageLight: "/icons/skills/angular.svg",
      imageDark: "/icons/skills/angular.svg",
      brandColor: "#DD0031",
      rating: 4,
      experience: "1+ year",
      linesOfCode: "10,000+",
      projects: "2 projects"
    },
    {
      name: "Android",
      imageLight: "/icons/skills/android.svg",
      imageDark: "/icons/skills/android.svg",
      brandColor: "#3DDC84",
      rating: 4,
      experience: "3+ years",
      linesOfCode: "35,000+",
      projects: "4 apps"
    },
  ],
  Backend: [
    {
      name: "Python",
      imageLight: "/icons/skills/python.svg",
      imageDark: "/icons/skills/python.svg",
      brandColor: "#3776AB",
      rating: 4,
      experience: "3+ years",
      linesOfCode: "25,000+",
      projects: "4 projects"
    },
    {
      name: "Java",
      imageLight: "/icons/skills/java.svg",
      imageDark: "/icons/skills/java.svg",
      brandColor: "#ED8B00",
      rating: 3,
      experience: "1+ years",
      linesOfCode: "10,000+",
      projects: "3 projects"
    },
    {
      name: "Kotlin",
      imageLight: "/icons/skills/kotlin.svg",
      imageDark: "/icons/skills/kotlin.svg",
      brandColor: "#7F52FF",
      rating: 4,
      experience: "3+ year",
      linesOfCode: "35,000+",
      projects: "4 apps"
    },
  ],
  Database: [
    {
      name: "MongoDB",
      imageLight: "/icons/skills/mongodb.svg",
      imageDark: "/icons/skills/mongodb.svg",
      brandColor: "#47A248",
      rating: 4,
      experience: "1+ years",
      linesOfCode: "N/A",
      projects: "2 databases"
    },
    {
      name: "MySQL",
      imageLight: "/icons/skills/mysql.svg",
      imageDark: "/icons/skills/mysql.svg",
      brandColor: "#4479A1",
      rating: 5,
      experience: "3+ years",
      linesOfCode: "N/A",
      projects: "12 databases"
    },
    {
      name: "PostgreSQL",
      imageLight: "/icons/skills/postgresql.svg",
      imageDark: "/icons/skills/postgresql.svg",
      brandColor: "#336791",
      rating: 3,
      experience: "1+ year",
      linesOfCode: "N/A",
      projects: "4 databases"
    },
  ],
  Tools: [
    {
      name: "Android Studio",
      imageLight: "/icons/skills/androidstudio.svg",
      imageDark: "/icons/skills/androidstudio.svg",
      brandColor: "#3DDC84",
      rating: 4,
      experience: "2+ years",
      linesOfCode: "N/A",
      projects: "5 apps"
    },
    {
      name: "VS Code",
      imageLight: "/icons/skills/vscode.svg",
      imageDark: "/icons/skills/vscode.svg",
      brandColor: "#007ACC",
      rating: 5,
      experience: "4+ years",
      linesOfCode: "N/A",
      projects: "Daily use"
    },
    {
      name: "Postman",
      imageLight: "/icons/skills/postman.svg",
      imageDark: "/icons/skills/postman.svg",
      brandColor: "#FF6C37",
      rating: 4,
      experience: "1+ years",
      linesOfCode: "N/A",
      projects: "15+ APIs"
    },
    {
      name: "IntelliJ IDEA",
      imageLight: "/icons/skills/intellij.svg",
      imageDark: "/icons/skills/intellij.svg",
      brandColor: "#000000",
      rating: 5,
      experience: "3+ years",
      linesOfCode: "N/A",
      projects: "Daily use"
    },
    {
      name: "Figma",
      imageLight: "/icons/skills/figma.svg",
      imageDark: "/icons/skills/figma.svg",
      brandColor: "#F24E1E",
      rating: 3,
      experience: "0.5+ year",
      linesOfCode: "N/A",
      projects: "8 designs"
    },
    {
      name: "DataGrip",
      imageLight: "/icons/skills/datagrip.svg",
      imageDark: "/icons/skills/datagrip.svg",
      brandColor: "#22D88F",
      rating: 3,
      experience: "0.5+ year",
      linesOfCode: "N/A",
      projects: "2 databases"
    },
    {
      name: "Jupyter Notebook",
      imageLight: "/icons/skills/jupyter.svg",
      imageDark: "/icons/skills/jupyter.svg",
      brandColor: "#F37626",
      rating: 4,
      experience: "2+ years",
      linesOfCode: "N/A",
      projects: "50+ notebooks"
    },
  ],
};

const Skills = () => {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [hasShown, setHasShown] = React.useState(false);
  const [flippedCards, setFlippedCards] = React.useState(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShown) {
            // Show tooltip only once when entering Skills section for the first time
            setShowTooltip(true);
            setHasShown(true);
            // Auto hide after 2 seconds
            setTimeout(() => {
              setShowTooltip(false);
            }, 5000);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Click event listener for navigation skills link
    const handleSkillsNavClick = (event) => {
      // Check if the clicked element is the skills navigation link
      const target = event.target;
      if (target.tagName === 'A' && (
          target.getAttribute('href') === '#skills' ||
          target.textContent.toLowerCase().includes('skill')
        ) && !hasShown) {
        setShowTooltip(true);
        setHasShown(true);
        // Auto hide after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }
    };

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    // Add click listener to document to catch navigation clicks
    document.addEventListener('click', handleSkillsNavClick);

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
      document.removeEventListener('click', handleSkillsNavClick);
    };
  }, [hasShown]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`}
      >
        ★
      </span>
    ));
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  const handleTouchStart = (skillName) => {
    setFlippedCards(prev => new Set(prev).add(skillName));
  };

  const handleTouchEnd = (skillName) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      newSet.delete(skillName);
      return newSet;
    });
  };

  return (
    <section id="skills" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills
      </motion.h1>

      {/* Interactive Tooltip */}
      {showTooltip && (
        <motion.div
          className={styles.interactiveTooltip}
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.tooltipContent}>
            <span className={styles.tooltipIcon}>💡</span>
            <div className={styles.tooltipTextContainer}>
              <span className={styles.tooltipText}>Touch & hold skill cards</span>
              <span className={styles.tooltipText}>for detailed info!</span>
            </div>
            <button
              className={styles.tooltipClose}
              onClick={hideTooltip}
              aria-label="Close tooltip"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}

      <div className={styles.skillsContainer}>
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div
            key={category}
            className={styles.categorySection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: categoryIndex * 0.2 
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              className={styles.categoryTitle}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: categoryIndex * 0.2 + 0.3 
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {category}
            </motion.h2>
            
            <div className={styles.skillsGrid}>
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className={`${styles.skillWrapper} ${flippedCards.has(skill.name) ? styles.flipped : ''}`}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 50
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    '--brand-color': skill.brandColor
                  }}
                  onTouchStart={() => handleTouchStart(skill.name)}
                  onTouchEnd={() => handleTouchEnd(skill.name)}
                  onTouchCancel={() => handleTouchEnd(skill.name)}
                >
                  <div className={styles.skillItem}>
                    {/* Front of card */}
                    <div className={styles.skillFront}>
                      <div className={styles.skillIcon}>
                        <img
                          src={theme === "light" ? skill.imageDark : skill.imageLight}
                          alt={skill.name}
                          className={styles.skillImage}
                        />
                      </div>
                      <div className={styles.categoryBadge}>
                        <div className={styles.starRating}>
                          {renderStars(skill.rating)}
                        </div>
                      </div>
                    </div>

                    {/* Back of card with info */}
                    <div className={styles.skillBack}>
                      <div className={styles.skillInfo}>
                        <div className={styles.infoDetails}>
                          <span>📅 {skill.experience}</span>
                          {skill.linesOfCode !== "N/A" && (
                            <span>💻 {skill.linesOfCode}</span>
                          )}
                          <span>🚀 {skill.projects}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className={styles.skillLabel}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
