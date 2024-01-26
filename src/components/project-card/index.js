import React, { useEffect, useState, useRef } from "react";

import "./style.css";
import { cn as bem } from "@bem-react/classname";

const ProjectCard = ({ phone_frame, screen_image, description, active, id }) => {
  const cn = bem("Nav-wrapper");
  const [showDescription, setShowDescription] = useState(false);
  const isActive = active === id;

  useEffect(() => {
   
    if (isActive) {
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  }, [isActive]);

  
  const renderDescription = (desc) => {
    const splitIndex = desc.indexOf(":");
    const descriptionClassName = `description-content ${showDescription ? "animated" : ""}`;
    // const descriptionClassName = `${showDescription ? "animated" : "description-content"}`;
    if (splitIndex !== -1) {
      const title = desc.substring(0, splitIndex);
      const detail = desc.substring(splitIndex + 1);

      return (
        <div className={descriptionClassName}>
          <h3 className="project-title">{title}</h3>
          <p>{detail.trim()}</p>
        </div>
      );
    }

    return <div className={descriptionClassName}>{desc}</div>;
  };

  return (
    <>
      <div className="phone-frame">
        <img src={phone_frame} alt="Phone Frame" />
        <div className="screen-content">
          <img src={screen_image} alt="Web Project Screenshot" />
        </div>
      </div>

      {description.map((desc, index) => {
        return (
          <div key={index} className={`${cn(active !== id ? "hidden" : "project-description")}`}>
            {renderDescription(desc)}
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
