import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

const Gear = ({ icon }) => {
  const cn = bem("Gear");
  return (
    <div className={cn("")}>
      <img className={cn("icon")}src={icon} alt=""></img>
    </div>
  );
};

export default Gear;
