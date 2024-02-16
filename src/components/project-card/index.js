import React, { useEffect, useState, useRef } from "react";

import "./style.css";
import { cn as bem } from "@bem-react/classname";
import network_img from "../../assets/network.jpg"
import dashboard_v1 from "../../assets/dashboard_v1.jpg"
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
  return (
    <div className="parallax-container">
      <Controller>
        <Scene duration={"100%"} triggerHook={0.2} pin triggerElement={".test"}>
          <div className="test" style={{ display: "flex", width: "50%", flexDirection: "column", height: "100vh", position: "relative 0!important" }}>
            <div className="fixed-content">Fixed Content1</div>
            <div className="fixed-contentt">Fixed Content2</div>
          </div>
        </Scene>
      </Controller>

      {/* Scrollable content */}
      <div className="scroll-content">
        <div className="top-right">
          <img src={network_img} alt=""></img>
        </div>
        {/* The bottom-left was commented out before so left commented */}
        <div className="bottom-right"> <img src={dashboard_v1} alt=""></img></div>
        {/* <div className="bottom-left">Bottom Left Content</div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
