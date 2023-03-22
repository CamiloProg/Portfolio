import React from "react";
import "./Contact.css";
import cvLogo from "../../assets/cvlogo.png";
import githubLogo from "../../assets/gitHubLogo.png";
import linkedinLogo from "../../assets/linkedIn.png";
export const Contact = () => {
  return (
    <section className="contactContent " id="contact">
      <div className="title">
        <h2>CONTACTO</h2>
      </div>

      <ul className="contact-list">
        <a
          className="list"
          href="https://www.linkedin.com/in/camilomartinez01/"
          target="_blank"
        >
          <img src={linkedinLogo} alt="LinkedIn" width={80} />
          <p>LinkedIn</p>
        </a>

        <a
          className="list"
          href="https://github.com/CamiloProg"
          target="_blank"
        >
          <img
            src="dist/assets/gitHubLogo-d83ddf4e.png"
            alt="Github"
            width={80}
          />
          <p>GitHub</p>
        </a>

        <a
          className="list"
          href="src/assets/CV_CamiloMartinezEN.pdf"
          download
          target="_blank"
        >
          <img src={cvLogo} alt="CV" width={80} />
          <p>CV</p>
        </a>
      </ul>
    </section>
  );
};
