import React from "react";
import { toast } from "react-hot-toast";
import message_icon from "/msg-icon.png";
import mail_icon from "/mail-icon.png";
import phone_icon from "/phone-icon.png";
import location_icon from "/location-icon.png";
import whiteArrowIcon from "/white-arrow.png";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c044ed0e-05bd-4fa7-a8e1-7d1fee659d82");

    const submission = async () => {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        return data;
      } else {
        console.log("Error", data);
        throw new Error(data.message);
      }
    };

    toast.promise(submission, {
      loading: "Sending...",
      success: "Form Submitted Successfully",
      error: (err) => `Submittion failed: ${err.message}`,
    });
  };

  return (
    <div className="contact center" id="contact">
      <div className="contact-col">
        <h3 className="contact-col-h3 icon-text">
          Send us a message
          <img src={message_icon} className="w-10" />
        </h3>
        <p className="contact-para  mb-5">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <p className="contact-para icon-text">
          <img src={mail_icon} className="icon" /> contact@edusphere.com
        </p>
        <p className="contact-para icon-text">
          <img src={phone_icon} className="icon" /> 1800-465-429
        </p>
        <p className="contact-para icon-text">
          <img src={location_icon} className="icon" /> 12B Palm Avenue, Kolkata
          <br /> Kol-700091, India
        </p>
      </div>
      <div className="contact-col">
        <form className="form" onSubmit={onSubmit}>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input-area"
            required
          />
          <label className="label">Phone Number</label>
          <input
            type="tel"
            name="number"
            placeholder="Enter your contact number"
            className="input-area"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input-area"
            required
          />
          <label className="label">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="6"
            placeholder="Enter your message"
            className="input-area"
          />
          <button className="btn dark py-4 px-7 text-lg">
            Submit Now <img src={whiteArrowIcon} className="arrow-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
