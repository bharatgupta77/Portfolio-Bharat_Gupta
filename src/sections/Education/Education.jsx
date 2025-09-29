import React from "react";
import styles from "./Education.module.css";
import utdLogo from "../../assets/utd_logo.png";
import pictLogo from "../../assets/pict_logo.jpg";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2024 - 2026",
    duration: "In Progress",
    progress: 60, // 60% complete
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
    techSkills: ["Python", "AWS", "Data Analysis", "Cloud Computing", "Big Data"],
    awards: "JSOM Program Excellence Scholarship, Menka Hemrajani Fellowship",
    logo: utdLogo,
    brandColors: ["#C75B12", "#005596"], // UTD Orange and Blue
  },
  {
    year: "2016 - 2020", 
    duration: "4 Years",
    progress: 100, // Completed
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
    techSkills: ["Java", "Python", "C++", "Machine Learning", "Database Design", "Web Development"],
    awards: "Best Final Year Project, Smart India Hackathon(National Level) - Finalists",
    logo: pictLogo,
    brandColors: ["#FFFFFF", "#003366"], // PICT White and Navy Blue
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
      <h1 className="sectionTitle">Education</h1>
      <div className={styles.cardWrapper}>
        {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.card}
              style={{
                backgroundColor: bgColors[index % bgColors.length],
                '--brand-color-1': edu.brandColors[0],
                '--brand-color-2': edu.brandColors[1]
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.1 }}
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
                  viewport={{ once: false, amount: 0.1 }}
                  custom={0}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                  {edu.degree}
                </motion.p>

                <motion.div
                  className={styles.yearHighlighted}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  custom={1}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                  {edu.year}
                  <span className={styles.durationBadge}>
                    {edu.duration}
                  </span>
                </motion.div>

                {/* Progress Indicator */}
                <motion.div
                  className={styles.progressContainer}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  custom={2}
                >
                  <div className={styles.progressBar}>
                    <motion.div 
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${edu.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className={styles.progressText}>{edu.progress}%</span>
                </motion.div>

                {/* Technical Skills */}
                <motion.div
                  className={styles.courseworkContainer}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  custom={3}
                >
                  <div className={styles.courseworkHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                    <strong>Key Skills:</strong>
                  </div>
                  <div className={styles.courseworkTags}>
                    {edu.techSkills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className={styles.tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.3 }}
                        style={{
                          borderColor: `${edu.brandColors[0]}33`,
                          background: `linear-gradient(135deg, ${edu.brandColors[0]}15, ${edu.brandColors[1]}15)`
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Coursework Tags */}
                <motion.div
                  className={styles.courseworkContainer}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  custom={4}
                >
                  <div className={styles.courseworkHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                    </svg>
                    <strong>Coursework:</strong>
                  </div>
                  <div className={styles.courseworkTags}>
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.span 
                        key={courseIndex}
                        className={styles.tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: courseIndex * 0.05, duration: 0.3 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className={styles.awards}
                  variants={textVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  custom={5}
                >
                  <div className={styles.awardsHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M12 2l1.88 3.82 4.2.61-3.04 2.96.72 4.18L12 11.72l-3.76 1.98.72-4.18L6.01 6.44l4.2-.61L12 2zm0 15.5c-1.25 0-2.27.92-2.46 2.1h4.92c-.19-1.18-1.21-2.1-2.46-2.1z"/>
                      <rect x="8" y="19" width="8" height="3" rx="1"/>
                    </svg>
                    <strong>Awards and Recognition:</strong>
                  </div>
                  <div className={styles.awardsList}>
                    {edu.awards.split(',').map((award, awardIndex) => (
                      <div key={awardIndex} className={styles.awardItem}>
                        {award.trim()}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
