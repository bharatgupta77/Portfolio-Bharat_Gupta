import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ src, link, h3, p, p2 = "", needsBreak = false }) {
  return (
    <a href={link} className={styles.card} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>
        {p}
        {needsBreak && (
          <>
            <br />
            {p2}
          </>
        )}
      </p>
    </a>
  );
}

export default ProjectCard;
