import React, { useEffect, useState, useRef } from "react";
import network_img from "../../assets/test_1.png";
import dashboard_v1 from "../../assets/test_2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/variables.css";
import "./style.css";

const ProjectCard = () => {
  let networkTitle = ["I", "N", "T", "R", "A", "L", "I", "N", "K"];
  let sportTitle = ["S", "P", "O", "R", "T", "S", "E", "E"];
  // useRef for networkTitle letters
  const networkTitleRef = useRef([]);
  const sportTitleRef = useRef([]);

  const parallaxContainerRef = useRef(null);
  const parallaxContainerrRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 900);
  const [networkUnderlineWidth, setNetworkUnderlineWidth] = useState(0);
  const [sportUnderlineWidth, setSportUnderlineWidth] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const [isSecondTitleVisible, setSecondTitleIsVisible] = useState(false);

  // State to handle the hover effect
  const [isNetworkTitleHovered, setNetworkTitleIsHovered] = useState(false);
  const [isSportTitleHovered, setSportTitleIsHovered] = useState(false);
  // Event handlers
  const handleMouseEnterNetwork = () => setNetworkTitleIsHovered(true);
  const handleMouseLeaveNetwork = () => setNetworkTitleIsHovered(false);
  const handleMouseEnterSport = () => setSportTitleIsHovered(true);
  const handleMouseLeaveSport = () => setSportTitleIsHovered(false);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    function updateUnderlineWidth() {
      let networkTotalWidth = 0;
      networkTitleRef.current.forEach((element) => {
        if (element) {
          const elementWidth = element.getBoundingClientRect().width;
          const style = window.getComputedStyle(element);
          const marginLeft = parseFloat(style.marginLeft);
          const marginRight = parseFloat(style.marginRight);

          networkTotalWidth += elementWidth + marginLeft + marginRight;
        }
      });
      setNetworkUnderlineWidth(networkTotalWidth);

      let sportTotalWidth = 0;
      sportTitleRef.current.forEach((element) => {
        if (element) {
          const elementWidth = element.getBoundingClientRect().width;
          const style = window.getComputedStyle(element);
          const marginLeft = parseFloat(style.marginLeft);
          const marginRight = parseFloat(style.marginRight);

          sportTotalWidth += elementWidth + marginLeft + marginRight;
        }
      });
      setSportUnderlineWidth(sportTotalWidth);
    }

    function handleResize() {
      setIsMobileView(window.innerWidth <= 900);
      updateUnderlineWidth(); // Recalculate widths when resizing
    }

    // Calculate the widths on mount
    updateUnderlineWidth();

    // Add listener for future resizes
    window.addEventListener("resize", handleResize);

    // Cleanup: remove listener when the component unmounts or before rerunning this effect
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*need to handle the scrollY to display 
  services elements in the main page by adding visible class in jsx*/

  const handleScroll = () => {
    ScrollTrigger.refresh();

    const scrollY = window.scrollY + window.innerHeight / 2;
    if (parallaxContainerRef.current && scrollY >= parallaxContainerRef.current.offsetTop) {
      setIsVisible(true);
    }

    if (parallaxContainerrRef.current && scrollY >= parallaxContainerrRef.current.offsetTop) {
      setSecondTitleIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const underlineDelay = networkTitle.length * 0.07 + 0.14;
  const secondUnderlineDelay = sportTitle.length * 0.07 + 0.14;

  // Split the text by newlines to work with individual lines
  const wrapTextIntoLines = (text, style) => {
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="line">
        {line}
      </span>
    ));
  };

  const text = `A STREAMLINED COLLABORATION APP \nDESIGNED TO ENHANCE CORPORATE COMMUNICATIONS AND TEAMWORK.\nSECURE,PRIVATE AND EXCLUSIVE TO ORGANISATION MEMBERS.`;
  const project_Title = "CHARTPLAY ANALYTICS IS AN ULTIMATE HUB FOR FITNESS ACTIVITES MONITORING.\nREAL TIME CHARTS FOR IN DEPTH PERFORMANCE ANALYSIS.";
  const wrappedText = wrapTextIntoLines(text);
  const secondText = wrapTextIntoLines(project_Title);

  useEffect(() => {
    const initAnimations = () => {
      // Network Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".first-parallax-container .scroll-content",
            start: "top bottom",
            scrub: true,
            onEnter: () => console.log("Network onEnter"),
            onLeave: () => console.log("Network onLeave"),
          },
        })
        .to(".first-parallax-container .scroll-content", { yPercent: -250, ease: "none" });

      // Sport Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".second-parallax-container .scroll-content",
            start: "top bottom",
            scrub: true,
            onEnter: () => console.log("Sport onEnter"),
            onLeave: () => console.log("Sport onLeave"),
          },
        })
        .to(".second-parallax-container .scroll-content", { yPercent: -250, ease: "none" });
    };

    const timeoutId = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timeoutId);
      gsap.killTweensOf(".scroll-content");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className={`first-parallax-container ${isVisible ? "visible" : ""}`} ref={parallaxContainerRef}>
        <div className="first-fixed-content-wrapper">
          <span className="first-fixed-content" onMouseEnter={handleMouseEnterNetwork} onMouseLeave={handleMouseLeaveNetwork}>
            {networkTitle.map((letter, index) => {
              const style = { transitionDelay: `${index * 0.07}s` };
              return (
                <span key={index} className={`fixed-content-letter ${isVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
                  {letter}
                </span>
              );
            })}
            <div className={`underline ${isVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth, transitionDelay: `${underlineDelay}s` }} />
            <div className="project-card-title">
              <p className={`project-card-content ${isVisible ? "visible" : ""}`}> {wrappedText}</p>
            </div>
          </span>
        </div>

        {/* Scrollable content */}

        <div className="scroll-content">
          <div className="top-right">
            <img className={`img ${isNetworkTitleHovered && !isMobileView ? "scaled" : ""}`} src={network_img} alt="" />
          </div>
        </div>
      </div>

      <div className={`second-parallax-container ${isVisible ? "visible" : ""}`} ref={parallaxContainerrRef}>
        <div className="second-fixed-content-wrapper">
          <span className="second-fixed-content" onMouseEnter={handleMouseEnterSport} onMouseLeave={handleMouseLeaveSport}>
            {sportTitle.map((letter, index) => {
              const style = { transitionDelay: `${index * 0.07}s` };
              return (
                <span key={index} className={`fixed-content-letter ${isSecondTitleVisible ? "visible" : ""}`} ref={(el) => (sportTitleRef.current[index] = el)} style={style}>
                  {letter}
                </span>
              );
            })}
            <div className={`underline ${isSecondTitleVisible ? "visible" : ""}`} style={{ width: sportUnderlineWidth, transitionDelay: `${secondUnderlineDelay}s` }} />
            <div className="project-card-title">
              <p className={`project-card-content ${isSecondTitleVisible ? "visible" : ""}`}> {secondText}</p>
            </div>
          </span>
        </div>

        {/* Scrollable content */}
        <div className="scroll-content">
          <div className="bottom-right">
            <img className={`img ${isSportTitleHovered && !isMobileView ? "scaled" : ""}`} src={dashboard_v1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
