import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact container section">
        <h2 className="contact__title">Get In Contact</h2>
        <p className="contact__description">
          Whether you are starting a project, have business inquiries, or simply
          want to get in touch, feel free to reach out. My inbox is always open,
          and I'll respond as soon as possible.
        </p>
        <a
          className="contact__btn btn"
          href="mailto:dang.phuc.vo@outlook.com"
          target="_blank"
        >
          Reach out
        </a>
      </section>
    </>
  );
};

export default Contact;
