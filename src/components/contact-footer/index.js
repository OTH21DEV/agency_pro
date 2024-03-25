import React, { useEffect, useState, useRef } from "react";
import transition from "../../transition";
import NavBar from "../nav-bar";
import { useLocation } from "react-router-dom";
import { useNavClick } from "../../app";
import { useHomeClick } from "../../app";
import "./style.css";
import "../../styles/variables.css";

const ContactFooter = () => {
  const location = useLocation();
  const networkTitleRef = useRef([]);
  const { hasNavClicked, setHasNavClicked } = useNavClick();
  const { hasHomepageClicked } = useHomeClick();
  //handle the state of elements (titles etc)
  const [isVisible, setIsVisible] = useState(false);
  const [networkUnderlineWidth, setNetworkUnderlineWidth] = useState(0);
  const [isEmailVisible, setEmailIsVisible] = useState(false);
  const contactSectionRef = useRef();
  const emailRef = useRef();

  /*Displays the navBar on the contact 
  section only when we are in this section.
  Delays the display after click from main page on 500ms;
   otherwise its instantly visible from the 
  main page for each section
  */
  useEffect(() => {
    const navBar = document.querySelector(".nav-bar-wrapper");
    let timer1, timer2;
    let timer;

    if (location.pathname === "/contact") {
      timer = setTimeout(() => {
        if (navBar) {
          navBar.classList.add("visible");
          //save to storage ,otherwise the navBar is not visible on page reload
          sessionStorage.setItem("navBarVisible", "true");
        }
      }, 500);
      timer1 = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      timer2 = setTimeout(() => {
        setEmailIsVisible(true);
      }, 1900);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  // Check session storage for NavBar visibility state
  const isNavBarVisible = sessionStorage.getItem("navBarVisible") === "true";

  /*need to handle the scrollY to display 
  services elements in the main page by adding visible class in jsx*/
  const handleScroll = () => {
    const scrollY = window.scrollY + window.innerHeight / 2;
    if (contactSectionRef.current && scrollY >= contactSectionRef.current.offsetTop) {
      setIsVisible(true);
    }
    if (emailRef?.current && scrollY + 200 >= emailRef.current.offsetTop) {
      setEmailIsVisible(true);
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

  let email = ["C", "O", "N", "T", "A", "C", "T", "@", "L", "A", "V", "C", "R", "A", "F", "T",".", "C", "O","M"];

  useEffect(() => {
    function updateUnderlineWidth() {
      let totalWidth = 0;
      networkTitleRef.current.forEach((element) => {
        if (element) {
          totalWidth += element.offsetWidth;
        }
      });
      setNetworkUnderlineWidth(totalWidth);
    }

    // Call the function on mount to initialize the width
    updateUnderlineWidth();

    function handleResize() {
      updateUnderlineWidth(); // Recalculate widths when resizing
    }

    // Add event listener for when the window is resized
    window.addEventListener("resize", handleResize);

    // Add event listener for when the window is reloaded
    window.addEventListener("load", updateUnderlineWidth);

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", updateUnderlineWidth);
    };
  }, []);

  const underlineDelay = 4.34;

  return (
    <div className="section">
      {hasNavClicked || hasHomepageClicked || isNavBarVisible ? <NavBar /> : ""}
      <section className="contact-section" ref={contactSectionRef}>
        <div className="contact-wrapper">
          <div className="contact-heading">
            <h2 className={`contact-heading-number ${isVisible ? "visible" : ""}`} style={location.pathname === "/" ? { transitionDelay: "1s" } : {}}>
              03/
            </h2>
            <p className={`contact-heading-title ${isVisible ? "visible" : ""}`} style={location.pathname === "/" ? { transitionDelay: "1s" } : {}}>
              {"GOT A PROJECT IN MIND?"}
            </p>
          </div>
          <p className={`contact-heading-message ${isVisible ? "visible" : ""}`} style={location.pathname === "/" ? { transitionDelay: "1s" } : {}}>
            {"SEND A MESSAGE"}
          </p>
        </div>
        <div className="contact-about">
          <p className={`contact-about-content ${isVisible ? "visible" : ""}`}> {wrappedText} </p>
        </div>

        <div className="contact-footer">
          <span className="footer-email" ref={emailRef}>
            {email.map((letter, index) => {
              const baseDelay = 3; // Starting delay for the first span
              const incrementalDelay = 0.07; // Delay to add for each subsequent span
              const style = { transitionDelay: `${baseDelay + index * incrementalDelay}s` };

              return (
                <span key={index} className={`footer-email-letter ${isEmailVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
                  {letter}
                </span>
              );
            })}

            <div className={`underline ${isEmailVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth, transitionDelay: `${underlineDelay}s` }} />
          </span>
        </div>
      </section>
    </div>
  );
};

export default transition(ContactFooter);
