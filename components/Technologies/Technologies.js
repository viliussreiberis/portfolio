import React, { useState, useEffect } from "react";
import Technology from "../Technology/Technology";
import styles from "./Technologies.module.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript1,
  DiSass,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";

import { SiRedux, SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMaterialui, SiTypescript } from "react-icons/si";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);

  const iconsArr = [
    <DiHtml5 size={"6rem"} key="1" />,
    <DiCss3 size={"6rem"} key="2" />,

    <DiSass size={"6rem"} key="3" />,
    <SiTailwindcss size={"6rem"} key="4" />,
    <SiMaterialui size={"6rem"} key="5" />,
    <div key="6"></div>,
    // <SiMaterialui size={"6rem"} />,
    <DiJavascript1 size={"6rem"} key="7" />,
    <DiReact size={"6rem"} key="8" />,
    <SiTypescript key="14" size={"6rem"} />,
    <SiRedux key="9" size={"6rem"} />,
    <img key="10" src="/next-js.svg" className={styles.icon}></img>,
    // <SiNextdotjs size={"6rem"} />,
    <div key="11"></div>,
    <DiGithubBadge key="12" size={"6rem"} />,

    <SiFirebase key="13" size={"6rem"} />,
  ];

  useEffect(() => {
    onSnapshot(
      query(collection(db, "Technologies"), orderBy("num", "asc")),
      (snapshot) => {
        setTechnologies(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  if (!technologies) {
    return <p>Loading...</p>;
  }

  return (
    <section id="technologies" className="secondary-section">
      <h1 className={`section-title ${styles.technologiesTitle}`}>
        Technologies & tools I work with
      </h1>
      <div className={styles.grid}>
        {technologies.map((technology, i) => {
          return (
            <Technology
              key={i}
              i={i}
              icon={iconsArr[i]}
              name={technology.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
