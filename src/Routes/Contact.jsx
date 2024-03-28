import React from "react";
import Form from "../Components/Form";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__text">Want to know more?</h2>
      <p className="contact__text">
        Send us your questions and we will contact you
      </p>
      <Form />
    </div>
  );
};

export default Contact;
