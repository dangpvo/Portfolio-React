import React from "react";
import "../styles/work.css";
import { projects } from "../assets/assets";
import ProjectItem from "../components/ProjectItem";

const Work = () => {
  return (
    <>
      <section
        id="work"
        className={`work container section ${
          projects.length === 0 ? "hide" : ""
        }`}
      >
        <h2 className="work__title">Projects</h2>
        <p className="work__description">
          Here are some projects that demonstrate my expertise in front-end and
          full-stack development, along with problem-solving, and research
          skills, highlighting my ability to design and apply solutions for
          real-world challenges.
        </p>
        <div className="work__container">
          {projects.map((item, index) => (
            <ProjectItem
              key={`project-${index + 1}`}
              index={index}
              name={item.name}
              image={item.images[0]}
              description1={item.description_1}
              description2={item.description_2}
              url={item.url}
              paperUrl={item.paper}
            ></ProjectItem>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
