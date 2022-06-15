import React from "react";
import styles from "./ContactInfo.module.css";
import { CgMail } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const ContactInfo = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contact}>
        <div className={styles.imgContainer}>
          <CgMail color="black" size="3rem" />
        </div>
        <a className={styles.info} href="mailto:vilius.sreiberis@gmail.com">
          vilius.sreiberis@gmail.com
        </a>
      </div>
      <div className={styles.contact}>
        <div className={styles.imgContainer}>
          <AiFillPhone color="black" size="3rem" />
        </div>
        <a className={styles.info} href="tel:+3706586107">
          +37065861070
        </a>
      </div>
      <div className={styles.contact}>
        <div className={styles.imgContainer}>
          <ImLocation color="black" size="3rem" />
        </div>
        <a className={styles.info} href="mailto:vilius.sreiberis@gmail.com">
          Vilnius
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
