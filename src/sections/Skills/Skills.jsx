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
    },
    {
      name: "React.js",
      imageLight: "/icons/skills/react.svg",
      imageDark: "/icons/skills/react.svg",
      brandColor: "#61DAFB",
      rating: 4,
    },
    {
      name: "HTML5",
      imageLight: "/icons/skills/html5.svg",
      imageDark: "/icons/skills/html5.svg",
      brandColor: "#E34F26",
      rating: 4,
    },
    {
      name: "CSS3",
      imageLight: "/icons/skills/css3.svg",
      imageDark: "/icons/skills/css3.svg",
      brandColor: "#1572B6",
      rating: 4,
    },
    {
      name: "Bootstrap",
      imageLight: "/icons/skills/bootstrap.svg",
      imageDark: "/icons/skills/bootstrap.svg",
      brandColor: "#7952B3",
      rating: 4,
    },
    {
      name: "Angular",
      imageLight: "/icons/skills/angular.svg",
      imageDark: "/icons/skills/angular.svg",
      brandColor: "#DD0031",
      rating: 4,
    },
    {
      name: "Android",
      imageLight: "/icons/skills/android.svg",
      imageDark: "/icons/skills/android.svg",
      brandColor: "#3DDC84",
      rating: 4,
    },
  ],
  Backend: [
    {
      name: "Python",
      imageLight: "/icons/skills/python.svg",
      imageDark: "/icons/skills/python.svg",
      brandColor: "#3776AB",
      rating: 4,
    },
    {
      name: "Java",
      imageLight: "/icons/skills/java.svg",
      imageDark: "/icons/skills/java.svg",
      brandColor: "#ED8B00",
      rating: 3,
    },
    {
      name: "Kotlin",
      imageLight: "/icons/skills/kotlin.svg",
      imageDark: "/icons/skills/kotlin.svg",
      brandColor: "#7F52FF",
      rating: 4,
    },
  ],
  Database: [
    {
      name: "MongoDB",
      imageLight: "/icons/skills/mongodb.svg",
      imageDark: "/icons/skills/mongodb.svg",
      brandColor: "#47A248",
      rating: 4,
    },
    {
      name: "MySQL",
      imageLight: "/icons/skills/mysql.svg",
      imageDark: "/icons/skills/mysql.svg",
      brandColor: "#4479A1",
      rating: 5,
    },
    {
      name: "PostgreSQL",
      imageLight: "/icons/skills/postgresql.svg",
      imageDark: "/icons/skills/postgresql.svg",
      brandColor: "#336791",
      rating: 3,
    },
  ],
  Tools: [
    {
      name: "Android Studio",
      imageLight: "/icons/skills/androidstudio.svg",
      imageDark: "/icons/skills/androidstudio.svg",
      brandColor: "#3DDC84",
      rating: 4,
    },
    {
      name: "VS Code",
      imageLight: "/icons/skills/vscode.svg",
      imageDark: "/icons/skills/vscode.svg",
      brandColor: "#007ACC",
      rating: 5,
    },
    {
      name: "Postman",
      imageLight: "/icons/skills/postman.svg",
      imageDark: "/icons/skills/postman.svg",
      brandColor: "#FF6C37",
      rating: 4,
    },
    {
      name: "IntelliJ IDEA",
      imageLight: "/icons/skills/intellij.svg",
      imageDark: "/icons/skills/intellij.svg",
      brandColor: "#000000",
      rating: 5,
    },
    {
      name: "Figma",
      imageLight: "/icons/skills/figma.svg",
      imageDark: "/icons/skills/figma.svg",
      brandColor: "#F24E1E",
      rating: 3,
    },
    {
      name: "DataGrip",
      imageLight: "/icons/skills/datagrip.svg",
      imageDark: "/icons/skills/datagrip.svg",
      brandColor: "#22D88F",
      rating: 3,
    },
    {
      name: "Jupyter Notebook",
      imageLight: "/icons/skills/jupyter.svg",
      imageDark: "/icons/skills/jupyter.svg",
      brandColor: "#F37626",
      rating: 4,
    },
  ],
};

const Skills = () => {
  const { theme } = useTheme();

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
                  className={styles.skillWrapper}
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
                >
                  <div className={styles.skillItem}>
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
