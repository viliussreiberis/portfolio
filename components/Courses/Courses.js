import React, { useState, useEffect } from "react";
import Course from "../Course/Course";
import styles from "./Courses.module.css";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "Courses"), orderBy("id", "asc")),
      (snapshot) => {
        setCourses(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  return (
    <section className="secondary-section">
      <h1 className="section-title">Courses</h1>
      <div className={styles.grid}>
        {courses.map((course, i) => {
          return <Course key={i} name={course.name} i={i} />;
        })}
      </div>
    </section>
  );
};

export default Courses;
