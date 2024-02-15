import React, { useEffect, useState, useRef } from "react";
import arrow_down from "../../assets/arrow_down.png";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

// const ServiceCard = ({ title, description, bulletPoints, isOpen, index, onClick, number, backgroundImage }) => {
//   const cn = bem("Plan");

//   console.log(typeof(backgroundImage));
//   const renderDescription = (desc) => {
//     return desc.split(",").map((phrase, idx) => (
//       <React.Fragment key={idx}>
//         {phrase.trim()}
//         <br />
//       </React.Fragment>
//     ));
//   };
//   const [isHovered, setIsHovered] = useState(false);
//   console.log(isHovered)
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const cardStyle = {
//     backgroundImage: isHovered ? `linear-gradient(rgba(34, 40, 49, 0.4), rgba(34, 40, 49, 1)),url(${backgroundImage})` : "none",
//     backgroundSize: isHovered ? 'cover' : '',
//     backgroundPosition: isHovered ? 'center' : '',
//     backgroundRepeat: isHovered ? 'no-repeat' : '',
//     transition: 'opacity 0.5s ease, background-image 0.5s ease',
//   };
//   console.log(cardStyle);
//   return (
//     <div className={cn(isOpen ? "services-active" : "services")} style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       {/* <div class="background-image"></div> */}
//       <div className={cn("wavy")}>
//         <span>{title}</span>
//       </div>
//       <span className={cn("number")}>{number}</span>

//       <div style={{display:"flex", justifyContent:"space-between"}}>
//       {isOpen ? (
//         <p className={cn(isOpen ? "text-active" : "text")}>
//           {bulletPoints.map((point, index) => (
//             <React.Fragment key={index}>
//               {/* Split the point at the colon */}
//               {point.split(/:(.+)/).map((chunk, chunkIndex) =>
//                 // Apply bold styling to the first part, before the colon
//                 chunkIndex === 0 ? <strong>{chunk}:</strong> : chunk
//               )}
//               <br />
//             </React.Fragment>
//           ))}
//         </p>
//       ) : (
//         <p className={cn("text")}>{renderDescription(description)}</p>

//       )}

//       <div onClick={onClick} className={cn("arrow")}>
//         <img src={arrow_down} alt=""></img>
//       </div>

//         </div>

//     </div>
//     // </div>
//   );
// };

// export default ServiceCard;

// import React from 'react'

function ServiceCard({ number, title, style, description, bulletPoints, isOpen, index, onClick }) {
  const cn = bem("Plan");

  // const renderDescription = (desc) => {
  //   return desc.split(",").map((phrase, idx) => (
  //     <React.Fragment key={idx}>
  //       {phrase.trim()}
  //       <br />
  //     </React.Fragment>
  //   ));
  // };

  return (
    // <div className="service-card" style={{ borderTop: index === 0 ? "2px solid grey" : undefined, marginTop: index === 0 ? "85px" : undefined }}>
    //   <div className="service-card-title">
    //     <h2>{number}</h2>

    //   {isOpen ? (
    //       <p className={`service-card-content ${isOpen ? "open" : "service-card-content"}`}>
    //         {bulletPoints.map((point, index) => (
    //           <React.Fragment key={index}>
    //             {point.split(/:(.+)/).map((chunk, chunkIndex) => (chunkIndex === 0 ? <strong>{chunk}:</strong> : chunk))}
    //             <br />
    //           </React.Fragment>
    //         ))}
    //       </p>
    //     ) : (
    //       <p className="service-test">{title}</p>
    //     )} 



    //   </div>
    //   <div>
    //     <div className="toggle-button" onClick={onClick}>
    //       <span className={`bar horizontal ${isOpen ? "open" : ""}`}></span>
    //       <span className={`bar vertical ${isOpen ? "open" : ""}`}></span>
    //     </div>
    //   </div>
    // </div>









<div className="service-card" style={{ borderTop: index === 0 ? "2px solid grey" : undefined, marginTop: index === 0 ? "85px" : undefined }}>
    <div className="service-card-header" onClick={onClick}>
      <div className="service-card-header-wrapper">
      <span>{number}</span>
      <p>{title}</p> 
      </div>
      <div className="toggle-button">
        <span className={`bar horizontal ${isOpen ? "open" : ""}`}></span>
        <span className={`bar vertical ${isOpen ? "open" : ""}`}></span>
      </div>
    </div>
    <div className={`service-card-content ${isOpen ? "open" : "closed"}`}>
      {bulletPoints.map((point, index) => (
        <React.Fragment key={index}>
          {point.split(/:(.+)/).map((chunk, chunkIndex) => (
            <span key={chunkIndex}>{chunkIndex === 0 ? <strong>{chunk}:</strong> : chunk}</span>
          ))}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>



  );



}

export default ServiceCard;
