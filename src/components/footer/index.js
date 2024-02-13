import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

const Footer = () => {
  const cn = bem("Footer");
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
      let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      // Check if scrolling down
      if (currentScrollPos > lastScrollTop) {
        // Scrolling DOWN
        setIsScrollingDown(true);
        document.querySelector(".Footer-wrapper").style.height = "60px";

        let elements = document.querySelectorAll(".Footer div ");
        elements.forEach(function (element) {
          element.classList.add("scroll-text");
        });
      }
      // Check if the scroll up to the top
      else if (currentScrollPos === 0) {
        setIsScrollingDown(false);
        document.querySelector(".Footer-wrapper").style.height = "40px";
      }

      // Update the last scroll position
      setLastScrollTop(currentScrollPos <= 0 ? 0 : currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const items = ["DIGITAL SOLUTION", "DEVELOPMENT", "STRATEGY", "SEO", "DESIGN"];

  return (
    <>
      {/* <div className="Footer-wrapper">
        <div className={cn("")} style={footerStyle}>
          {items.map((item, index) => (
            <div key={`item-${index}`}>
              <p style={paraStyle} >{item}</p>
              <p style={paraStyle} >{item}</p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="Footer-wrapper">
        <div className={cn("")} style={footerStyle}>
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
