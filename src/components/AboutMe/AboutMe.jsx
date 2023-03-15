import React from "react";
import "./AboutMe.css";
export const AboutMe = () => {
  return (
    <div className="aboutmeContainer" id="about">
      <section className="content">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="title">
          <h4>Biography</h4>
        </div>

        <div className="section_text">
          <p>
            Hi I'm <b>Juan Camilo Martinez Rivera</b>, a young man with 21 years
            old and I live in Colombia💛💙❤️, I am a Front-end Developer that
            learned by himself, searching in google and taking some courses, I
            really love technology and I am interested in all the new ones{" "}
          </p>
        </div>
        <div className="title">
          <h4>Background</h4>
        </div>

        <div className="section_text">
          <p>
            I'm always trying to improve my skills, if I'm not working, I'll be
            learning more about Front-end development, I use my free time to
            make new projects that shows my skills
          </p>
        </div>
        <b>
          If you are looking for a clean code and with good practices, I am the
          right person :)
        </b>
      </section>
    </div>
  );
};
