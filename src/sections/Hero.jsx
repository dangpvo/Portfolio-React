import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div>
      <section class="hero container">
        <img class="hero__img" src="/avatarHome_1.jpg" alt="Profile picture" />
        <h2 class="hero__subtitle">Hi, I'm Dang 👋</h2>
        <h1 class="hero__title">SOFTWARE ENGINEER.</h1>
        <p class="hero__description">
          A passionate <strong>Frontend / Fullstack</strong> web developer and
          <strong>UI/UX</strong>
          enthusiast specialized in building stunning interactive
          websites/applications.
        </p>
        <a class="hero__btn btn" href="#contact">
          Reach Out
        </a>
      </section>
    </div>
  );
};

export default Hero;
