import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import styles from "./educationtimeline.module.css";

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
  },
];

const EducationTimeline = () => {
  return (
    <div id="education" className={styles.container}>
      <h1 className={styles.heading}>Education</h1>
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.entry}
          >
            <div className={styles.details}>
              <div className={styles.yearContainer}>
                <FaGraduationCap className={styles.icon} />
                <span className={styles.year}>{edu.year}</span>
              </div>
              <p className={styles.institution}>
                <FaUniversity className={styles.collegeIcon} />
                {edu.institution}
              </p>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.coursework}>
                <strong>Coursework:</strong> {edu.coursework.join(", ")}
              </p>
              <p className={styles.awards}>
                <strong>Awards & Recognition:</strong> {edu.awards}
              </p>
            </div>
            <div className={styles.point}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
