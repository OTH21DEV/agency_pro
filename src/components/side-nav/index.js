import React, { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import dots from "../../assets/dots.png";
// import logo_without from "../../assets/logo_without.png";
import "./style.css";

const SideNav = () => {
  const cn = bem("SideNav");
  let navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
    document.body.classList.add("fade-out");

    setTimeout(() => {
      navigate("/plan");
    }, 500);
  }

  return (
    <div className={cn("")}>
      <div className={cn("menu")} onClick={handleClick}>
        <img src={dots} alt=""></img>
      </div>
    </div>
  );
};

export default SideNav;
