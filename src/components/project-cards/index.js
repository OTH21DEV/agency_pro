import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../project-card";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

import phone_frame from "../../assets/phone_frame.png";
import screen_image from "../../assets/ecran_mobile.png";
import dashboard_screen from "../../assets/dasboard_screen.png";
import rest_screen from "../../assets/rest_screen.png";
import bank_screen from "../../assets/bank_screen.png";
import immo_screen from "../../assets/immo_screen.png";

const ProjectCards = () => {
  const cn = bem("Slider");

  const projects = [
    {
      id:0,
      description: [" UI/UX Design , Responsive Web Design , Graphic Design"],
      backgroundImage: bank_screen,
    },
    {
      id:1,
      description: [" UI/UX Design , Responsive Web Design , Graphic Design"],
      backgroundImage: dashboard_screen,
    },
    {
      id:2,
      description: [" UI/UX Design , Responsive Web Design , Graphic Design"],
      backgroundImage: rest_screen,
    },
    {
      id:3,
      description: [" Corporate Network App : a secure and streamlined platform designed to enhance corporate communications. Built with React, Node.js, Express, and MySQL, our app empowers teams to manage and discuss internal publications with ease. Experience efficient content management and real-time collaboration in one intuitive interface."],
      backgroundImage: screen_image,
    },
    {
      id:4,
      description: [" UI/UX Design , Responsive Web Design , Graphic Design"],
      backgroundImage: immo_screen,
    },
    {
      id:5,
      description:[" UI/UX Design , Responsive Web Design , Graphic Design"],
      backgroundImage: dashboard_screen,
    },

  ];




  const [active, setActive] = useState(3);

  const handlePrevClick = () => {
    setActive(prevActive => (prevActive - 1 + projects.length) % projects.length);
  };
  
  const handleNextClick = () => {
    setActive(prevActive => (prevActive + 1) % projects.length);
  };

  useEffect(() => {
    let phoneFrames = document.querySelectorAll(".phone-frame");
    console.log(phoneFrames[active])

    const load = () => {
      phoneFrames[active].style.transform = `none`;
      phoneFrames[active].style.zIndex = 1;
      phoneFrames[active].style.filter = "none";
      phoneFrames[active].style.opacity = 1;

      let stt = 0;
      for (let i = active + 1; i < phoneFrames.length; i++) {
        stt++;
        // applyStylesToFrame(phoneFrames[i], 120 * stt, -stt, 1 - 0.2 * stt);
        phoneFrames[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        phoneFrames[i].style.zIndex = -stt;
        phoneFrames[i].style.filter = "blur(2px)";
        phoneFrames[i].style.opacity = stt > 2 ? 0 : 0.6;
      }

      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        // applyStylesToFrame(phoneFrames[i][i], -120 * stt, -stt, 1 - 0.2 * stt);
        phoneFrames[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        phoneFrames[i].style.zIndex = -stt;
        phoneFrames[i].style.filter = "blur(2px)";
        phoneFrames[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    
    }
    load();


  }, [active]);

  return (
    <div className={cn("")}>
      {/* <ProjectCard></ProjectCard> */}

      {projects.map((project, index) => (
        
        <ProjectCard id={project.id}active={active}key={index} screen_image={project.backgroundImage} phone_frame={phone_frame} description={project.description}/>
      
        
        
      ))}
      <button id="prev" onClick={handlePrevClick}>
        `prev`{" "}
      </button>
      <button id="next" onClick={handleNextClick}>
        `next`{" "}
      </button>

    </div>
  );
};

export default ProjectCards;
