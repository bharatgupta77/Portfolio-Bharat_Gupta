import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import hsbc from "../../assets/hsbc_logo.png";
import atechnos from "../../assets/atechnos_logo.jpeg";
import persistent_systems from "../../assets/persistent.png";

const experienceData = [
  {
    id: 1,
    logo: hsbc,
    company: "HSBC Software Development",
    role: "👨‍💻 Senior Software Engineer | Software Engineer | Trainee Software Engineer",
    duration: "📅 Sept 2020 - July 2024",
    description:
      "💡 Developed innovative solutions and optimized performance for the platform.",
    techStack:
      "Android, Kotlin, Python, Java, HTML, CSS, APIs, Postman, Splunk, Figma, UI/UX, Mobile development, Web development",
    awards: "🏆 Star Performer X 1, Pat on the Back X 3",
  },
  {
    id: 2,
    logo: atechnos,
    company: "ATechnos",
    role: "👨‍💻 Web Development Intern",
    duration: "📅 June 2020 - Aug 2020",
    description:
      "🎯 Built user-friendly interfaces and improved accessibility standards.",
    techStack: "HTML, CSS, JavaScript, Bootstrap, JQuery, AJAX, SQL, Python",
    awards: "🏅 Best UI/UX Design Award",
  },
  {
    id: 3,
    logo: persistent_systems,
    company: "Persistent Systems",
    role: "👨‍💻 BE Project Intern",
    duration: "📅 August 2019 - May 2020",
    description:
      "🧩 Worked on both backend and frontend development ensuring robust applications.",
    techStack:
      "Python, Machine Learning, Deep Learning, PyQT, PyTorch, CNN, Data Analytics, Data Visualization",
    awards: "🏆 Team Excellence Award",
  },
];

const segmentColors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const ExperienceTimeline = () => {
  return (
    <div id="experience" className={styles.container}>
      <h1 className={styles.heading}>Experience</h1>
      <div className={styles.timeline}>
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
            className={styles.entry}
          >
            <div
              className={styles.segment}
              style={{
                backgroundColor: segmentColors[index % segmentColors.length],
              }}
            ></div>
            <div className={styles.details}>
              <div className={styles.logoContainer}>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className={styles.companyLogo}
                />
              </div>
              <p className={styles.companyName}>{exp.company}</p>
              <h3 className={styles.jobTitle}>{exp.role}</h3>
              <p className={styles.duration}>{exp.duration}</p>
              <p className={styles.description}>{exp.description}</p>
              <div className={styles.techStack}>
                <span className={styles.techLabel}>🛠️</span>
                {exp.techStack.split(",").map((tech, i) => (
                  <span key={i} className={styles.techBadge}>
                    {tech.trim()}
                  </span>
                ))}
              </div>
              <p className={styles.awards}>{exp.awards}</p>
            </div>
            <div className={styles.point}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
