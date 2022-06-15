import React from "react";
import styles from "./Course.module.css";

const Course = ({ name, i }) => {
  return (
    <div className={styles.course}>
      <h3 className={styles.title}>{name}</h3>
      <p>{i === 5 ? "wwww.youtube.com" : "www.udemy.com"}</p>
    </div>
  );
};

export default Course;
