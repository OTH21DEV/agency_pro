import React, { useEffect } from "react";
import Nav from "../nav";
// import LangueBar from "../langue-bar";
import "./style.css";
import "../../styles/variables.css";

const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        document.querySelector(".nav-bar-wrapper").classList.add("nav-bar-wrapper---sticky");
      } else {
        document.querySelector(".nav-bar-wrapper").classList.remove("nav-bar-wrapper---sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-bar-wrapper">
      <Nav></Nav>
      {/* <LangueBar></LangueBar> */}
    </div>
  );
};

export default NavBar;
