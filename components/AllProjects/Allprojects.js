import React, { useState, useEffect } from "react";
import styles from "./Allprojects.module.css";
import Project from "../Product/Project";
import Projects from "../Projects/Projects";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { useRouter } from "next/router";

const Allprojects = () => {
  const [projects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    onSnapshot(
      query(collection(db, "Posts"), orderBy("id", "asc")),
      (snapshot) => {
        setAllProjects(snapshot.docs.map((doc) => doc.data()));
      }
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <section
      // className="secondary-section allProjectsSection"
      className={`secondary-section ${styles.allProjectsSection}`}
    >
      <h1 className="section-title">Projects</h1>
      {isLoading && <p className={styles.loading}>Loading....</p>}
      <div className={styles.grid}>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
        <Link href="/">
          <a className="main-link">
            Back to main page{" "}
            <ArrowNarrowLeftIcon
              style={{
                width: "25px",
                marginLeft: "1rem",
              }}
            />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Allprojects;
