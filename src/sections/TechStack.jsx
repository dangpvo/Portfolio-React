import React from "react";
import "../styles/techstack.css";
import { techstack } from "../assets/assets";

const TechStack = () => {
  return (
    <>
      <section
        id="techstack"
        className={`techstack container section ${
          techstack.length === 0 ? "hide" : ""
        }`}
      >
        <h2 className="techstack__title">My stack</h2>
        {techstack.map((item, index) => (
          <div
            className="techstack__container"
            key={`techstack-domain-${index}`}
          >
            <h3 className="techstack__subtitle">{item.name}</h3>
            <div className="techstack__content">
              {item.stack.length === 0
                ? ""
                : item.stack.map((stackItem, index) => (
                    <div
                      className="techstack__content-item"
                      key={`techstack-item-${index}`}
                    >
                      <div className="techstack__content-img-wrapper">
                        <img
                          className="techstack__content-img"
                          src={stackItem.url}
                          alt={`${stackItem.url} image`}
                        />
                      </div>
                      <p className="techstack__content-text">
                        {stackItem.name}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TechStack;
