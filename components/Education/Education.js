import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section id="education" className="secondary-section">
      <h1 className="section-title">Education</h1>

      <div className={styles.grid}>
        <div className={styles.educationContainer}>
          <div className={styles.education}>
            <div className={styles.imgContainer}>
              <img
                src="/education-icon.svg"
                alt="education icon"
                className={styles.img}
              />
            </div>
            <div>
              <p className={styles.year}>2014-2018</p>
              <h2 className={styles.university}>
                Vilnius Gediminas Technical University
              </h2>
              <h3 className={styles.degree}>
                Bachelor of road, railway and urban engineering
              </h3>
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.imgContainer}>
              <img
                src="/education-icon.svg"
                alt="education icon"
                className={styles.img}
              />
            </div>
            <div>
              <p className={styles.year}>2019-2021</p>
              <h2 className={styles.university}>
                Vilnius Gediminas Technical University
              </h2>
              <h3 className={styles.degree}>
                Master of road safety engineering
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="img-container">
            <img className={styles.imgOwl} src="/owl.svg" alt="owl picture" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
