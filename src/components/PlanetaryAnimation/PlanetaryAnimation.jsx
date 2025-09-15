
import React from "react";
import styles from "./PlanetaryAnimation.module.css";

const PlanetaryAnimation = () => {
  return (
    <div className={styles.planetarySystem}>
      {/* Central Star */}
      <div className={styles.centralStar}></div>
      
      {/* Planet Orbits */}
      <div className={styles.orbit1}>
        <div className={styles.planet1}></div>
      </div>
      
      <div className={styles.orbit2}>
        <div className={styles.planet2}></div>
      </div>
      
      <div className={styles.orbit3}>
        <div className={styles.planet3}></div>
      </div>
      
      <div className={styles.orbit4}>
        <div className={styles.planet4}></div>
      </div>
      
      <div className={styles.orbit5}>
        <div className={styles.planet5}></div>
      </div>
    </div>
  );
};

export default PlanetaryAnimation;