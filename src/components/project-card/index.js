import React, { useEffect, useState, useRef } from "react";

import "./style.css";
import { cn as bem } from "@bem-react/classname";
// import network_img from "../../assets/network.jpg"
// import dashboard_v1 from "../../assets/dashboard_v1.jpg"

import network_img from "../../assets/test_1.png";
import dashboard_v1 from "../../assets/test_2.png";

// import network_img from "../../assets/network_img_tel.jpg"
// import network_img from "../../assets/network_img_v3.jpg"
// import network_img from "../../assets/network_img_v4.jpg"
import { Controller, Scene } from "react-scrollmagic";

// const ProjectCard = ({ phone_frame, screen_image, description, active, id }) => {
//   const cn = bem("Nav-wrapper");
//   const [showDescription, setShowDescription] = useState(false);
//   const isActive = active === id;

//   useEffect(() => {

//     if (isActive) {
//       setShowDescription(true);
//     } else {
//       setShowDescription(false);
//     }
//   }, [isActive]);

//   const renderDescription = (desc) => {
//     const splitIndex = desc.indexOf(":");
//     const descriptionClassName = `description-content ${showDescription ? "animated" : ""}`;
//     // const descriptionClassName = `${showDescription ? "animated" : "description-content"}`;
//     if (splitIndex !== -1) {
//       const title = desc.substring(0, splitIndex);
//       const detail = desc.substring(splitIndex + 1);

//       return (
//         <div className={descriptionClassName}>
//           <h3 className="project-title">{title}</h3>
//           <p>{detail.trim()}</p>
//         </div>
//       );
//     }

//     return <div className={descriptionClassName}>{desc}</div>;
//   };

//   return (
//     <>
//       <div className="phone-frame">
//         <img src={phone_frame} alt="Phone Frame" />
//         <div className="screen-content">
//           <img src={screen_image} alt="Web Project Screenshot" />
//         </div>
//       </div>

//       {description.map((desc, index) => {
//         return (
//           <div key={index} className={`${cn(active !== id ? "hidden" : "project-description")}`}>
//             {renderDescription(desc)}
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default ProjectCard;

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

  return (
    <div className="parallax-container">
      <Controller>
        <Scene duration={"100%"} triggerHook={0.2} pin triggerElement={".test"}>
          <div className="test" style={{ display: "flex", width: "50%", flexDirection: "column", height: "100vh", position: "relative 0!important" }}>
            <span className="fixed-content" onMouseEnter={handleMouseEnterNetwork} onMouseLeave={handleMouseLeaveNetwork}>
              {networkTitle.map((letter, index) => {
                return (
                  <span key={index} className="fixed-content-letter" ref={(el) => (networkTitleRef.current[index] = el)}>
                    {letter}
                  </span>
                );
              })}
              <div className="underline" style={{ width: networkUnderlineWidth }} />
              <div className="project-card-title">
                <p> {projectTitle.toLocaleUpperCase()}</p>
              </div>
            </span>
            <span className="fixed-contentt" onMouseEnter={ handleMouseEnterSport } onMouseLeave={handleMouseLeaveSport}>
              {sportTitle.map((letter, index) => {
                return (
                  <span key={index} className="fixed-content-letter" ref={(el) => (sportTitleRef.current[index] = el)}>
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
