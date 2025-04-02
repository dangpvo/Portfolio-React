import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <section id="about" className="about container section">
        <div className="about__content">
          <h2 className="about__title">About</h2>
          <p class="about__description">
            Hello! I'm Dang, a <strong>Frontend / Fullstack</strong> web
            developer based in Germany. Every day, I immerse myself in building
            scalable and efficient web solutions, driven by a passion for clean,
            intuitive design.
          </p>
          <p class="about__description">
            I am deeply committed to continuous learning and improving my
            skills, always striving to tackle new challenges and create
            meaningful, impactful projects.
          </p>
          <p class="about__description">
            I am open to collaborating on meaningful projects involving React,
            JavaScript, and .NET development.
          </p>
          <hr className="about__hr" />
          <h3 class="about__subtitle">Connect with me</h3>
          <div class="about__ul-container">
            <ul class="about__ul">
              <li class="about__list">
                <a href="https://www.linkedin.com/in/dangvo95/" target="_blank">
                  <i class="bx bxl-linkedin-square"></i>LinkedIn
                </a>
              </li>
            </ul>
            <ul class="about__ul">
              <li class="about__list">
                <a href="https://github.com/dangpvo" target="_blank">
                  <i class="bx bxl-github"></i>GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__img-wrapper">
          <img
            className="about__img lazy loading"
            src="https://fakeimg.pl/1748x2025"
            data-src="/avatarAbout_1.jpg"
            alt="Profile picture"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
