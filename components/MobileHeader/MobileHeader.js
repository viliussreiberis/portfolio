import React, { useState, Fragment } from "react";
import styles from "./MobileHeader.module.css";
import { MenuIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import Link from "next/link";

const MobileHeader = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  const handleMobileHandler = () => {
    setMobileMenu((prevState) => !prevState);
  };
  return (
    <Fragment>
      <div className={styles.mobileHeader}>
        <div
          className={styles.hamburgerContainer}
          onClick={handleMobileHandler}
        >
          {!showMobileMenu && (
            <MenuIcon fill="black" size="1rem" style={{ width: "3rem" }} />
          )}
          {showMobileMenu && (
            <XIcon fill="black" size="1rem" style={{ width: "3rem" }} />
          )}
        </div>
        <div
          className={`${
            showMobileMenu
              ? `${styles.circleContainer} ${styles.show}`
              : `${styles.circleContainer} ${styles.hide}`
          }`}
          onClick={handleMobileHandler}
        ></div>
        <div
          onClick={handleMobileHandler}
          className={`${
            showMobileMenu
              ? `${styles.mobileNav} ${styles.show}`
              : `${styles.mobileNav} ${styles.hide}`
          }`}
        >
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
      </div>
    </Fragment>
  );
};

export default MobileHeader;
