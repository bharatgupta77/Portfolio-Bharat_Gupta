import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

// Simple typewriter hook
const useTypewriter = (text, shouldStart = false) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setDisplayedText("");
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [shouldStart, currentIndex, text]);

  return displayedText + (currentIndex < text.length ? '|' : '');
};

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [imagePhase, setImagePhase] = useState('appearing'); // 'appearing', 'centered', 'movingRight', 'positioned'
  const [showTextContainer, setShowTextContainer] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Typing animations with proper sequencing
  const [showNameTyping, setShowNameTyping] = useState(false);
  const [showRoleTyping, setShowRoleTyping] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  
  // Simple typewriter calls
  const nameText = useTypewriter("Bharat Gupta", showNameTyping);
  const roleText = useTypewriter("Software Developer", showRoleTyping);
  const descriptionText = useTypewriter("Driven by a passion for crafting high-impact projects and committed to making meaningful, lasting contributions.", showDescription);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1425);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle the complete animation sequence
  useEffect(() => {
    // Phase 1: Image appears slowly in center (2 seconds)
    const centeredTimer = setTimeout(() => {
      setImagePhase('centered');
    }, 2000);

    // Phase 2: Image starts moving to right (after 1 second pause)
    const movingTimer = setTimeout(() => {
      setImagePhase('movingRight');
    }, 3000);

    // Phase 3: Image reaches final position
    const positionedTimer = setTimeout(() => {
      setImagePhase('positioned');
    }, 4500);

    // Phase 4: Show text container after image is positioned
    const textTimer = setTimeout(() => {
      setShowTextContainer(true);
    }, 5000);

    // Phase 5: Start name typing
    const nameTimer = setTimeout(() => {
      setShowNameTyping(true);
    }, 5500);

    // Phase 6: Start role typing after name completes
    const roleTimer = setTimeout(() => {
      setShowRoleTyping(true);
    }, 6800);

    // Phase 7: Show social icons after role typing
    const socialTimer = setTimeout(() => {
      setShowSocialIcons(true);
    }, 8200);

    // Phase 8: Show description after social icons appear
    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, 8700);

 // Show right after description finishes

    return () => {
      clearTimeout(centeredTimer);
      clearTimeout(movingTimer);
      clearTimeout(positionedTimer);
      clearTimeout(textTimer);
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
      clearTimeout(socialTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

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
        initial={{ 
          opacity: 0, 
          scale: 0.3,
          x: 0
        }}
        animate={{ 
          opacity: imagePhase === 'appearing' ? 0 : 1,
          scale: imagePhase === 'appearing' ? 0.3 : 
                 imagePhase === 'centered' ? 1 : 
                 imagePhase === 'movingRight' ? 0.9 : 1,
          x: imagePhase === 'appearing' ? 0 :
             imagePhase === 'centered' ? 0 :
             isMobile ? 0 : '30vw' // Stay centered on mobile, move right on desktop
        }}
        transition={{ 
          opacity: { duration: 2.0, ease: "easeOut" },
          scale: { 
            duration: imagePhase === 'appearing' ? 2.0 : 0.8, 
            ease: "easeOut" 
          },
          x: { duration: 1.5, ease: "easeInOut" }
        }}
      >
        <img
          src={profilePicIcon}
          className={styles.hero}
          alt="Profile Picture of Bharat Gupta"
        />

      </motion.div>

      {showTextContainer && (
        <motion.div 
          className={styles.textContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.info}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showNameTyping ? 1 : 0,
            y: showNameTyping ? 0 : 20
          }}
          transition={{ duration: 0.5 }}
          style={{ 
            textAlign: 'center',
            fontFamily: '"Fira Code", "Consolas", "Monaco", "Roboto Mono", monospace',
            fontSize: '32px',
            position: 'absolute',
            top: '40px',
            width: '100%'
          }}
        >
          {nameText}
        </motion.h1>
        
        <motion.h2 
          className={styles.typingText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showRoleTyping ? 1 : 0,
            y: showRoleTyping ? 0 : 20
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '100px',
            width: '100%'
          }}
        >
          {roleText}
        </motion.h2>

        {showSocialIcons && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              ease: "backOut",
              staggerChildren: 0.05
            }}
            style={{
              position: 'absolute',
              top: '160px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: '25px'
            }}
          >
            <motion.a 
              href="https://github.com/bharatgupta77" 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={githubIcon} alt="GitHub" />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/bharatgupta77/" 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </motion.a>

            <motion.a 
              href="https://leetcode.com/u/guptabharat297/" 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img className={leetcode_img_style} src={leetcodeIcon} alt="LeetCode" />
            </motion.a>

            <motion.a
              href="https://www.hackerrank.com/profile/bharatgupta777"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img className={leetcode_img_style} src={hackerrankIcon} alt="HackerRank" />
            </motion.a>
          </motion.span>
        )}

        {showDescription && (
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ 
            fontFamily: '"Fira Code", "Consolas", "Monaco", "Roboto Mono", monospace',
            fontSize: '14px',
            lineHeight: '1.6',
            position: 'absolute',
            top: '220px',
            width: '100%',
            textAlign: 'center'
          }}
        >
          {descriptionText}
        </motion.p>
        )}

          </div>
        </motion.div>
      )}
      
      {/* Resume button in top right corner */}
      <motion.a 
        href={CV} 
        download
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className={styles.resumeButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Resume</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      </motion.a>
    </motion.section>
  );
}

export default Hero;
