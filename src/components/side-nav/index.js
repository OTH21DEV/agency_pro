import React from "react";
import { cn as bem } from "@bem-react/classname";
import dots from "../../assets/dots.png";
// import logo_without from "../../assets/logo_without.png";
import "./style.css";

const SideNav = () => {
  const cn = bem("SideNav");
  return (
    <div className={cn("")}>
      {/* <div className={cn("logo")}>
        <img src={logo_without} alt=""></img>
      </div> */}
      <div className={cn("menu")}>
        <img src={dots} alt=""></img>
      </div>
    </div>
  );
};

export default SideNav;
