import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import img2 from "../Images/img.jpg";
import img3 from "../Images/img2.jpg";

export const Home = () => {

  return (
    <>
      <div className="mobile-image">
        <img src={img3} alt="yuvraj" />
      </div>
      <div className="container-text">
        <h1 className="text-1">Hi,</h1>
        <br />
        <div className="effect-2">
        <h1 className="text-1">I'm</h1>
        <img className="logo-text" src={logo} alt="Y" />
        <h1 className="text-1">&nbsp; uvraj&nbsp;</h1>
        <h1 className="text-3"> Singh</h1>
        </div>
        <div className="effect-1">  
          <h2 className="text-2">I Am Into</h2>
          <ul className="skill-text text-4">
            <li>
              <span>Web Development</span>
            </li>
            <li>
              <span>Frontend Development</span>
            </li>
            <li>
              <span>Backend Development</span>
            </li>
          </ul>
        </div>
        <Link to="/contact" className="button-contact">CONTACT ME</Link>
        <a href="https://drive.google.com/u/0/uc?id=1-bJqrLFG3JIcQqdVN7O1o6r24S-6fV_u&export=download" download="Resume.pdf" className="button-contact">DOWNLOAD CV</a>
      </div>
      <div className="container-imgs">
        <img src={img2} alt="myimage" />
      </div>
    </>
  );
};
