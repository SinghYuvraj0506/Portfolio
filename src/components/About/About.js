import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import img1 from "../Images/1.2.jpeg";
import img2 from "../Images/2.jpeg";
import img3 from "../Images/3.jpeg";
import img5 from "../Images/5.jpeg";
import img7 from "../Images/7.jpeg";

import {Audio } from "react-loader-spinner";

export const About = () => {
  return (
    <>
      <div className="container-about">
        <h1 className="text-1">About Me</h1>
        <div className="details">
        <div>
           I'm a Full Stack
        Developer and a UI Designer from Delhi, India.
        </div><br/>
        I enjoy taking complex problems and turning them into
        simple and beautiful interface designs.I also love the logic
        and structure of coding and always strive to write elegant
        and efficient code,whether it be HTML,CSS,Node or React.
        When I'm not coding or pushing pixels,you'll find me learning new skills or
        playing cricket or watching web series.
        </div>
        <div className="buttons">
          <Link to="/about/education" className="button-contact">
            EDUCATION
          </Link>
          <Link to="/about/skills" className="button-contact">
            SKILLS
          </Link>
        </div>
      </div>

      <div className="image-sliders">
        <span>
          <img src={img1} alt="images" />
        </span>
        <span>
          <img src={img2} alt="images" />
        </span>
        <span>
          <img src={img3} alt="images" />
        </span>
        <span>
          <img src={img5} alt="images" />
        </span>
        <span>
          <img src={img7} alt="images" />
        </span>
      </div>

      <div className="loaders">
      <Audio height="80" width="80" color="black" ariaLabel="loading" />
      </div>
    </>
  );
};
