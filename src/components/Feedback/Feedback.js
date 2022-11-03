import React from "react";
import "./Feedback.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Feedback() {

  const textarea = document.querySelector("#feedback");
  textarea?.addEventListener("input", autoResize, false);

  function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_usn28o5", "template_4xzn6xb", e.target, "vAlsH7iijTmwNfLaS")
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
    <div className="main-feedback">
      <h1 className="text-1">Share your valuable feedback</h1>
      <form className="feedback_form" onSubmit={sendEmail}>
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
          type="text"
          name="designation"
          id="designation"
          placeholder="Designation"
          required
        />
        <input
          className="input-box"
          type="url"
          name="linkedin"
          id="linkedin"
          placeholder="Share your Linkedin ID.."
          required
        />
        <textarea
          name="feedback"
          id="feedback"
          placeholder="Share your experience here ..."
          required
        ></textarea>
        <div className="fb_buttons">
          <input className="button-contact" type="submit" value="SEND" />
          <input className="button-contact" type="reset" value="RESET" />
        </div>
      </form>
    </div>
  );
}

export default Feedback;
