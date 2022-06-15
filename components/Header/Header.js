import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCode } from "react-icons/di";
import styles from "./Header.module.css";
import MobileHeader from "../MobileHeader/MobileHeader";

const Header = () => {
  return (
    <div className={styles.header}>
      <MobileHeader />
      <div className={styles.title}>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <DiCode size="3rem" style={{ marginRight: ".5rem" }} />
            <span className={styles.title}>Portfolio</span>
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="#about">
          <a className={styles.link}>About</a>
        </Link>

        <Link href="#projects">
          <a className={styles.link}>Projects</a>
        </Link>

        <Link href="#technologies">
          <a className={styles.link}>Technologies</a>
        </Link>

        <Link href="#education">
          <a className={styles.link}>Education</a>
        </Link>

        <Link href="#contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </div>
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
  );
};

export default Header;
