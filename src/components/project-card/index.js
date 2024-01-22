import React, { useEffect, useState, useRef } from "react";
import phone_frame from "../../assets/phone_frame.png"

import "./style.css";
import { cn as bem } from "@bem-react/classname";



import screen from "../../assets/ecran_mobile.png"
const ProjectCard = () => {
    const cn = bem("Nav-wrapper");

    return (
      <div className="phone-frame">
        <img src={phone_frame} alt="Phone Frame" />
        <div className="screen-content">
          <img src={screen} alt="Web Project Screenshot" />
        </div>
      </div>
    );
  }

export default ProjectCard