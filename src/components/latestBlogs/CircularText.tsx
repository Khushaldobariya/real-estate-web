import React from "react";
import styles from "./CircularText.module.css";
const CircularText = () => {
  const text = "OUR BLOG. GHAR HO TOH AISA.";
  const radius = 100; 
  const letterSpacing = 360 / text.length; 

  const letters = text.split("").map((char, index) => {
    const angle = (index * letterSpacing - 90) * (Math.PI / 180);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return (
      <span
        key={index}
        className={styles.letter}
        style={{
          transform: `translate(${x}px, ${y}px) rotate(${
            index * letterSpacing
          }deg)`,
          transformOrigin: `0 ${radius}px`,
        }}
      >
        {char}
      </span>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        {letters}
        <div className={styles.center}>
          <img
            src="/assets/images/latestBlogs/home.svg"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};

export default CircularText;
