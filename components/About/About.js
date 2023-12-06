import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className="main-section">
      <div>
        <h1 className="section-title">About Me</h1>
        <p className="section-text">
        </p>
        <div>
        </div>
      </div>
      <div>
        <div className={`${styles.imgContainer} img-container`}>
          <img
            className={styles.img}
            src="/programming-coding.svg"
            alt="person who learning"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
