import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { useTheme } from "../../common/ThemeContext";

const skillsData = {
  Frontend: [
    {
      name: "JavaScript",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      brandColor: "#B8860B",
      rating: 4,
    },
    {
      name: "React.js",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      brandColor: "#61DAFB",
      rating: 4,
    },
    {
      name: "HTML5",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      brandColor: "#E34F26",
      rating: 4,
    },
    {
      name: "CSS3",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      brandColor: "#1572B6",
      rating: 4,
    },
    {
      name: "Bootstrap",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      brandColor: "#7952B3",
      rating: 4,
    },
    {
      name: "Angular",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
      brandColor: "#DD0031",
      rating: 4,
    },
    {
      name: "Android",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
      brandColor: "#3DDC84",
      rating: 4,
    },
  ],
  Backend: [
    {
      name: "Python",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      brandColor: "#3776AB",
      rating: 4,
    },
    {
      name: "Java",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      brandColor: "#ED8B00",
      rating: 3,
    },
    {
      name: "Kotlin",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
      brandColor: "#7F52FF",
      rating: 4,
    },
  ],
  Database: [
    {
      name: "MongoDB",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      brandColor: "#47A248",
      rating: 4,
    },
    {
      name: "MySQL",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      brandColor: "#4479A1",
      rating: 5,
    },
    {
      name: "PostgreSQL",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      brandColor: "#336791",
      rating: 3,
    },
  ],
  Tools: [
    {
      name: "Android Studio",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg",
      brandColor: "#3DDC84",
      rating: 4,
    },
    {
      name: "VS Code",
      imageLight: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      imageDark: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      brandColor: "#007ACC",
      rating: 5,
    },
    {
      name: "Postman",
      imageLight: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      imageDark: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      brandColor: "#FF6C37",
      rating: 4,
    },
    {
      name: "IntelliJ IDEA",
      imageLight: "https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg",
      imageDark: "https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg",
      brandColor: "#000000",
      rating: 5,
    },
    {
      name: "Figma",
      imageLight: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      imageDark: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      brandColor: "#F24E1E",
      rating: 3,
    },
    {
      name: "DataGrip",
      imageLight: "https://resources.jetbrains.com/storage/products/company/brand/logos/DataGrip_icon.svg",
      imageDark: "https://resources.jetbrains.com/storage/products/company/brand/logos/DataGrip_icon.svg",
      brandColor: "#22D88F",
      rating: 3,
    },
    {
      name: "Jupyter Notebook",
      imageLight: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
      imageDark: "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
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
        className={styles.title}
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
