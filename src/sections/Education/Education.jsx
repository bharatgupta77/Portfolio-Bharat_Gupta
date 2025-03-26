import React from "react";
import styles from "./Education.module.css";
import utdLogo from "../../assets/utd_logo.png";
import pictLogo from "../../assets/pict_logo.jpg";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const educationData = [
  {
    year: "2024 - 2026",
    institution: "The University of Texas at Dallas",
    degree: "Master of Science in Information Technology and Management",
    coursework: [
      "OOPS in Python",
      "Data Visualization",
      "Big Data",
      "Database Management",
      "AWS - Solution Architect",
      "Cloud Computing Fundamentals",
      "Technology and New Product Development",
      "American Healthcare",
      "Spreadsheet Modeling",
    ],
    awards: "JSOM Program Excellence Scholarship",
    logo: utdLogo,
  },
  {
    year: "2016 - 2020",
    institution: "SCTR Pune Institute of Computer Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Management",
      "OOPS in Java",
      "Python Programming",
      "Web Programming",
      "Operating Systems",
      "Data Analytics",
      "Machine Learning",
      "Human Computer Interaction",
      "Computer Networks",
      "Programming in C/C++",
    ],
    awards:
      "Best Final Year Project, Smart India Hackathon(National Level) - Finalists",
    logo: pictLogo,
  },
];

const bgColors = ["", ""];

const textVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <div id="education" className={styles.container}>
      <h1 className={styles.sectionHeading}>Education</h1>
      <div className={styles.cardWrapper}>
        {educationData.map((edu, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.01}
            transitionSpeed={1000}
            glareEnable={false}
            gyroscope={true}
          >
            <motion.div
              className={styles.card}
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className={styles.logoContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className={styles.logo}
                />
              </motion.div>

              <h2 className={styles.institution}>{edu.institution}</h2>

              <div className={styles.cardContent}>
                <motion.p
                  className={styles.degree}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={0}
                >
                  <span role="img" aria-label="Degree">
                    🎓
                  </span>{" "}
                  {edu.degree}
                </motion.p>

                <motion.p
                  className={styles.year}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={1}
                >
                  <span role="img" aria-label="Calendar">
                    🗓️
                  </span>{" "}
                  {edu.year}
                </motion.p>

                <motion.p
                  className={styles.coursework}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={2}
                >
                  <span role="img" aria-label="Books">
                    📘
                  </span>{" "}
                  <strong>Coursework:</strong> {edu.coursework.join(", ")}
                </motion.p>

                <motion.p
                  className={styles.awards}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  custom={3}
                >
                  <span role="img" aria-label="Award">
                    🏆
                  </span>{" "}
                  <strong>Awards and Recognition:</strong> {edu.awards}
                </motion.p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Education;
