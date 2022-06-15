import React from "react";
import styles from "./Footer.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Made by Vilius</p>
      <div>
        <div className={styles.icons}>
          <a className={styles.icon} href="https://github.com/viliussreiberis">
            <AiFillGithub size="3rem" />
          </a>
          <a
            className={styles.icon}
            href="https://www.linkedin.com/in/vilius%C5%A1reiberis/"
          >
            <AiFillLinkedin size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
