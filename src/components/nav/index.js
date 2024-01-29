import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

const Nav = () => {
  const cn = bem("Nav-wrapper");
  return (
    <ul className={cn("")}>
      <li
        onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Work-flow-section").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        How we work
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
 
          window.scrollTo({
            top: document.querySelector(".Plan-container").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        Services
      </li>
      <li  onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Slider").offsetTop,
            behavior: "smooth",
          });
        }}>Portfolio</li>
      <li onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Contact").offsetTop,
            behavior: "smooth",
          });
        }}>Contact</li>
    </ul>
  );
};

export default Nav;
