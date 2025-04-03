import React from "react";
import "../styles/featured.css";
import { projects } from "../assets/assets";

const Featured = () => {
  const featuredProject = projects[0];

  return (
    <>
      <section id="featured" className="featured container section">
        <h3 className="featured__subtitle">Featured project</h3>
        <div className="featured__wrapper">
          <h2 className="featured__title">{featuredProject.name}</h2>
          <a
            aria-label="link featured project"
            href={featuredProject.url}
            target="_blank"
            className="featured__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="featured__description">{featuredProject.description}</p>
        <div className="featured__info-container">
          <div>
            <h3 className="featured__label">Features</h3>
            <ul className="featured__tech-stack">
              {featuredProject.features.length === 0
                ? ""
                : featuredProject.features.map((item, index) => (
                    <li key={`feature-${index}`} className="featured__info">
                      {item}
                    </li>
                  ))}
            </ul>
          </div>
          <div>
            <h3 className="featured__label">Tech stack</h3>
            <ul className="featured__tech-stack">
              {featuredProject.tech_stack.length === 0
                ? ""
                : featuredProject.tech_stack.map((item, index) => (
                    <li key={`techstack-${index}`} className="featured__info">
                      {item}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
        <div className="featured__img-container">
          {featuredProject.images.length === 0
            ? ""
            : featuredProject.images.map((item, index) => (
                <div
                  className="featured__img-wrapper"
                  key={`feat-img-${index}`}
                >
                  <img
                    className="lazy loading"
                    src="https://fakeimg.pl/1170x780"
                    data-src={item}
                    alt={`{Project ${featuredProject.name} image ${index + 1}`}
                  />
                </div>
              ))}
        </div>
      </section>
    </>
  );
};

export default Featured;
