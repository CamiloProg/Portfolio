import React from "react";
import "./Contact.css";
import cvLogo from "../../assets/cvlogo.png";
import githubLogo from "../../assets/gitHubLogo.png";
import linkedinLogo from "../../assets/linkedIn.png";
import MyCV from "../../assets/CV_CamiloMartinezEN.pdf";
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
          <img src={githubLogo} alt="Github" width={80} />
          <p>GitHub</p>
        </a>

        <a className="list" href={MyCV} download target="_blank">
          <img src={cvLogo} alt="CV" width={80} />
          <p>CV</p>
        </a>
      </ul>
    </section>
  );
};
