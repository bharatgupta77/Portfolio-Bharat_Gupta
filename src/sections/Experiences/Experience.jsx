import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Experience.module.css";
import hsbc from "../../assets/hsbc_logo.png";
import atechnos from "../../assets/atechnos_logo.jpeg";
import persistent_systems from "../../assets/persistent.png";
import copart from "../../assets/copart.svg";

const experienceData = [
  {
    id: 1,
    logo: copart,
    company: "Copart",
    role: "Software Engineer Intern",
    duration: "May 2025 – Present",
    durationYears: "Current",
    description: [
      "Designed and built key features for Copart.com using Angular, TypeScript, HTML, CSS, and JavaScript, delivering responsive and accessible UI components for members across multiple platform modules.",
      "Converted Figma designs into scalable, reusable Angular components with pixel-perfect precision."
    ],
    techStack: [
      "Angular", "TypeScript", "HTML", "CSS", "JavaScript", "Figma", "UI/UX", "SQL", "SOLR", "ALGOLIA"
    ],
    keySkills: ["Angular", "TypeScript", "UI/UX Design", "Component Architecture"],
    brandColors: ["#1E40AF", "#3B82F6"], // Blue theme for Copart
  },
  {
    id: 2,
    logo: hsbc,
    company: "HSBC Software Development",
    role: "Senior Software Engineer",
    roleProgression: [
      { title: "Senior Software Engineer", period: "Mar 2024 - Jul 2024" },
      { title: "Software Engineer", period: "Mar 2022 - Mar 2024" },
      { title: "Trainee Software Engineer", period: "Sep 2020 - Mar 2022" }
    ],
    duration: "Sept 2020 - July 2024",
    durationYears: "3+ years",
    description: [
      "Developed innovative solutions and optimized performance for the platform across multiple roles, demonstrating consistent growth and technical excellence.",
      "Progressed through three distinct positions, showcasing adaptability and increasing responsibilities in software development and system optimization.",
      "Optimized app performance by fixing memory leaks and adding test automation suite, cutting crashes by 90%.",
      "Collaborated cross-functionally with design, copywriting and agile teams, leveraging organizational skills and project plans to streamline UI/UX enhancements and ensure timely feature delivery.",
    ],
    techStack: [
      "Android", "Kotlin", "Python", "Java", "HTML", "CSS",
      "APIs", "Postman", "Splunk", "Figma", "UI/UX", "Mobile Development", "Firebase"
    ],
    keySkills: ["Android Development", "Kotlin", "Python", "API Integration", "UI/UX Design"],
    awards: "Star Performer X 1, Pat on the Back X 3",
    brandColors: ["#DB0011", "#FFFFFF"], // HSBC Red and White
  },
  {
    id: 3,
    logo: atechnos,
    company: "ATechnos",
    role: "Web Development Intern",
    duration: "June 2020 - Aug 2020",
    durationYears: "3 months",
    description: [
      "Engineered a comprehensive real-time dashboard featuring API-driven data visualization charts using HTML, CSS, and JavaScript, resulting in a remarkable 50% enhancement in company data insights and operational decision-making capabilities.",
      "Architected and developed robust REST APIs using Express.js framework integrated with Oracle SQL database, delivering a significant 15% improvement in dashboard functionality and data processing efficiency."
    ],
    techStack: [
      "HTML", "CSS", "JavaScript", "Express.js", "Oracle SQL", "REST APIs", "Bootstrap", "jQuery", "AJAX", "Python", "Real-time Data", "Chart Visualization"
    ],
    keySkills: ["Web Development", "JavaScript", "REST API Development", "Express.js", "Oracle SQL", "Real-time Dashboard", "Data Visualization"],
    awards: "Best UI/UX Design Award",
    brandColors: ["#FFC107", "#2196F3"], // Blue and Amber
  },
  {
    id: 4,
    logo: persistent_systems,
    company: "Persistent Systems",
    role: "BE Project Intern",
    duration: "August 2019 - May 2020",
    durationYears: "10 months",
    description: [
      "Worked on both backend and frontend development ensuring robust applications."
    ],
    techStack: [
      "Python", "Machine Learning", "Deep Learning", "PyQt", "PyTorch", 
      "CNN", "Data Analytics", "Data Visualization"
    ],
    keySkills: ["Machine Learning", "Python", "Deep Learning", "PyTorch", "Data Analytics"],
    awards: "Team Excellence Award",
    brandColors: ["#FFFFFF", "#FF6600"], // Persistent Blue and Orange
  },
];

