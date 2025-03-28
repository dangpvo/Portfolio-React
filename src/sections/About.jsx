import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <section id="about" className="about container section">
        <div className="about__content">
          <h2 className="about__title">About</h2>
          <p className="about__description">
            Hello there! I'm Dang, a <strong>Frontend / Fullstack</strong> web
            developer based near Montreal. I wake up in the morning, grab a cup
            of timmies coffee, open up my laptop and build things that live on
            the web all day, everyday.
          </p>
          <p className="about__description">
            People who know me say I'm obsessed, that's fair, I am very driven
            and love learning new things.
          </p>
          <p className="about__description">
            I recently created a YouTube channel called
            <a>Slaying The Dragon</a> where I upload videos on front-end web
            development topics.
          </p>
          <hr className="about__hr" />
          <h3 className="about__subtitle">Technologies</h3>
          <div className="about__ul-container">
            <ul className="about__ul">
              <li className="about__list">JavaScript (ES6+)</li>
              <li className="about__list">CSS</li>
              <li className="about__list">HTML</li>
            </ul>
            <ul className="about__ul">
              <li className="about__list">ReactJS</li>
              <li className="about__list">NextJS</li>
              <li className="about__list">TailwindCSS</li>
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
