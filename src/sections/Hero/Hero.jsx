import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/bharat_gupta.jpeg";
import heroImgDark from "../../assets/Bharat_Gupta_Dark.png";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";

import leetcodeIconDark from "../../assets/leetcode_dark.svg";
import leetcodeIconLight from "../../assets/leetcode_light.svg";

import hackerrankIconLight from "../../assets/hackerrank_dark.svg";
import hackerrankIconDark from "../../assets/hackerrank_light.svg";

import CV from "../../assets/Bharat_Gupta_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

// Hook to detect user motion preferences
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Simple typewriter hook with reduced motion support
const useTypewriter = (text, shouldStart = false, prefersReducedMotion = false) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setDisplayedText("");
      setCurrentIndex(0);
      return;
    }

    // If user prefers reduced motion, show full text immediately
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [shouldStart, currentIndex, text, prefersReducedMotion]);

  return displayedText + (currentIndex < text.length && !prefersReducedMotion ? '|' : '');
};

function Hero() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [imagePhase, setImagePhase] = useState('appearing'); // 'appearing', 'centered', 'positioned'
  const [isMobile, setIsMobile] = useState(false);

  // Simplified animation states
  const [showContent, setShowContent] = useState(false);

  // Simple typewriter calls with reduced motion support
  const nameText = useTypewriter("Bharat Gupta", showContent, prefersReducedMotion);
  const roleText = useTypewriter("Software Developer", showContent, prefersReducedMotion);
  const descriptionText = "Driven by a passion for crafting high-impact projects and committed to making meaningful, lasting contributions.";
  const quoteText = useTypewriter("\"Strive not to be a success, but rather to be of value\" - Albert Einstein", showContent, prefersReducedMotion);

  // Handle screen resize with better mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation timing - desktop gets phases, mobile is instant
  useEffect(() => {
    // If user prefers reduced motion or is mobile, show everything immediately
    if (prefersReducedMotion || isMobile) {
      setImagePhase('positioned');
      setShowContent(true);
      return;
    }

    // Desktop animation phases
    const centeredTimer = setTimeout(() => {
      setImagePhase('centered');
    }, 600);

    const positionedTimer = setTimeout(() => {
      setImagePhase('positioned');
    }, 1200);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => {
      clearTimeout(centeredTimer);
      clearTimeout(positionedTimer);
      clearTimeout(contentTimer);
    };
  }, [isMobile, prefersReducedMotion]);

  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const leetcodeIcon = theme === "light" ? leetcodeIconLight : leetcodeIconDark;
  const hackerrankIcon =
    theme === "light" ? hackerrankIconLight : hackerrankIconDark;

  const profilePicIcon = theme === "light" ? heroImgDark : heroImg;

  const leetcode_img_style =
    theme === "light" ? styles.img_dark : styles.img_light;

  return (
    <motion.section
      id="hero"
      className={`${styles.container} ${styles.heroFullWidth} ${
        theme === "light" ? styles.lightBackground : styles.darkBackground
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.colorModeContainer}
        initial={prefersReducedMotion || isMobile ? {
          opacity: 1,
          x: isMobile ? 0 : '27vw',
          y: isMobile ? 70 : 0
        } : {
          opacity: 0,
          scale: 0.8,
          x: 0,
          y: 0
        }}
        animate={{
          opacity: 1,
          scale: isMobile ? 1 : (imagePhase === 'appearing' ? 0.8 : 1),
          x: isMobile ? 0 : (
             imagePhase === 'appearing' ? 0 :
             imagePhase === 'centered' ? 0 : '27vw'
          ),
          y: isMobile ? 70 : 0
        }}
        transition={prefersReducedMotion || isMobile ? { duration: 0 } : {
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <img
          src={profilePicIcon}
          className={styles.hero}
          alt="Profile Picture of Bharat Gupta"
        />

      </motion.div>

      {showContent && (
        <motion.div
          className={styles.textContainer}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: isMobile ? 0 : -30, y: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0
          }}
          transition={prefersReducedMotion ? { duration: 0 } : {
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <div className={styles.info}>
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
          style={{
            textAlign: 'center',
            fontFamily: '"Fira Code", "Consolas", "Monaco", "Roboto Mono", monospace',
            fontSize: isMobile ? '24px' : '32px',
            position: isMobile ? 'static' : 'absolute',
            top: isMobile ? 'auto' : '40px',
            width: '100%',
            marginBottom: isMobile ? '10px' : '0'
          }}
        >
          {nameText}
        </motion.h1>

        <motion.h2
          className={styles.typingText}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
          style={{
            position: isMobile ? 'static' : 'absolute',
            top: isMobile ? 'auto' : '100px',
            width: '100%',
            fontSize: isMobile ? '16px' : '24px',
            marginBottom: isMobile ? '20px' : '0'
          }}
        >
          {roleText}
        </motion.h2>

        <motion.span
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : {
            duration: 0.5,
            delay: 0.6,
            ease: "easeOut"
          }}
            style={{
              position: isMobile ? 'static' : 'absolute',
              top: isMobile ? 'auto' : '170px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '15px' : '25px',
              marginBottom: isMobile ? '15px' : '0'
            }}
          >
            <a href="https://github.com/bharatgupta77" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/bharatgupta77/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://leetcode.com/u/guptabharat297/" target="_blank" rel="noopener noreferrer">
              <img className={leetcode_img_style} src={leetcodeIcon} alt="LeetCode" />
            </a>
            <a href="https://www.hackerrank.com/profile/bharatgupta777" target="_blank" rel="noopener noreferrer">
              <img className={leetcode_img_style} src={hackerrankIcon} alt="HackerRank" />
            </a>
          </motion.span>

        <motion.p
          className={styles.description}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : {
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut"
          }}
          style={{
            fontFamily: '"Fira Code", "Consolas", "Monaco", "Roboto Mono", monospace',
            fontSize: isMobile ? '12px' : '14px',
            lineHeight: '1.6',
            position: isMobile ? 'static' : 'absolute',
            top: isMobile ? 'auto' : '260px',
            width: '100%',
            textAlign: 'center',
            marginBottom: isMobile ? '15px' : '0',
            padding: isMobile ? '0 10px' : '0'
          }}
        >
          {descriptionText}
        </motion.p>

        {/* Einstein Quote - Inside text container for mobile */}
        {isMobile && (
        <motion.p
          className={styles.quote}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : {
            duration: 0.6,
            delay: 1.0,
            ease: "easeOut"
          }}
          style={{
            fontFamily: '"Fira Code", "Consolas", "Monaco", "Roboto Mono", monospace',
            fontSize: '10px',
            lineHeight: '1.4',
            position: 'static',
            width: '100%',
            textAlign: 'center',
            fontStyle: 'italic',
            opacity: 0.7,
            margin: 0,
            padding: '0 15px'
          }}
        >
          {quoteText}
        </motion.p>
        )}



          </div>
        </motion.div>
      )}
      
      {/* Resume button for all screen sizes (top right corner) */}
      <motion.a 
        href={CV} 
        download
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className={styles.resumeButtonHorizontal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Resume</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      </motion.a>

      {/* Einstein Quote - Desktop only (bottom left corner) */}
      {!isMobile && (
        <motion.div
          className={styles.quoteIndicator}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 1.0, ease: "easeOut" }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            maxWidth: '400px',
            textAlign: 'left',
            zIndex: 10
          }}
        >
          <motion.p 
            style={{ 
              fontFamily: '"Fira Code", "Consolas", "Monaco", "Roboto Mono", monospace',
              fontSize: '12px',
              lineHeight: '1.4',
              textAlign: 'left',
              fontStyle: 'italic',
              opacity: 0.7,
              margin: 0,
              padding: '0 20px',
              color: 'var(--text-color)'
            }}
          >
            {quoteText}
          </motion.p>
        </motion.div>
      )}


      {/* Scroll indicator arrow */}
      <motion.div
        className={styles.scrollIndicator}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 1.5, duration: 0.8 }}
        onClick={() => {
          const educationSection = document.getElementById('education');
          if (educationSection) {
            const offset = 80; // Offset to account for margin and show heading properly
            const elementPosition = educationSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }}
      >
        <motion.div
          className={styles.scrollArrow}
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={prefersReducedMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </motion.div>
        <span className={styles.scrollText}>Scroll Down for More</span>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
