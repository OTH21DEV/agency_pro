import React, { useRef, useEffect } from "react";

import "./style.css";
import { cn as bem } from "@bem-react/classname";

// const Heading = ({ title, text, icon }) => {
//   const cn = bem("Heading");
//   return (
//     <div className={cn("")}>
//       <h1 className={cn("title")}>
//         {title}
//         <span className={cn("text")}>{text}</span>
//       </h1>
//       <p>{"PRO"}</p>
//     </div>
//   );
// };

const Heading = ({ title, text, icon }) => {
  const cn = bem("Heading");

//   return (
// {/* <div className="Heading">
//     <h1 className="Heading-title">
//       Web{" "}
//       <span className="Heading-accuracy-pro">
//         <span>accuracy</span>
//         <span className="Heading-pro">PRO</span>
//       </span>{" "}
//       agency
//       <span className="Heading-text">{text}</span>
//     </h1>
//   </div> */}
  
//   );
return (
    <div className="Heading">
      <h1 className="Heading-title">
        Web{" "}
        <span className="Heading-accuracy-pro">
          <span>accuracy</span>
          <span className="Heading-pro">PRO</span>
        </span>
        <div className="agency-container">
          <span>agency</span>
          <span className="Heading-text">{text}</span>
        </div>
      </h1>
    </div>
  );
};

export default Heading;
