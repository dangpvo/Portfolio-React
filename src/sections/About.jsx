import React from "react";
import "../styles/about.css";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <section id="about" className="about container section">
        <div className="about__content">
          <h2 className="about__title">About</h2>
          <p className="about__description">
            Hello! I'm Dang, a <strong>Frontend / Fullstack</strong> web
            developer based in Germany. Every day, I immerse myself in building
            scalable and efficient web solutions, driven by a passion for clean,
            intuitive design.
          </p>
          <p className="about__description">
            I am deeply committed to continuous learning and improving my
            skills, always striving to tackle new challenges and create
            meaningful, impactful projects.
          </p>
          <p className="about__description">
            I am open to collaborating on meaningful projects involving React,
            JavaScript, and .NET development.
          </p>
          <hr className="about__hr" />
          <h3 className="about__subtitle">Connect with me</h3>
          <div className="about__ul-container">
            <ul className="about__ul">
              <li className="about__list">
                <a href="https://www.linkedin.com/in/dangvo95/" target="_blank">
                  <i className="bx bxl-linkedin-square"></i>LinkedIn
                </a>
              </li>
            </ul>
            <ul className="about__ul">
              <li className="about__list">
                <a href="https://github.com/dangpvo" target="_blank">
                  <i className="bx bxl-github"></i>GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__img-wrapper">
          <img
            className="about__img lazy loading"
            src="https://fakeimg.pl/1748x2025"
            data-src={assets.avatar_about}
            alt="Profile picture"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
