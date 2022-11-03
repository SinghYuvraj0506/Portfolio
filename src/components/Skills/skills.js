import React from "react";
import "./layout.css";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMongodb,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiArrowGoForwardFill, RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";

export const Skills = () => {
  return (
    <>
      <Link to="/about" className="button-contact about-btn">
        <RiArrowGoBackFill /> ABOUT
      </Link>
      <Link to="/about/education" className="button-contact next-btn">
        EDUCATION <RiArrowGoForwardFill />
      </Link>
      <div className="main-skill-container">
        <h1 className="text-1">Skills</h1>
        <div className="details">
          Started the journey towards web development by learning the various concepts of HTML and CSS like different tags,different manipulations, CSS animations, transitions, positioning, displaying, flexing, griding,etc then proceded furthur with the core concepts of Javascript like DOM manipulation, eventlistners, jQuery, basic programming techniques, etc.<br/><br/>
          After finishing with some basic technologies for frontend development, I procceded with the technologgies like the NODE JS, Express JS, Pug, Mongoose and MongoDB for Backend Development and made several websites which can be seen in the portfolio.<br/><br/>
          Further for incresing the level of frontend development I moved towards the single page application framework and Javascript library like React and increased the practice by developing three fully functioning websites having the use of APIs from various sources and also build many on my own.<br/><br/>
          After working for Anchors I realised the need of deployment and hence I learnt AWS (EC2 , Route53 , SES , S3 .etc), heroku as well as Netlify and has deployed many projects after that.
        </div>
      </div>
      <div className="cube">
        <div className="cube-spinner">
          <div className="face-1">
            <SiJavascript className="skill-icons" color="#EFD81D" />
          </div>
          <div className="face-2">
            <SiReact className="skill-icons" color="#5ED4F4" />
          </div>
          <div className="face-3">
            <SiHtml5 className="skill-icons" color="#F06529" />
          </div>
          <div className="face-4">
            <SiCss3 className="skill-icons" color="#28A4D9" />
          </div>
          <div className="face-5">
            <SiMongodb className="skill-icons" color="#00ed64" />
          </div>
          <div className="face-6">
            <DiNodejs className="skill-icons" color="black" />
          </div>
        </div>
      </div>
      <div className="loaders">
        <Audio height="80" width="80" color="black" ariaLabel="loading" />
      </div>
    </>
  );
};
