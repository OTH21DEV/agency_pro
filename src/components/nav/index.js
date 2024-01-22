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
          console.log(e);
          window.scrollTo({
            top: document.getElementById("work-flow").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        How we work
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
          window.scrollTo({
            top: document.querySelector(".Plan-container").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        Services
      </li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  );
};

export default Nav;
