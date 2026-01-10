import React from "react";
import "../styles/hero.css";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <>
      <section className="hero container">
        <img
          className="hero__img"
          src={assets.logo_home}
          alt="Profile picture"
        />
        <h2 className="hero__subtitle">
          Hi, I'm <strong>Dang</strong> 👋
        </h2>
        <h1 className="hero__title">SOFTWARE ENGINEER.</h1>
        <p className="hero__description">
          A versatile <strong>Software Engineer</strong> working across multiple
          platforms, with a strong focus on{" "}
          <strong>Frontend / Fullstack</strong> Web Development. Passionate
          about building scalable applications with clean architecture and
          intuitive UI/UX.
        </p>
        <a className="hero__btn btn" href="#contact">
          Reach Out
        </a>
      </section>
    </>
  );
};

export default Hero;
