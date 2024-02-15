import React, { useEffect, useState, useRef } from "react";
import Rellax from "rellax";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

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

// const ProjectCard = () => {

//   const topRightRef = useRef(null);
//   const bottomLeftRef = useRef(null);
//   const bottomRightRef = useRef(null);

//   useEffect(() => {
//     // Initialize Rellax with the refs to your elements
//     const rellaxTopRight = new Rellax(topRightRef.current, {
//       speed: -2,
//       center: false,
//       wrapper: null,
//       round: true,
//       vertical: true,
//       horizontal: false
//     });

//     const rellaxBottomLeft = new Rellax(bottomLeftRef.current, {
//       speed: -2,
//       center: false,
//       wrapper: null,
//       round: true,
//       vertical: true,
//       horizontal: false
//     });

//     const rellaxBottomRight = new Rellax(bottomRightRef.current, {
//       speed: -2,
//       center: false,
//       wrapper: null,
//       round: true,
//       vertical: true,
//       horizontal: false
//     });

//     // Clean up function to destroy Rellax instances when the component unmounts
//     return () => {
//       rellaxTopRight.destroy();
//       rellaxBottomLeft.destroy();
//       rellaxBottomRight.destroy();
//     };
//   }, []);
//   return (
//     <div className="parallax-container">
//       <div className="fixed-content">Fixed Content</div>
//       <div className="scroll-content">
//         {/* Attach the ref to element */}
//         <div ref={topRightRef} className="top-right">Top Right Content</div>
//         <div ref={bottomLeftRef} className="bottom-left">Bottom Left Content</div>
//         <div ref={bottomRightRef} className="bottom-right">Bottom Right Content</div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard

const ProjectCard = () => {
return (
    <div className="parallax-container">
      {/* The Controller wraps around Scenes which contains elements we want to animate */}
      <Controller>
        <Scene duration={"600"} triggerHook={0} pin pushF>
          {/* Fixed Content always in view */}
          {(progress) => (
            <div className="fixed-content">Fixed Content</div>
          )}
        </Scene>
      </Controller>
      {/* Scrollable content */}
      <div className="scroll-content">
        <div className="top-right">Top Right Content</div>
        {/* The bottom-left was commented out before so left commented */}
        {/* <div className="bottom-left">Bottom Left Content</div> */}
        <div className="bottom-right">Bottom Right Content</div>
      </div>
    </div>
  );
};

export default ProjectCard;
