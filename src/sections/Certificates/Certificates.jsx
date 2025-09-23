import React from "react";
import styles from "./CertificatesStyles.module.css";

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "May 2025",
      credentialId: "9bc7e1c1bdd84aaeb909f75e2f038c84",
      credentialUrl: "https://aws.amazon.com/verification",
      validUntil: "May 8, 2028",
      image: "/src/assets/aws_badge.png",
      skills: ["AWS", "Cloud Architecture", "EC2", "S3", "VPC", "IAM"]
    }
  ];

  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.certificatesContainer}>
        {certificates.map((cert) => (
          <div key={cert.id} className={styles.certificateCard}>
            <div className={styles.imageContainer}>
              <img 
                src={cert.image} 
                alt={`${cert.title} certificate`}
                className={styles.certificateImage}
              />
              <div className={styles.overlay}>
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  View Credential
                </a>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.certificateTitle}>{cert.title}</h3>
              <div className={styles.issuerInfo}>
                <span className={styles.issuer}>{cert.issuer}</span>
                <span className={styles.date}>{cert.date}</span>
              </div>
              
              {cert.credentialId && (
                <div className={styles.credentialInfo}>
                  <span className={styles.credentialLabel}>Credential ID:</span>
                  <span className={styles.credentialId}>{cert.credentialId}</span>
                </div>
              )}
              
              {cert.validUntil && (
                <div className={styles.validityInfo}>
                  <span className={styles.validityLabel}>Valid until:</span>
                  <span className={styles.validityDate}>{cert.validUntil}</span>
                </div>
              )}
              
              <div className={styles.skillsContainer}>
                {cert.skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;