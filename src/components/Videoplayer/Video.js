import React from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri"
import { Audio } from "react-loader-spinner";
import ReactPlayer from "react-player";
import "./layout.css";

export const Video = () => {
  let video = window.location.search.split("??")[1]
  let video_image = window.location.search.split("??")[2]
  let title= window.location.search.split("??")[3].split("%20").join(" ")



  return (
    <>
      <Link to="/projects" className="button-contact about-btn">
        <RiArrowGoBackFill /> PORTFOLIO
      </Link>
      <div className="main-player">
        <h2 className="text-1">{title}</h2>
        {/* <div className="videos">
        <ReactPlayer className="videos" url={video} pip={true} playsinline={true} style={{width:"100%",height:"100%"}}/>
        </div> */}
        <video width="854" height="480" poster={video_image} controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="loaders">
        <Audio height="80" width="80" color="black" ariaLabel="loading" />
      </div>
    </>
  );
};
