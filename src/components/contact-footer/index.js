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

  const { hasNavClicked, setHasNavClicked } = useNavClick();
  const { hasHomepageClicked } = useHomeClick();

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

  return (
    <section className="contact-section">
      {hasNavClicked || hasHomepageClicked || isNavBarVisible ? <NavBar /> : ""}

      <div className="contact-wrapper">
        <div className="contact-heading">
          <h2>04/</h2>
          <p>{"GOT A PROJECT IN MIND?"}</p>
        </div>
        <p>{"SEND A MESSAGE"}</p>
      </div>
      <div className="contact-about">
        {/* <h3>ABOUT</h3> */}
        <p> Looking forward to working together to make your project exceptional. Thank you for choosing this service. </p>
      </div>

      <div className={cn("footer")}>
        {/* <div className="logo-wrapper">
          <img src={logo} alt=""></img>
        </div> */}
        <div>
          {" "}
          <p className={cn("footer-email")}>contact@contact.com</p>
          <p>+330786894800</p>
          <a href="mailto:contact@test.com" className={cn("footer-link")}>
            <p>linkedin</p>
            <img src={arrow_down} alt=""></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default transition(ContactFooter);
