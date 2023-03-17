import "./Projects.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdPlayArrow } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import { IconContext } from "react-icons";
<link rel="stylesheet" type="text/css" href="swiper-styles.css" />;

export const Projects = () => {
  return (
    // <div className="contentProjects" id="projects">
    //   <section>
    //     <div className="=title">
    //       <h2>My Projects</h2>
    //     </div>

    //     <div className="carrousel">
    //       <h4>Carrousel</h4>
    //       <a
    //         target={"_blank"}
    //         href="https://camiloprog.github.io/react-introdution/"
    //       >
    //         Schedule your tasks with a localStorage
    //       </a>
    //       <br />
    //       <a
    //         target={"_blank"}
    //         href="https://camiloprogsearchmovies.netlify.app/"
    //       >
    //         Search movies by their name and organize them checking the box
    //       </a>
    //       <br />

    //       <a target={"_blank"} href="https://camiloproguserstable.netlify.app/">
    //         Users Table with an API
    //       </a>
    //       <br />

    //       <a target={"_blank"} href="https://camiloprogtodo.netlify.app/">
    //         Todo App with ReactJS and TypeScript
    //       </a>
    //     </div>
    //   </section>
    // </div>
    <section className="contentProjects" id="projects">
      <swiper-container
        class="proyects-list mySwiper"
        pagination="true"
        pagination-clickable="true"
        navigation="true"
        space-between="30"
        centered-slides="true"
        autoplay-delay="6000"
        autoplay-disable-on-interaction="false"
      >
        <swiper-slide>
          <li>
            <img src="src/assets/todo.png" alt="TodoAPP" />
            <div class="proyects-list_text">
              <h4>Todo APP</h4>
              <p>
                This is a website where you can add tasks that you need to do,
                there are some extra features likes organize, check and delete.
                <br />
                <br />
                <b>Technologies:</b> ReactJS, TypeScrip, HTML, CSS
              </p>
              <div class="proyects-list_text-links">
                <a
                  href="https://github.com/CamiloProg/todo-React-TS"
                  target="_blank"
                >
                  GitHub
                </a>
                <a href="https://camiloprogtodo.netlify.app/" target="_blank">
                  Desploy
                </a>
              </div>
            </div>
          </li>
        </swiper-slide>

        <swiper-slide>
          <li>
            <img src="src/assets/searchMovies.png" alt="SearchMovies" />
            <div class="proyects-list_text">
              <h4>SearchMovies</h4>
              <p>
                Go and try to search your favorite movie, also, you can organize
                them by alphabetical order
                <br />
                <br />
                <b>Technologies:</b> ReactJS, JavaScript, API REST, HTML, CSS
              </p>
              <div class="proyects-list_text-links">
                <a
                  href="https://github.com/CamiloProg/searchMovies"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://camiloprogsearchmovies.netlify.app/"
                  target="_blank"
                >
                  Desploy
                </a>
              </div>
            </div>
          </li>
        </swiper-slide>

        <swiper-slide>
          <li>
            <img src="src/assets/usersTable.png" alt="Users Table" />
            <div class="proyects-list_text">
              <h4>Users Table</h4>
              <p>
                A table that organize the users from an API, it could be with
                all the people that you want!
                <br />
                <br />
                <b>Technologies:</b> ReactJS, TypeScript, API REST, HTML, CSS
              </p>
              <div class="proyects-list_text-links">
                <a
                  href="https://github.com/CamiloProg/TypeScript_UsersTable"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://camiloproguserstable.netlify.app/"
                  target="_blank"
                >
                  Desploy
                </a>
              </div>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide>
          <li>
            <img src="src/assets/todoagain.png" alt="TodoApp" />
            <div class="proyects-list_text">
              <h4>Task App</h4>
              <p>
                Schedule your tasks of the day or week, it will still appear
                when you close and open the website because, this app uses
                localStorage
                <br />
                <br />
                <b>Technologies:</b> ReactJS, JavaScript, localStorage, HTML,
                CSS
              </p>
              <div class="proyects-list_text-links">
                <a
                  href="https://github.com/CamiloProg/react-introdution"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://camiloprog.github.io/react-introdution/"
                  target="_blank"
                >
                  Desploy
                </a>
              </div>
            </div>
          </li>
        </swiper-slide>
      </swiper-container>
    </section>
  );
};
