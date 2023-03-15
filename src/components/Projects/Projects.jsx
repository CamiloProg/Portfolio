import React from "react";
import "./Projects.css";
export const Projects = () => {
  return (
    <div className="contentProjects" id="projects">
      <section>
        <div className="=title">
          <h2>My Projects</h2>
        </div>

        <div className="carrousel">
          <h4>Carrousel</h4>
          <a
            target={"_blank"}
            href="https://camiloprog.github.io/react-introdution/"
          >
            Schedule your tasks with a localStorage
          </a>
          <br />
          <a
            target={"_blank"}
            href="https://camiloprogsearchmovies.netlify.app/"
          >
            Search movies by their name and organize them checking the box
          </a>
          <br />

          <a target={"_blank"} href="https://camiloproguserstable.netlify.app/">
            Users Table with an API
          </a>
          <br />

          <a target={"_blank"} href="https://camiloprogtodo.netlify.app/">
            Todo App with ReactJS and TypeScript
          </a>
        </div>
      </section>
    </div>
  );
};
