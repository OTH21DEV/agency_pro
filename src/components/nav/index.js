import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import { useNavClick } from "../../app";

const Nav = () => {
  const cn = bem("Nav-wrapper");

  const navRef = useRef(null);

  const { setHasNavClicked } = useNavClick();
  const handleNavClick = () => {
    setHasNavClicked(true);

  };


  return (
    <div className={cn("")} ref={navRef}>
      <Link onClick={handleNavClick} to="/services">
        01/ Services
      </Link>
      <Link onClick={handleNavClick} to="/portfolio">
        02/ Portfolio
      </Link>
      <Link onClick={handleNavClick} to="/contact">
        03/ Contact
      </Link>
    </div>
  );
};

export default Nav;
