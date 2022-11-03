import React from "react";
import "./layout.css";
import Map, { Marker } from "react-map-gl";
import emailjs from "emailjs-com";
import pin from "../Images/marker.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Audio } from "react-loader-spinner";

export const Contact = () => {
  const initialViewState = {
    latitude: 28.534399,
    longitude: 77.260782,
    zoom: 11,
    bearing: 5,
    pitch: 50,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_usn28o5", "template1", e.target, "vAlsH7iijTmwNfLaS")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Message has been sent successfully",{
            position:"top-center",
            autoClose:3000
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="main-contact">
        <h1 className="text-1">Contact Me</h1>
        <div className="text-contact">
          Feel free to contact me regarding any project you want me to work upon or if you want to talk to me regarding any technical aspect I would be glad to help.
        </div>
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <input
              className="input-box"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              className="input-box"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              className="input-box"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Description"
              required
            ></textarea>
            <input className="button-contact" type="submit" value="SEND" />
            <input className="button-contact" type="reset" value="RESET" />
          </form>
        </div>
      </div>
      <div className="map-container">
        <Map
          initialViewState={initialViewState}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          mapboxAccessToken={
            "pk.eyJ1IjoieXV2cmFqc2luZ2gwNTA2IiwiYSI6ImNsNDV2dGl2bTAxc2QzY21vZTgyeGFza3UifQ.qDJ6yYn_BHt804s60DfjJg"
          }
        >
          <Marker longitude={77.260782} latitude={28.534399} anchor="bottom">
            <img src={pin} alt="Yuvraj's Address" width="80px" />
          </Marker>
        </Map>
      </div>
      <div className="loaders">
        <Audio height="80" width="80" color="black" ariaLabel="loading" />
      </div>
      
    </>
  );
};
