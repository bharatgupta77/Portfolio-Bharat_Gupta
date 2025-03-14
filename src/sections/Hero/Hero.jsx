import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/bharat_gupta.jpeg";
import heroImgDark from "../../assets/Bharat_Gupta_Dark.png";
import themeIcon from "../../assets/sun.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";

import leetcodeIconDark from "../../assets/leetcode_dark.svg";
import leetcodeIconLight from "../../assets/leetcode_light.svg";

import hackerrankIconLight from "../../assets/hackerrank_dark.svg";
import hackerrankIconDark from "../../assets/hackerrank_light.svg";

import CV from "../../assets/Bharat_Gupta_Resume_updated.pdf";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const leetcodeIcon = theme === "light" ? leetcodeIconLight : leetcodeIconDark;
  const hackerrankIcon =
    theme === "light" ? hackerrankIconLight : hackerrankIconDark;

  const profilePicIcon = theme === "light" ? heroImgDark : heroImg;

  const leetcode_img_style =
    theme === "light" ? styles.img_dark : styles.img_light;

  return (
    <section
      id="hero"
      className={`${styles.container} ${styles.heroFullWidth} ${
        theme === "light" ? styles.lightBackground : styles.darkBackground
      }`}
    >
      <div className={styles.colorModeContainer}>
        <img
          src={profilePicIcon}
          className={styles.hero}
          alt="Profile Picture of Bharat Gupta"
        />

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Bharat
          <br />
          Gupta
        </h1>
        <h2>Software Developer</h2>

        <span>
          <a href="" target="_blank">
            <img src={githubIcon} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/bharatgupta77/" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>

          <a href="https://leetcode.com/u/guptabharat297/" target="_blank">
            <img className={leetcode_img_style} src={leetcodeIcon} alt="" />
          </a>

          <a
            href="https://www.hackerrank.com/profile/bharatgupta777"
            target="_blank"
          >
            <img className={leetcode_img_style} src={hackerrankIcon} alt="" />
          </a>
        </span>

        <p className={styles.description}>
          Driven by a passion for crafting high-impact projects and committed to
          making meaningful, lasting contributions.
        </p>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
