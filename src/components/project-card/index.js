import React, { useEffect, useState, useRef } from "react";

import "./style.css";
import { cn as bem } from "@bem-react/classname";

const ProjectCard = ({ phone_frame, screen_image, description, active, id }) => {
  const cn = bem("Nav-wrapper");

  return (
    <>
      <div className="phone-frame">
        <img src={phone_frame} alt="Phone Frame" />
        <div className="screen-content">
          <img src={screen_image} alt="Web Project Screenshot" />
        </div>
      </div>

      {active === id && (
        <div className={cn("project-description")}>
          <p>{description}</p>
        </div>
      )}



    </>
  );
};

export default ProjectCard;
