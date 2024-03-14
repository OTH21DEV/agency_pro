import React, { useEffect, useState, useRef } from "react";
import "../../styles/variables.css";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import dots from "../../assets/dots.png";
import arrow from "../../assets/arrow.png";
// import logo_without from "../../assets/logo_without.png";
import "./style.css";

const MenuButton = ({ onClick }) => {
  const cn = bem("Menu");

  const handleClick = () => {
    onClick(1);
  };

  return (
    <div className={cn("arrow")} onClick={handleClick}>
      <img src={arrow} alt=""></img>
    </div>
  );
};

export default MenuButton;
