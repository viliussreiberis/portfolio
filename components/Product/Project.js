import React from "react";
import styles from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const Project = ({
  project: { id, image, title, description, tags, source, visit },
}) => {
  return (
    <div key={id} className={styles.project}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt="project image" />
      </div>
      <div className={styles.info}>
        <div>
          {" "}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.describe}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag, i) => {
              return (
                <div key={i} className="tag">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className={styles.links}>
            <div>
              <a className="button-link-project white" href={source}>
                Github <AiFillGithub style={{ marginLeft: ".5rem" }} />
              </a>
            </div>
            <div>
              <a className="button-link-project" href={visit}>
                Visit <FiExternalLink style={{ marginLeft: ".5rem" }} />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
