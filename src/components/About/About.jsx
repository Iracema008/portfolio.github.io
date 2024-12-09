import React from "react";

import styles from "./About.module.css";
import cursorIcon from "./cursorIcon.png";
import serverIcon from "./serverIcon.png";
import aboutImage from "./aboutImage.png";
import uiIcon from "./uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={(cursorIcon)} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Background</h3>
              <p>
                I grew up in Los Angeles California where at a young age, I started taking robotics classes. I soon developed a passion for computers which lead me here today!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={(serverIcon)} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                Currently, I attend California State University Fullerton where I am a third year computer science major.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={(uiIcon)} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Interests</h3>
              <p>
                I love learning about computers and I'm currently building a PC! Once that project is done, I hope to start playing around with a Rasberry Pi 4.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};