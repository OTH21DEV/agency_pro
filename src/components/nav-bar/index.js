import React, { useEffect, useRef } from "react";
import Nav from "../nav";
import LangueBar from "../langue-bar";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

const NavBar = () => {
  const cn = bem("Nav-bar-wrapper");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        // You could use a threshold value here
        document.querySelector(".Nav-bar-wrapper").classList.add("Nav-bar-wrapper---sticky");
      } else {
        document.querySelector(".Nav-bar-wrapper").classList.remove("Nav-bar-wrapper---sticky");
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(cn("--sticky"));

  return (

    <div className={cn("")}>
      <Nav></Nav>
      {/* <LangueBar></LangueBar> */}
    </div>
   
  );
};

export default NavBar;
