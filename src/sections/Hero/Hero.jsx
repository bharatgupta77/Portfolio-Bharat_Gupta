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

import CV from "../../assets/Bharat_Gupta_Resume.pdf";
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
  const [showQuoteTyping, setShowQuoteTyping] = useState(false);
  
  // Simple typewriter calls
  const nameText = useTypewriter("Bharat Gupta", showNameTyping);
  const roleText = useTypewriter("Software Developer", showRoleTyping);
  const descriptionText = "Driven by a passion for crafting high-impact projects and committed to making meaningful, lasting contributions.";
  const quoteText = useTypewriter("\"Strive not to be a success, but rather to be of value\" - Albert Einstein", showQuoteTyping);

  // Handle screen resize with better mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); // Better mobile breakpoint
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle the complete animation sequence with mobile optimization
  useEffect(() => {
    // Faster animations for mobile
    const mobileMultiplier = isMobile ? 0.6 : 1;

    // Phase 1: Image appears slowly in center
    const centeredTimer = setTimeout(() => {
      setImagePhase('centered');
    }, 1500 * mobileMultiplier);

    // Phase 2: Image starts moving to right (or stays centered on mobile)
    const movingTimer = setTimeout(() => {
      setImagePhase('movingRight');
    }, 2200 * mobileMultiplier);

    // Phase 3: Image reaches final position
    const positionedTimer = setTimeout(() => {
      setImagePhase('positioned');
    }, 3200 * mobileMultiplier);

    // Phase 4: Show text container after image is positioned
    const textTimer = setTimeout(() => {
      setShowTextContainer(true);
    }, 3500 * mobileMultiplier);

    // Phase 5: Start name typing
    const nameTimer = setTimeout(() => {
      setShowNameTyping(true);
    }, 3800 * mobileMultiplier);

    // Phase 6: Start role typing after name completes
    const roleTimer = setTimeout(() => {
      setShowRoleTyping(true);
    }, 4800 * mobileMultiplier);

    // Phase 7: Show social icons after role typing
    const socialTimer = setTimeout(() => {
      setShowSocialIcons(true);
    }, 6000 * mobileMultiplier);

    // Phase 8: Show description after social icons appear
    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, 6300 * mobileMultiplier);

    // Phase 9: Start quote typing after description appears
    const quoteTimer = setTimeout(() => {
      setShowQuoteTyping(true);
    }, 7500 * mobileMultiplier);

    return () => {
      clearTimeout(centeredTimer);
      clearTimeout(movingTimer);
      clearTimeout(positionedTimer);
      clearTimeout(textTimer);
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
      clearTimeout(socialTimer);
      clearTimeout(descriptionTimer);
      clearTimeout(quoteTimer);
    };
  }, [isMobile]);

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
          x: 0,
          y: 0
        }}
        animate={{
          opacity: imagePhase === 'appearing' ? 0 : 1,
          scale: imagePhase === 'appearing' ? 0.3 :
                 imagePhase === 'centered' ? 1 :
                 imagePhase === 'movingRight' ? 0.9 : 1,
          x: imagePhase === 'appearing' ? 0 :
             imagePhase === 'centered' ? 0 :
             isMobile ? 0 : '27vw', // Stay centered on mobile, move right on desktop
          y: isMobile ? (
            imagePhase === 'appearing' ? 0 :
            imagePhase === 'centred' ? 0 :
            imagePhase === 'movingRight' ? 37.5 :
            imagePhase === 'positioned' ? 75 : 0
          ) : 0 // Gradual upward movement to final position
        }}
        transition={{
          opacity: { duration: 2.0, ease: "easeOut" },
          scale: {
            duration: imagePhase === 'appearing' ? 2.0 : 0.8,
            ease: "easeOut"
          },
          x: { duration: 1.5, ease: "easeInOut" },
          y: { duration: 2.0, ease: "easeInOut" }
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
          initial={{ opacity: 0, x: isMobile ? 0 : -50, y: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0 // Keep text container stationary on all devices
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            y: { duration: 0.8, ease: "easeInOut" }
          }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showRoleTyping ? 1 : 0,
            y: showRoleTyping ? 0 : 20
          }}
          transition={{ duration: 0.5 }}
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
              position: isMobile ? 'static' : 'absolute',
              top: isMobile ? 'auto' : '170px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '15px' : '25px',
              marginBottom: isMobile ? '15px' : '0'
            }}
          >
            <motion.a 
              href="https://github.com/bharatgupta77" 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img src={githubIcon} alt="GitHub" />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/bharatgupta77/" 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </motion.a>

            <motion.a 
              href="https://leetcode.com/u/guptabharat297/" 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <img className={leetcode_img_style} src={leetcodeIcon} alt="LeetCode" />
            </motion.a>

            <motion.a
              href="https://www.hackerrank.com/profile/bharatgupta777"
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img className={leetcode_img_style} src={hackerrankIcon} alt="HackerRank" />
            </motion.a>
          </motion.span>
        )}

        {showDescription && (
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            scale: { duration: 0.6, ease: "easeOut" }
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
        )}

        {/* Einstein Quote - Inside text container for mobile */}
        {isMobile && showQuoteTyping && (
        <motion.p
          className={styles.quote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
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
      {!isMobile && showQuoteTyping && (
        <motion.div
          className={styles.quoteIndicator}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 9, duration: 0.8 }}
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
          animate={{ y: [0, 10, 0] }}
          transition={{ 
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