const segmentColors = ["#3b82f6", "#FFFFFF", "#DB0011", "#FF6600", "#8b5cf6"];

const ExperienceTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            viewport={{ once: false, amount: 0.3 }}
            className={styles.entry}
          >
            {/* Duration Display Above Card */}
            <motion.div
              className={styles.durationDisplay}
              initial={{ 
                opacity: 0, 
                y: -40, 
                rotateX: -90,
                scale: 0.6,
                rotateY: 15
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1,
                rotateY: 0
              }}
              transition={{ 
                duration: 1, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className={styles.durationCard}>
                <div className={styles.durationValue}>
                  {(exp.duration?.includes('Present') || exp.durationYears?.includes('Current')) && isMobile ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={`${styles.durationIcon} ${styles.loadingIcon}`}>
                      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={styles.durationIcon}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                  <span className={styles.durationText}>{exp.duration}</span>
                </div>
              </div>
            </motion.div>

            <div
              className={styles.segment}
              style={{
                backgroundColor: segmentColors[index % segmentColors.length],
              }}
            ></div>
            <div 
              className={styles.details}
              style={{
                '--brand-color-1': exp.brandColors[0],
                '--brand-color-2': exp.brandColors[1]
              }}
            >
              <div className={styles.logoContainer}>
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className={styles.companyLogo}
                  />
                ) : (
                  <div className={styles.logoPlaceholder}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                )}
              </div>
              <p className={styles.companyName}>{exp.company}</p>
              
              {/* Job Title with Icon */}
              {exp.role && (
                <div className={styles.jobTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z"/>
                  </svg>
                  <span>{exp.role}</span>
                </div>
              )}

              {/* Role Progression */}
              {exp.roleProgression && (
                <div className={styles.roleProgression}>
                  <div className={styles.progressionHeader}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '6px'}}>
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                    <strong>Career Progression:</strong>
                  </div>
                  <div className={styles.progressionList}>
                    {exp.roleProgression.map((progression, idx) => (
                      <motion.div
                        key={idx}
                        className={styles.progressionItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: (exp.roleProgression.length - 1 - idx) * 0.2 // Reverse order: trainee first
                        }}
                        viewport={{ once: false, amount: 0.1 }}
                      >
                        <div className={styles.progressionContent}>
                          <div className={styles.progressionRole}>{progression.title}</div>
                          <div className={styles.progressionPeriod}>{progression.period}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Duration with Icon and Badge */}
              {(exp.duration || exp.durationYears) && (
                <div className={styles.durationContainer}>
                  {exp.duration && (
                    <span className={styles.duration}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      {exp.duration}
                    </span>
                  )}
                  {exp.durationYears && (
                    <span className={styles.durationBadge}>{exp.durationYears}</span>
                  )}
                </div>
              )}

              {/* Responsibilities/Highlights with Icon */}
              {exp.description && exp.description.length > 0 && (
                <div className={styles.description}>
                  <div className={styles.descriptionHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V4l-6-2zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    <strong>Key Highlights:</strong>
                  </div>
                  <ul className={styles.descriptionList}>
                    {exp.description.map((point, index) => (
                      <li key={index} className={styles.descriptionItem}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Skills Section */}
              {exp.keySkills && exp.keySkills.length > 0 && (
                <div className={styles.skillsContainer}>
                  <div className={styles.skillsHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                    <strong>Key Skills:</strong>
                  </div>
                  <div className={styles.skillsTags}>
                    {exp.keySkills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={styles.skillTag}
                        style={{
                          borderColor: `${exp.brandColors[0]}33`,
                          background: `linear-gradient(135deg, ${exp.brandColors[0]}15, ${exp.brandColors[1] || exp.brandColors[0]}15)`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              {exp.techStack && exp.techStack.length > 0 && (
                <div className={styles.techContainer}>
                  <div className={styles.techHeader}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                    </svg>
                    <strong>Technologies:</strong>
                  </div>
                  <div className={styles.techStack}>
                    {exp.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards with Icon */}
              {exp.awards && (
                <div className={styles.awards}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                    <path d="M12 2l1.88 3.82 4.2.61-3.04 2.96.72 4.18L12 11.72l-3.76 1.98.72-4.18L6.01 6.44l4.2-.61L12 2zm0 15.5c-1.25 0-2.27.92-2.46 2.1h4.92c-.19-1.18-1.21-2.1-2.46-2.1z"/>
                    <rect x="8" y="19" width="8" height="3" rx="1"/>
                  </svg>
                  <span><strong>Recognition:</strong> {exp.awards}</span>
                </div>
              )}
            </div>
            <div className={styles.point}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;