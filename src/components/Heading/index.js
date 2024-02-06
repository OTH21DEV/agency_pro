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
  let agency = ["A", "G", "E", "N", "C", "Y"];
  let pro = ["P", "R", "O"];

  const baseDelayPro = accuracy.length * 0.07;
  const style = { transitionDelay: `${baseDelayPro + 0.07}s` };
  // return (
  //     <div className="Heading">
  //       <h1 className="Heading-title">
  //          {web.map((lettre, key) => {
  //        const style = { transitionDelay: `${key * 0.07}s` };
  //        return (
  //          <span key={key} className="Heading-title" style={style}>
  //            {lettre}
  //          </span>
  //        );
  //      })}{" "}
  //         <span className="Heading-accuracy-pro">
  //               {accuracy.map((lettre, key) => {
  //       const baseDelay = web.length * 0.07;
  //       const style = { transitionDelay: `${baseDelay + key * 0.07}s` };
  //       return (
  //         <span key={key} className="Heading-title" style={style}>
  //           {lettre}
  //         </span>
  //       );
  //     })}
  //           <span className="Heading-pro">PRO</span>
  //         </span>
  //         <div className="agency-container">
  //           <span>agency</span>
  //           <span className="Heading-text">{text}</span>
  //         </div>
  //       </h1>

  //     </div>
  //   );

  return (
    <div className="Heading">
      <div style={{ display: "flex" }}>
        {web.map((lettre, key) => {
          const style = { transitionDelay: `${key * 0.07}s` };
          return (
            <span key={key} className="Heading-title" style={style}>
              {lettre}
            </span>
          );
        })}{" "}
        <span style={{ margin: "0 20px" }}></span>
        <div style={{ display: "flex", alignItems: "center" }}>
          {accuracy.map((lettre, key) => {
            const baseDelay = web.length * 0.07;
            const style = { transitionDelay: `${baseDelay + key * 0.07}s` };
            return (
              <span key={key} className="Heading-title" style={style}>
                {lettre}
              </span>
            );
          })}
          <span className="Heading-pro" style={style}>
            PRO
          </span>
        </div>
      </div>
      <div className="Heading-test">
        {agency.map((lettre, key) => {
          const baseDelayWebAndAccuracy = web.length * 0.07;
          const style = { transitionDelay: `${baseDelayWebAndAccuracy + key * 0.07}s` };
          return (
            <div className="agency-container">
              <span key={key} className="Heading-title" style={style}>
                {lettre}
              </span>
              {/* <span className="Heading-text">{text}</span> */}
            </div>
          );
        })}
        {/* <div className="Heading-pro">
            {pro.map((lettre, key) => {
        const baseDelayWebAndAccuracy = (agency.length ) * 0.07;
        const style = { transitionDelay: `${baseDelayWebAndAccuracy + key * 0.07}s` };
        return (
  
          <div className="agency-container">
            <span key={key} className="Heading-title" style={style}>
              {lettre}
            </span>
           
          </div>
        );
      })}
     </div> */}

        <span className="Heading-text">{text}</span>
      </div>
    </div>
  );
};
export default Heading;
