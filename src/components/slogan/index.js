import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
const Slogan = () => {
  const cn = bem("Slogan");
  return (
    <div className={cn("wrapper")}>
      {/* <span>Elevate your digital presence with our commitment to precision in every aspect of web design.</span> */}
      <ul className={cn("")}>

      <li>Perfect Pixels</li>
      <li>Intuitive Interactions</li>
      <li>Unmatched Excellence</li>
      </ul>
    </div>
  );
};

export default Slogan;
