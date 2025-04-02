import React from "react";
import "../styles/hero.css";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      <section className="hero container">
        <img
          className="hero__img"
          src={assets.avatar_home}
          alt="Profile picture"
        />
        <h2 className="hero__subtitle">Hi, I'm Dang 👋</h2>
        <h1 className="hero__title">SOFTWARE ENGINEER.</h1>
        <p className="hero__description">
          A passionate <strong>Frontend / Fullstack</strong> Developer and UI/UX
          enthusiast specialized in building scalable applications with clean
          code and intuitive design.
        </p>
        <a className="hero__btn btn" href="#contact">
          Reach Out
        </a>
      </section>
    </div>
  );
};

export default Hero;
