import React from "react";
import styles from "./Contact.module.css";

import Message from "../Message/Message";
import ContactInfo from "../ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="secondary-section">
      <h1 className="section-title">Contact Me</h1>
      <div className={styles.grid}>
        <Message />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
