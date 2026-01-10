import React from "react";

const ProjectItem = ({
  index,
  name,
  image,
  description1,
  description2,
  url,
  paperUrl,
  tech_stack,
}) => {
  console.log(
    `index: ${index}, name: ${name}, image: ${image}, description1: ${description1}, description2: ${description2}, url: ${url}, paperUrl: ${paperUrl}`
  );

  return (
    <>
      <h3 className="work__project-title">{name}</h3>
      <div className={`work__img-wrapper work__image${index + 1}`}>
        <img
          className="lazy loading"
          src="https://fakeimg.pl/1170x780"
          data-src={image}
          alt={`Project ${name} image`}
        />
      </div>
      <div
        className={`work__project work__content${index + 1} ${
          index % 2 === 0 ? "work-align-left" : "work-align-right"
        }`}
      >
        <h3 className="work__project-subtitle">{name}</h3>
        <p className="work__project-description1">{description1}</p>
        <p className="work__project-description2">{description2}</p>
        <ul
          className={`work__tech-stack ${
            index % 2 === 0 ? "tech-align-left" : "tech-align-right"
          }`}
        >
          {tech_stack.length === 0
            ? ""
            : tech_stack.map((item, index) => (
                <li key={`techstack-${index}`} className="work__info tech-info">
                  {item}
                </li>
              ))}
        </ul>
        <a className="btn work__project-btn" href={url} target="_blank">
          Have a look
        </a>
        {paperUrl === "" ? (
          ""
        ) : (
          <a
            className="btn work__project-btn ieee-btn"
            href={paperUrl}
            target="_blank"
          >
            IEEE Paper
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectItem;
