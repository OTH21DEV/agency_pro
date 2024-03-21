import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavClick } from "../../app";
import { useHomeClick } from "../../app";
import "./style.css";
import "../../styles/variables.css";

const Nav = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const { setHasNavClicked } = useNavClick();
  const { hasHomepageClicked, setHasHomepageClicked } = useHomeClick();
  /*
  Function to handle setting hasNavClicked
  when navigating from '/' to another path
  Need to delay the display of navbar in main page (hide the navbar for design purpose)
  before redirect to another

 */

  const handleNavClick = () => {
    setTimeout(() => {
      setHasNavClicked(true);
      sessionStorage.setItem("navBarVisible", "true");
    }, 1500);
  };

  const handleHomepage = () => {
    setHasHomepageClicked(true);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setHasNavClicked(false);
    }
  }, [setHasNavClicked,location.pathname]);

  return (
    <div className="nav-wrapper" ref={navRef}>
      <div>
        <Link onClick={location.pathname !== "/" ? handleHomepage : undefined} to="/">
          FromScratch
        </Link>
      </div>
      <div className="nav-links">
        <Link onClick={location.pathname === "/" ? handleNavClick : undefined} to="/services">
          01/ Services
        </Link>
        <Link onClick={location.pathname === "/" ? handleNavClick : undefined} to="/portfolio">
          02/ Portfolio
        </Link>
        <Link onClick={location.pathname === "/" ? handleNavClick : undefined} to="/contact">
          03/ Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
