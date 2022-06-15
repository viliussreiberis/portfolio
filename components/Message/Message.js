import React, { Fragment, useState, useRef } from "react";
import styles from "./Message.module.css";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { CheckIcon } from "@heroicons/react/solid";

import { db } from "../../firebase";

const Message = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const [loading, setLoading] = useState(false);
  const [showMessageNotification, setMessageNotification] = useState(false);

  const uploadMessage = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);

    // 1) Create a post and add to firestore 'posts' collection
    // 2) get the post ID for the newly created post
    // 3) upload the image to firebase storage with the post ID
    // 4) get a download URL from fb storage and update to original post with image

    const docRef = await addDoc(collection(db, "Messages"), {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      message: messageInputRef.current.value,
    });

    setLoading(false);
    setMessageNotification(true);
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";

    setTimeout(() => {
      setMessageNotification(false);
    }, [3000]);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={uploadMessage}>
        <div className={styles.formGroup}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Name</label>
          </div>
          <input
            type="text"
            className={styles.input}
            placeholder="Your Name"
            ref={nameInputRef}
          ></input>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Email</label>
          </div>
          <input
            type="email"
            className={styles.input}
            placeholder="Your Email"
            ref={emailInputRef}
          ></input>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>Message</label>
          </div>
          <textarea
            rows="5"
            className={styles.input}
            placeholder="Your Message"
            ref={messageInputRef}
          ></textarea>
        </div>
        <div className={styles.successContainer}>
          <button
            type="submit"
            className="button-main"
            style={{ margin: "0", marginRight: "2rem" }}
          >
            Send Message
          </button>
          {showMessageNotification && (
            <div className={styles.success}>
              Message was sent successfully!{" "}
              <CheckIcon style={{ width: "2.5rem", marginLeft: "1.5rem" }} />{" "}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Message;
