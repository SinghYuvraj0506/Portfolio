import React from "react";
import "./layout.css";
import { Audio } from "react-loader-spinner";
import { data } from "./data";

export const Projects = () => {
  return (
    <>
      <div className="main-container-portfolio">
        <h1 className="text-1">Portfolio</h1>
        <div className="card-videos">
          {data.map((item, key) => (
            <div className="item" key={key}>
              <img src={item.image} alt="project_image" />
              <h2>{item.title}</h2>
              <div className="buttons">
                {item.github ? <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button-project"
                >
                  Github
                </a>:""}
                {item.demo ? <a href={item.demo} target="_blank" rel="noreferrer"
                  className="button-project">
                  Live Demo
                </a>: ""}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="loaders">
        <Audio height="80" width="80" color="black" ariaLabel="loading" />
      </div>
    </>
  );
};
