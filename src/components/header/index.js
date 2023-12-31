import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

const Header = ({ title, icon }) => {
  const cn = bem("Header");
  return (
    <div className={cn("")}>
      <p className={cn("title")}>{title}</p>
      <img className={cn("arrow")}src={icon} alt=""></img>
    </div>
  );
};

export default Header;
