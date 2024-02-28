import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import network_img from "../../assets/test_1.png";
import dashboard_v1 from "../../assets/test_2.png";
import { Controller, Scene } from "react-scrollmagic";



const ProjectCard = () => {
  let networkTitle = ["I", "N", "T", "R", "A", "L", "I", "N", "K"];
  let sportTitle = ["S", "P", "O", "R", "T", "S", "E", "E"];
  // useRef for networkTitle letters
  const networkTitleRef = useRef([]);
  // useRef for sportTitle letters
  const sportTitleRef = useRef([]);
  const [networkUnderlineWidth, setNetworkUnderlineWidth] = useState(0);
  const [sportUnderlineWidth, setSportUnderlineWidth] = useState(0);
  const projectTitle = "A secure and streamlined platform designed to enhance corporate communications";
  const project_Title = "An ultimate hub for fitness activities monitoring ";
  // State to handle the hover effect
  const [isNetworkTitleHovered, setNetworkTitleIsHovered] = useState(false);
  const [isSportTitleHovered, setSportTitleIsHovered] = useState(false);
  // Event handlers
  const handleMouseEnterNetwork = () => setNetworkTitleIsHovered(true);
  const handleMouseLeaveNetwork = () =>setNetworkTitleIsHovered(false);

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnterSport = () => setSportTitleIsHovered(true);
  const handleMouseLeaveSport = () =>setSportTitleIsHovered(false);

  useEffect(() => {
    let networkTotalWidth = 0;
    networkTitleRef.current.forEach((element) => {
      if (element) {
        networkTotalWidth += element.offsetWidth;
      }
    });
    setNetworkUnderlineWidth(networkTotalWidth);

    let sportTotalWidth = 0;
    sportTitleRef.current.forEach((element) => {
      if (element) {
        sportTotalWidth += element.offsetWidth;
      }
    });
    setSportUnderlineWidth(sportTotalWidth);
  }, []);








  /*need to handle the scrollY to display 
  services elements in the main page by adding visible class in jsx*/
  const handleScroll = () => {
    const specialHeight = 200;
    const path = window.location.pathname;

    if (window.scrollY >= 2000) {
      setIsVisible(true);
    }

  
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  const underlineDelay = (networkTitle.length * 0.07)+0.14;
const descriptionDelay = underlineDelay+1
// console.log(underlineDelay)
const aboutStyle = { transitionDelay: `${descriptionDelay}s` };
  // Split the text by newlines to work with individual lines
  const wrapTextIntoLines = (text,style) => {
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="line">
        {line}
      </span>
    ));
  };

  const text = `A SECURE AND STREAMLINED PLATFORM \nDESIGNED TO ENHANCE CORPORATE COMMUNICATIONS.`;

  const wrappedText = wrapTextIntoLines(text);




  return (
    <div className="parallax-container">
      <Controller>
        <Scene duration={"100%"} triggerHook={0.2} pin triggerElement={".test"}>
          <div className="test" style={{ display: "flex", width: "50%", flexDirection: "column", height: "100vh", position: "relative 0!important" }}>
            <span className="fixed-content" onMouseEnter={handleMouseEnterNetwork} onMouseLeave={handleMouseLeaveNetwork}>
              {networkTitle.map((letter, index) => {
                 const style = { transitionDelay: `${index * 0.07}s` };
                return (
                  <span key={index} className={`fixed-content-letter ${isVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
                    {letter}
                  </span>
                );
              })}
              <div className={`underline ${isVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth ,transitionDelay:`${underlineDelay}s`}} />
              <div className="project-card-title">
                {/* <p> {projectTitle.toLocaleUpperCase()}</p> */}
                <p className={`project-card-content ${isVisible ? "visible" : ""}`} > { wrappedText}</p>
              </div>
            </span>
            <span className="fixed-contentt" onMouseEnter={ handleMouseEnterSport } onMouseLeave={handleMouseLeaveSport}>
              {sportTitle.map((letter, index) => {
                return (
                  <span key={index} className={`fixed-content-letter ${isVisible ? "visible" : ""}`} ref={(el) => (sportTitleRef.current[index] = el)}>
                    {letter}
                  </span>
                );
              })}
              <div className="underline" style={{ width: sportUnderlineWidth }} />
              <div className="project-card-title">
                <p> {project_Title.toLocaleUpperCase()}</p>
              </div>
            </span>
          </div>
        </Scene>
      </Controller>

      {/* Scrollable content */}
      <div className="scroll-content">
        <div className="top-right">
          <img
            src={network_img}
            alt=""
            style={{
              transform: isNetworkTitleHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 1.5s cubic-bezier(0.62, 0.05, 0.01, 0.99)",
            }}
          ></img>
        </div>
 
        <div className="bottom-right">
          {" "}
          <img
            src={dashboard_v1}
            alt=""
            style={{
              transform: isSportTitleHovered ? "scale(1.2)" : "scale(1)",
              transition:  "transform 1.5s cubic-bezier(0.62, 0.05, 0.01, 0.99)",
            }}
          ></img>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;
