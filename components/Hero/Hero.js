import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div>
        <h1 className={styles.main}>Hello everyone! I&apos;m Vilius.</h1>
        <p className={styles.text}>
          Welcome on my portfolio page! I&apos;m a Front-End Developer. Living
          in Vilnius, Lithuania.
        </p>
      </div>
      <div className="img-container">
        <img
          className={styles.img}
          src="/profilio-nuotrauka.jpg"
          alt="myProfilePicture"
        />
      </div>
      <div className={styles.arrow}>
        <AiOutlineArrowDown size="3.5rem" style={{ ZIndex: "1000" }} />
      </div>
    </section>
  );
};

export default Hero;
