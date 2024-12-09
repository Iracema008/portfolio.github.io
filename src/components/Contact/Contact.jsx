import React from "react";

import styles from "./Contact.module.css";
import githubIcon from "./githubIcon.png";
import emailIcon from "./emailIcon.png";
import linkedinIcon from "./linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
              <p> Designed and developed by
                  Iracema Cobian CWID:885355958</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={(emailIcon)} alt="Email icon" />
          <a href="https://docs.google.com/document/d/1hRfgn8JoXMEq03vKtDBkJMXa8dG4eD-L-qY9gWm8pvc/edit?usp=sharing">Email & Resume</a>
        </li>
        <li className={styles.link}>
          <img
            src={(linkedinIcon)}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/iracema-c-sanchez/"> LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={(githubIcon)} alt="Github icon" />
          <a href="https://www.github.com/Iracema008">Github</a>
        </li>
      </ul>
    </footer>
  );
};