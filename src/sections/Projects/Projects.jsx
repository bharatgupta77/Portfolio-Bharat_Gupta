import React from "react";
import news from "../../assets/news.png";
import python_proj from "../../assets/python_proj.png";
import styles from "./ProjectsStyles.module.css";
import budgetify from "../../assets/budgetify.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={news}
          link="https://github.com/bharatgupta77/XBoard"
          h3="XBoard"
          p="A Dynamic News Feed Experience"
          tags={["JavaScript", "HTML", "CSS", "APIs"]}
        />

        <ProjectCard
          src={python_proj}
          link="https://github.com/bharatgupta77/Python-Mini-Projects"
          h3="Python Mini Utility Projects"
          p="Collection of everyday code snippets—"
          p2="barcodes, OTPs, email-slicer, and more."
          needsBreak={true}
          tags={["Python", "Utilities", "Automation"]}
        />
        <ProjectCard
          src={budgetify}
          link="https://github.com/bharatgupta77/Budgetify"
          h3="Budgetify"
          p="A personal finance management website"
          p2="Helps users track incomes, expenses and financial habits"
          needsBreak={true}
          tags={["React", "Node.js", "MongoDB", "Finance"]}
        />
      </div>
    </section>
  );
}

export default Projects;
