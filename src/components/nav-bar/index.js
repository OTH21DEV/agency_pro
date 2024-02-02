import React from "react";
import Nav from "../nav";
import LangueBar from "../langue-bar";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

const NavBar = () => {
  const cn = bem("Nav-bar-wrapper");
  return (
    <div className={cn("")}>
      <Nav></Nav>
      {/* <LangueBar></LangueBar> */}
    </div>
  );
};

export default NavBar;
