import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import arrow_down from "../../assets/arrow_down.png";
import logo from "../../assets/logo_new.png";
import transition from "../../transition";
import NavBar from "../nav-bar";
import { Link, useLocation } from "react-router-dom";

import { useNavClick } from "../../app";
import { useHomeClick } from "../../app";

const ContactFooter = () => {
  const cn = bem("Contact");

  const location = useLocation();
  const networkTitleRef = useRef([]);
  const { hasNavClicked, setHasNavClicked } = useNavClick();
  const { hasHomepageClicked } = useHomeClick();
//handle the state of elements (titles etc)
const [isVisible, setIsVisible] = useState(false);
const [networkUnderlineWidth, setNetworkUnderlineWidth] = useState(0);
  /*Displays the navBar on the contact 
  section only when we are in this section.
  Delays the display after click from main page on 500ms;
   otherwise its instantly visible from the 
  main page for each section
  */

  useEffect(() => {
    const navBar = document.querySelector(".Nav-bar-wrapper");

    let timer;

    if (location.pathname === "/contact") {
      timer = setTimeout(() => {
        if (navBar) {
          navBar.classList.add("visible");
          //save to storage ,otherwise the navBar is not visible on page reload
          sessionStorage.setItem("navBarVisible", "true");
          // setIsVisible(true);
        }
      }, 500);
    } 
    // else {
    //   sessionStorage.clear();
    // }

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Check session storage for NavBar visibility state
  const isNavBarVisible = sessionStorage.getItem("navBarVisible") === "true";





  /*need to handle the scrollY to display 
  services elements in the main page by adding visible class in jsx*/
  const path = window.location.pathname;
  const handleScroll = () => {
  
    // Conditions for Home ("/") Page
    if (path === "/") {
      if (window.scrollY >= 3700) {
        setIsVisible(true);
      }
    
      // if (window.scrollY >= 3300) {
      //   // setSecondTitleIsVisible(true);
      // }
    }
    // Condition for Non-Home (other) Pages
    else {
      // if (window.scrollY >= 200) {
        setIsVisible(true);
      // }
      // if (window.scrollY >= 1200) {
      //   // setSecondTitleIsVisible(true);
      // }
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);






  // Split the text by newlines to work with individual lines
  const wrapTextIntoLines = (text, style) => {
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="line">
        {line}
      </span>
    ));
  };

  const text = ` Looking forward to working together to make your project exceptional. \nThank you for choosing this service.`;

  const wrappedText = wrapTextIntoLines(text);

  let email= ["C","O","N","T","A","C","T","&","F", "R", "O", "M", "S", "C", "R", "A","T","C","H",".","C","O","M"];


  useEffect(() => {
    let networkTotalWidth = 0;
    networkTitleRef.current.forEach((element) => {
      if (element) {
        networkTotalWidth += element.offsetWidth;
      }
    });
    setNetworkUnderlineWidth(networkTotalWidth);

    // let sportTotalWidth = 0;
    // sportTitleRef.current.forEach((element) => {
    //   if (element) {
    //     sportTotalWidth += element.offsetWidth;
    //   }
    // });
    // setSportUnderlineWidth(sportTotalWidth);
  }, []);


  const underlineDelay = email.length * 0.07 + 0.14;

  return (
    <div className="section">

 
      {hasNavClicked || hasHomepageClicked || isNavBarVisible ? <NavBar /> : ""}
    <section className="contact-section">

      <div className="contact-wrapper" >
        <div className="contact-heading">
          <h2 className={`contact-heading-number ${isVisible ? "visible" : ""}`} style={path === "/" ? { transitionDelay: '1s' } : {}}>04/</h2>
          <p className={`contact-heading-title ${isVisible ? "visible" : ""}`} style={path === "/" ? { transitionDelay: '1s' } : {}}>{"GOT A PROJECT IN MIND?"}</p>
        </div>
        <p className={`contact-heading-message ${isVisible ? "visible" : ""}`} style={path === "/" ? { transitionDelay: '1s' } : {}} >{"SEND A MESSAGE"}</p>
      </div>
      <div className="contact-about">
        {/* <h3>ABOUT</h3> */}
        <p className={`contact-about-content ${isVisible ? "visible" : ""}`} > {wrappedText} </p>
      </div>

      <div className={cn("footer")}>
 
        {/* <div> */}

        <span className="footer-email">
              {email.map((letter, index) => {
                const style = { transitionDelay: `${index * 0.07}s` };
                return (
                  <span key={index} className={`"footer-email-letter" ${isVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
                    {letter}
                  </span>
                );
              })}
              <div className={`underline ${isVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth, transitionDelay: `${underlineDelay}s` }} />
             
            </span>
   
      </div>
      
    </section>
    </div>
  );
};

export default transition(ContactFooter);
