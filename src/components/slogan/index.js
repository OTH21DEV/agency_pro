import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
const Slogan = () => {
  const cn = bem("Slogan");


  let accuracy = ["A", "C", "C", "U", "R", "A", "C", "Y"];


  const baseDelayPro = accuracy.length * 0.07;
  const style = { transitionDelay: `${baseDelayPro + 0.07}s` };


  return (
    <div className={cn("wrapper")}>
      {/* <span>Elevate your digital presence with our commitment to precision in every aspect of web design.</span> */}
      <ul className={cn("")} >

      <li>Perfect Pixels</li>
      <li>Intuitive Interactions</li>
      <li>Unmatched Excellence</li>
      </ul>
    </div>
  );
};

export default Slogan;
