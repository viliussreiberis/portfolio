import React from "react";
import { DiHtml5 } from "react-icons/di";
import styles from "./Technology.module.css";

const Technology = ({ name, icon }) => {
  return (
    <div className={styles.technology}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.title}>{name}</p>
    </div>
  );
};

export default Technology;
