import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <section id="about" class="about container section">
        <div class="about__content">
          <h2 class="about__title">About</h2>
          <p class="about__description">
            Hello there! I'm Dang, a <strong>Frontend / Fullstack</strong> web
            developer based near Montreal. I wake up in the morning, grab a cup
            of timmies coffee, open up my laptop and build things that live on
            the web all day, everyday.
          </p>
          <p class="about__description">
            People who know me say I'm obsessed, that's fair, I am very driven
            and love learning new things.
          </p>
          <p class="about__description">
            I recently created a YouTube channel called
            <a>Slaying The Dragon</a> where I upload videos on front-end web
            development topics.
          </p>
          <hr class="about__hr" />
          <h3 class="about__subtitle">Technologies</h3>
          <div class="about__ul-container">
            <ul class="about__ul">
              <li class="about__list">JavaScript (ES6+)</li>
              <li class="about__list">CSS</li>
              <li class="about__list">HTML</li>
            </ul>
            <ul class="about__ul">
              <li class="about__list">ReactJS</li>
              <li class="about__list">NextJS</li>
              <li class="about__list">TailwindCSS</li>
            </ul>
          </div>
        </div>
        <div class="about__img-wrapper">
          <img
            class="about__img lazy loading"
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
