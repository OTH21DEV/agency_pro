import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import "../../styles/variables.css";

const Footer = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const footerStyle = {
    height: isScrollingDown ? "60px" : "40px",
    transition: "height 0.3s",
  };

  const paraStyle = {
    opacity: isScrollingDown ? 1 : 0,
    transition: "opacity 0.3s",
    height: isScrollingDown ? "auto" : 0,
    overflow: "hidden",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos < 20) {
        setIsScrollingDown(false);
      }
      if (currentScrollPos > lastScrollTop) {
        setIsScrollingDown(true);
      }

      // Set the last recorded position
      setLastScrollTop(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div className="footer-wrapper">
        <div className="footer" style={footerStyle}>
          <p style={paraStyle}>DIGITAL</p>
          <p style={paraStyle}>SOLUTION </p>
          <p style={paraStyle}>DEVELOPMENT</p>
          <p style={paraStyle}>STRATEGY</p>
          <p style={paraStyle}>DESIGN</p>

          <p style={paraStyle}>DIGITAL</p>
          <p style={paraStyle}>SOLUTION </p>
          <p style={paraStyle}>DEVELOPMENT</p>
          <p style={paraStyle}>STRATEGY</p>
          <p style={paraStyle}>DESIGN</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
