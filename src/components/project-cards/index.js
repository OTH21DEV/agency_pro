import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../project-card";
import transition from "../../transition";
import NavBar from "../nav-bar";
import { useLocation } from "react-router-dom";
import { useNavClick } from "../../app";
import { useHomeClick } from "../../app";
import "./style.css";
import "../../styles/variables.css";

const ProjectCards = () => {
  let projects = ["P", "R", "O", "J", "E", "C", "T", "S"];
  const { hasHomepageClicked } = useHomeClick();
  const { hasNavClicked } = useNavClick();
  const location = useLocation();
  //handle the state of elements (titles etc)
  const [isVisible, setIsVisible] = useState(false);
  const projectsSectionRef = useRef();
  /*
delay the display of navBar when redirected from main page to the services section
and set the state of navbar in session storage , so when the page reload the 
elements will be displayed again (animation will rerun) - this check is added in jsx
 */
  useEffect(() => {
    const navBar = document.querySelector(".nav-bar-wrapper");

    let timer;

    if (location.pathname === "/portfolio") {
      timer = setTimeout(() => {
        if (navBar) {
          navBar.classList.add("visible");
          sessionStorage.setItem("navBarVisible", "true");
        }
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [location.pathname]);

  /*need to handle the scrollY to display 
  services elements in the main page by adding visible class in jsx*/
  const handleScroll = () => {
    const scrollY = window.scrollY + window.innerHeight / 2;
    if (projectsSectionRef.current && scrollY >= projectsSectionRef.current.offsetTop) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check session storage for NavBar visibility state
  const isNavBarVisible = sessionStorage.getItem("navBarVisible") === "true";

  /*
  if the nabBar was clciked from the main page (state is save in sessionstorage ), 
  user will be redirected to the services section
  so need to rerun the display effect of the elements there
   */

  useEffect(() => {
    let timeoutId;

    if (isNavBarVisible) {
      // Set a timeout before making the navigation bar visible
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 1800);
    } else {
      setIsVisible(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isNavBarVisible]);

  const numberDelay = projects.length * 0.07;
  const numberStyle = { transitionDelay: `${numberDelay + 0.07}s` };
  const aboutDelay = projects.length * 0.07;
  const aboutStyle = { transitionDelay: `${aboutDelay}s` };

  // Split the text by newlines to work with individual lines
  const wrapTextIntoLines = (text) => {
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="line">
        {line}
      </span>
    ));
  };

  const text = `Browse our handpicked selection of latest \nweb projects, each a testament to our \ntechnical skill and creative innovation.`;
  const wrappedText = wrapTextIntoLines(text);

  return (
    <div className="section">
      {hasNavClicked || hasHomepageClicked || isNavBarVisible ? <NavBar /> : ""}
      <section className="projects-section" ref={projectsSectionRef}>
        <div className="projects-wrapper">
          <h2 className={`project-number ${isVisible ? "visible" : ""}`} style={numberStyle}>
            02/
          </h2>
          <span className="title-wrapper">
            {projects.map((lettre, key) => {
              const style = { transitionDelay: `${key * 0.07}s` };
              return (
                <span key={key} className={`projects-title ${isVisible ? "visible" : ""}`} style={style}>
                  {lettre}
                </span>
              );
            })}
          </span>
        </div>
        <div className="projects-about">
          <h3 className={`project-about-title ${isVisible ? "visible" : ""}`} style={aboutStyle}>
            PROJECTS
          </h3>
          <p className={`projects-about-content ${isVisible ? "visible" : ""}`}>{wrappedText} </p>
        </div>
        <ProjectCard></ProjectCard>
      </section>
    </div>
  );
};

export default transition(ProjectCards);
