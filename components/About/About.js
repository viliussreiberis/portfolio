import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className="main-section">
      <div>
        <h1 className="section-title">About Me</h1>
        <p className="section-text">
          I am a passionate Front-End developer, capable of independently
          managing my time, working alone and in a group. I am a fast learner
          with much to offer especially in JavaScript, React.js, TypeScript, and
          Next.js, which allow me to dedicate my efforts to ensure a project’s
          success.
        </p>
        <div>
          <a
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-d3b3e.appspot.com/o/Vilius_%C5%A0reiberis_-_Front-End_Developer.pdf?alt=media&token=7f9ea5c5-2e55-4b03-96aa-092953a888db"
            className="button-main"
            rel="noreferrer"
          >
            Download CV
            <AiOutlineCloudDownload style={{ marginLeft: ".5rem" }} />
          </a>
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
