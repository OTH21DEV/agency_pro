import React, { useRef, useEffect } from "react";

import "./style.css";
import { cn as bem } from "@bem-react/classname";

const Heading = ({ title, text, icon }) => {
  const cn = bem("Heading");

  // return (
  //     <div className="Heading">
  //       <h1 className="Heading-title">
  //         Web{" "}
  //         <span className="Heading-accuracy-pro">
  //           <span>accuracy</span>
  //           <span className="Heading-pro">PRO</span>
  //         </span>
  //         <div className="agency-container">
  //           <span>agency</span>
  //           <span className="Heading-text">{text}</span>
  //         </div>
  //       </h1>

  //     </div>
  //   );
  // };

  let web = ["W", "E", "B"];
  let accuracy = ["A", "C", "C", "U", "R", "A", "C", "Y"];

  return (
    <span className="Heading">
      {web.map((lettre, key) => {
        const style = { transitionDelay: `${key * 0.07}s` };
        return (
          <span key={key} className="Heading-title" style={style}>
            {lettre}
          </span>
        );
      })}{" "}
      <span style={{ margin: "0 20px" }}></span>
      {accuracy.map((lettre, key) => {
        const baseDelay = web.length * 0.07;
        const style = { transitionDelay: `${baseDelay + key * 0.07}s` };
        return (
          <span key={key} className="Heading-title" style={style}>
            {lettre}
          </span>
        );
      })}
    </span>
  );
};
export default Heading;
