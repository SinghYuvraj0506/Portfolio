import React from "react";
import "./layout.css";
import { RiArrowGoForwardFill, RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";

export const Ed = () => {
  return (
    <>
      <Link to="/about" className="button-contact about-btn">
        <RiArrowGoBackFill /> ABOUT
      </Link>
      <Link to="/about/skills" className="button-contact next-btn">
        SKILLS <RiArrowGoForwardFill />
      </Link>
      <div className="main-container">
        <h1 className="text-1">Education Details</h1>
        <div className="container-cards">
          <div className="card-element">
            <span className="badge">Completed</span>
            <img
              src="https://img1.wsimg.com/isteam/ip/174c046f-a411-46dc-b04c-91ec67e14034/398aa531-b0ec-40e1-9e23-7cd2aba78df9.jpg"
              alt="school"
            />
            <div className="card-texts">
              <h2 className="text-2">Matriculation(10th)</h2>
              <div className="details-card">
                Completed Matriculation(10th) from St.Francis H.Sec School,Pithampur affliated by CBSE Board in the year 2018 and secured 89.8% in the board examination.
              </div>
            </div>
          </div>

          <div className="card-element">
          <span className="badge">Completed</span>
            <img
              src="https://img1.wsimg.com/isteam/ip/174c046f-a411-46dc-b04c-91ec67e14034/398aa531-b0ec-40e1-9e23-7cd2aba78df9.jpg"
              alt="..."
            />
            <div className="card-texts">
              <h2 className="text-2">Intermediate(12th)</h2>
              <div className="details-card">
              Completed Intermediate(12th) from St.Francis H.Sec School,Pithampur affliated by CBSE Board in the year 2020, took Physics,Chemistry,Mathematics and Computer Science(Python) and secured 92.6% in the board examination.
              </div>
            </div>
          </div>

          <div className="card-element">
          <span className="badge">Pursuing..</span>
            <img
              src="https://images.shiksha.com/mediadata/images/1626148552phpodTmKq.jpeg"
              alt="..."
            />
            <div className="card-texts">
              <h2 className="text-2">Graduation(B-Tech)</h2>
              <div className="details-card">
                Pursuing B-Tech in Mechanical Engineering from Delhi Skill and Entrepreneurship University which is the State government college of Delhi since 2021. 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loaders">
        <Audio height="80" width="80" color="black" ariaLabel="loading" />
      </div>
    </>
  );
};
