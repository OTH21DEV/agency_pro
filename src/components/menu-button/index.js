import React, { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import dots from "../../assets/dots.png";
import arrow from "../../assets/arrow.png"
// import logo_without from "../../assets/logo_without.png";
import "./style.css";

const MenuButton = () => {
  const cn = bem("Menu");
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
  

    
    <div className={cn("arrow")} onClick={handleClick}>
      <img src={arrow} alt=""></img>
    </div>
  
  );
};

export default MenuButton