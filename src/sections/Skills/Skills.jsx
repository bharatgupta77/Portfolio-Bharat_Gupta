import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { useTheme } from "../../common/ThemeContext";
import jsLight from "../../assets/js_light.png";
import reactLight from "../../assets/react_light.png";
import htmlLight from "../../assets/html_light.png";
import cssLight from "../../assets/css_light.png";
import bootstrapLight from "../../assets/Bootstrap_light.jpeg";
import mongodbLight from "../../assets/mongodb_light.png";
import mySQLLight from "../../assets/mysql_light.png";
import postgresqlLight from "../../assets/postgreSQL.png";
import pythonLight from "../../assets/python_light.png";
import javaLight from "../../assets/java_light.png";
import vsCodeLight from "../../assets/vs_code_light.png";
import androidStudioLight from "../../assets/android_studio_light.png";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        imageLight: jsLight,
        imageDark: jsLight,
        desc: "",
      },
      {
        name: "React.js",
        imageLight: reactLight,
        imageDark: reactLight,
        desc: "",
      },
      {
        name: "HTML5",
        imageLight: htmlLight,
        imageDark: htmlLight,
        desc: "",
      },
      {
        name: "CSS3",
        imageLight: cssLight,
        imageDark: cssLight,
        desc: "",
      },
      {
        name: "Bootstrap",
        imageLight: bootstrapLight,
        imageDark: bootstrapLight,
        desc: "",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Python",
        imageLight: pythonLight,
        imageDark: pythonLight,
        desc: "",
      },
      {
        name: "Java",
        imageLight: javaLight,
        imageDark: javaLight,
        desc: "",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "MongoDB",
        imageLight: mongodbLight,
        imageDark: mongodbLight,
        desc: "",
      },
      {
        name: "MySQL",
        imageLight: mySQLLight,
        imageDark: mySQLLight,
        desc: "",
      },
      {
        name: "PostgreSQL",
        imageLight: postgresqlLight,
        imageDark: postgresqlLight,
        desc: "",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Android Studio",
        imageLight: androidStudioLight,
        imageDark: androidStudioLight,
        desc: "",
      },
      {
        name: "VS Code",
        imageLight: vsCodeLight,
        imageDark: vsCodeLight,
        desc: "",
      },
    ],
  },
];

const Skills = () => {
  const { theme, toggleIcon } = useTheme(); // ✅ Correctly invoking useTheme

  return (
    <>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillsContainer}>
        {skillsData.map((section, index) => (
          <motion.div
            key={section.category}
            className={styles.category}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className={styles.categoryTitle}>{section.category}</h3>
            <div className={styles.skillGrid}>
              {section.skills.map((skill) => (
                <div key={skill.name} className={styles.card}>
                  <img
                    src={theme === "light" ? skill.imageDark : skill.imageLight}
                    alt={skill.name}
                    className={styles.skillImage}
                  />
                  <h4 className={styles.skillTitle}>{skill.name}</h4>
                  <p className={styles.skillDesc}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
