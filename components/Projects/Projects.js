import React, { useState, useEffect } from "react";
import Project from "../Product/Project";
import styles from "./Projects.module.css";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "Posts"), orderBy("id", "asc")),
        (snapshot) => {
          setProjects(snapshot.docs.map((doc) => doc.data()));
        }
      ),
    []
  );

  return (
    <section className="secondary-section" id="projects">
      <h1 className="section-title">Projects</h1>
      <div className={styles.grid}>
        {projects.slice(0, 6).map((project) => {
          return <Project key={project.id} project={project} />;
        })}
        <Link href="/projects">
          <a className="main-link">
            See All Projects{" "}
            <ArrowNarrowRightIcon
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

export default Projects;
