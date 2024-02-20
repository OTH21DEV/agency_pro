import React, { useEffect, useRef } from 'react';
import { cn as bem } from "@bem-react/classname";
import "./style.css";

const Nav = () => {
  const cn = bem("Nav-wrapper");


  const navRef = useRef(null);

 


  return (
    <ul className={cn("")} ref={navRef}>
      {/* <li
        onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Work-flow-section").offsetTop,
            behavior: "smooth",
          });
        }}
      >
       01/ How we work
      </li> */}
      <li
        onClick={(e) => {
          e.preventDefault();
 
          window.scrollTo({
            top: document.querySelector(".services-section").offsetTop,
            behavior: "smooth",
          });
        }}
      >
        01/ Services
      </li>
      <li  onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".projects-section").offsetTop,
            behavior: "smooth",
          });
        }}>02/ Portfolio</li>
      <li onClick={(e) => {
          e.preventDefault();
         
          window.scrollTo({
            top: document.querySelector(".Contact").offsetTop,
            behavior: "smooth",
          });
        }}>03/ Contact</li>
    </ul>
  );
};

export default Nav;
