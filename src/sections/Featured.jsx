import React from "react";
import "../styles/featured.css";

const Featured = () => {
  return (
    <div>
      <section id="featured" className="featured container section">
        <h3 className="featured__subtitle">Featured project</h3>
        <div className="featured__wrapper">
          <h2 className="featured__title">Project</h2>
          <a
            aria-label="link featured project"
            href="#"
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
        <p className="featured__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          beatae molestias accusamus quo, eaque dolores! Sequi dignissimos porro
          assumenda illum nihil non at incidunt fugiat? Officia perferendis
          animi rerum dolores.
        </p>
        <div className="featured__info-container">
          <div>
            <h3 className="featured__label">Tech stack</h3>
            <ul className="featured__tech-stack">
              <li className="featured__info">TailwindCSS</li>
              <li className="featured__info">ReactJS</li>
              <li className="featured__info">React-hook-form</li>
              <li className="featured__info">NextJS</li>
              <li className="featured__info">Axios</li>
              <li className="featured__info">Supabase</li>
              <li className="featured__info">Stribe</li>
            </ul>
          </div>
          <div>
            <h3 className="featured__label">Project type</h3>
            <p className="featured__info">Fullstack</p>
          </div>
          <div>
            <h3 className="featured__label">Timeline</h3>
            <p className="featured__info">December 2024 - present</p>
          </div>
        </div>
        <div className="featured__img-container">
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img1.jpeg"
              alt="Image 1"
            />
          </div>
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img2.jpeg"
              alt="Image 2"
            />
          </div>
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img3.jpeg"
              alt="Image 3"
            />
          </div>
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img4.jpeg"
              alt="Image 4"
            />
          </div>
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img5.jpeg"
              alt="Image 5"
            />
          </div>
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img6.jpeg"
              alt="Image 6"
            />
          </div>
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img7.jpeg"
              alt="Image 7"
            />
          </div>
          <div className="featured__img-wrapper">
            <img
              className="lazy loading"
              src="https://fakeimg.pl/1170x780"
              data-src="/img8.jpeg"
              alt="Image 8"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
