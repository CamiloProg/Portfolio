import React, { useState } from "react";
import "./Skills.css";
import javaScriptLogo from "../../assets/Javascript.png";
import reactLogo from "../../assets/React.png";
import htmlLogo from "../../assets/HTML.png";
import cssLogo from "../..//assets/CSS.png";
export const Skills = () => {
  const [text, setText] = useState("");

  return (
    <div className="contentSkills" id="skills">
      <h1>Skills</h1>
      <div className="containerSkill">
        <div
          className="card"
          onMouseEnter={() =>
            setText(
              " I have done some projects with ReactJs and React Native using libraries as Redux, Context, hooks and helpers for saving work time."
            )
          }
          onMouseLeave={() => setText("")}
        >
          <h3 className="title">ReactJS / ReactNative</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <img src={reactLogo} height={120} />
          </div>
        </div>
        <div
          className="card"
          onMouseEnter={() =>
            setText(
              "JavaScript is my favorite language, I think that it is super important to know it, all my projects have at least a little of JavaScript :)"
            )
          }
          onMouseLeave={() => setText("")}
        >
          <h3 className="title">JavaScript</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <img src={javaScriptLogo} height={120} />
          </div>
        </div>
        <div
          className="card"
          onMouseEnter={() =>
            setText(
              "HTML is the base of all, I really love use this technology and mix it with other libraries to create awesome projects."
            )
          }
          onMouseLeave={() => setText("")}
        >
          <h3 className="title">HTML</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <img src={htmlLogo} height={120} />
          </div>
        </div>
        <div
          className="card"
          onMouseEnter={() =>
            setText(
              "Is incredible all the things that you can do with CSS, I'm interested to improve my skills in CSS because all of us will need to know perfectly this technology. I have worked with libraries as Bootstrap, Tailwind, StyleSheets, etc too."
            )
          }
          onMouseLeave={() => setText("")}
        >
          <h3 className="title">CSS</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <img src={cssLogo} height={120} />
          </div>
        </div>
      </div>
      <div className="cardText">{text}</div>
    </div>
  );
};
