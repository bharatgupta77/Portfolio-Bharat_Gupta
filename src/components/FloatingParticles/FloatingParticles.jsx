import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './FloatingParticles.module.css';

const FloatingParticles = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const allParticles = [];

    // Define animation options (keeping only circles)
    const animations = ['animationFloatUp', 'animationSpiralUp', 'animationZigzagUp', 'animationWaveUp'];
    
    // Define colorful options for light theme
    const colorfulOptions = [
      'var(--particle-color-1)', // Blue
      'var(--particle-color-2)', // Green  
      'var(--particle-color-3)', // Yellow
      'var(--particle-color-4)', // Red
      'var(--particle-color-5)', // Purple
      'var(--particle-color-6)', // Pink
      'var(--particle-color-7)', // Cyan
      'var(--particle-color-8)'  // Emerald
    ];

    // Use theme from context
    const isLightTheme = theme === 'light';
    
    // Define parallax layers
    const layers = [
      { 
        count: 15, 
        sizeRange: [2, 4], 
        speedRange: [25, 35], 
        opacity: 0.3, 
        zIndex: -3,
        className: 'layerBack'
      },
      { 
        count: 20, 
        sizeRange: [4, 8], 
        speedRange: [15, 25], 
        opacity: 0.5, 
        zIndex: -2,
        className: 'layerMid'
      },
      { 
        count: 15, 
        sizeRange: [6, 12], 
        speedRange: [8, 15], 
        opacity: 0.7, 
        zIndex: -1,
        className: 'layerFront'
      }
    ];

    // Create particles for each layer
    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        const particle = document.createElement('div');
        
        // Random animation (but always circular shape)
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        // Apply base particle class with circle shape, animation, and layer
        particle.className = `${styles.particle} ${styles.particleCircle} ${styles[randomAnimation]} ${styles[layer.className]}`;
        
        // Random starting position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100 + 100}%`; // Start below viewport
        
        // Size based on layer
        const size = Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]) + layer.sizeRange[0];
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Speed based on layer (slower = further back)
        const duration = Math.random() * (layer.speedRange[1] - layer.speedRange[0]) + layer.speedRange[0];
        particle.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;
        
        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 100; // -50 to 50px
        particle.style.setProperty('--drift', `${drift}px`);
        
        // Color assignment - colorful for light theme, default for dark theme
        if (isLightTheme) {
          const randomColor = colorfulOptions[Math.floor(Math.random() * colorfulOptions.length)];
          particle.style.backgroundColor = randomColor;
        } else {
          // For dark theme, use the CSS variable (which will be white)
          particle.style.backgroundColor = 'var(--particle-color)';
        }
        
        // Layer-specific styling
        particle.style.opacity = layer.opacity;
        particle.style.zIndex = layer.zIndex;
        
        // Add parallax scroll effect
        particle.setAttribute('data-parallax-layer', layerIndex);
        
        container.appendChild(particle);
        allParticles.push(particle);
      }
    });

    // Parallax scroll effect
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Apply different parallax speeds to each layer
          layers.forEach((layer, layerIndex) => {
            const particles = container.querySelectorAll(`[data-parallax-layer="${layerIndex}"]`);
            const parallaxSpeed = 0.1 + (layerIndex * 0.05); // Back layers move slower
            
            particles.forEach(particle => {
              const translateY = scrollY * parallaxSpeed;
              particle.style.transform = `translateY(${translateY}px)`;
            });
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      allParticles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [theme]);

  return <div ref={containerRef} className={styles.particlesContainer}></div>;
};

export default FloatingParticles;