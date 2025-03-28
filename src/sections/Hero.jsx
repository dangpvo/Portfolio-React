import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero container">
        <img
          className="hero__img"
          src="/avatarHome_1.jpg"
          alt="Profile picture"
        />
        <h2 className="hero__subtitle">Hi, I'm Dang 👋</h2>
        <h1 className="hero__title">SOFTWARE ENGINEER.</h1>
        <p className="hero__description">
          A passionate <strong>Frontend / Fullstack</strong> web developer and
          <strong>UI/UX</strong>
          enthusiast specialized in building stunning interactive
          websites/applications.
        </p>
        <a className="hero__btn btn" href="#contact">
          Reach Out
        </a>
      </section>
    </div>
  );
};

export default Hero;
