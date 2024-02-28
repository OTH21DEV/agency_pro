import React, { useEffect, useState } from "react";
import ServiceCard from "../service-card";
import { Link, useLocation } from "react-router-dom";
import { cn as bem } from "@bem-react/classname";
import "./style.css";

import transition from "../../transition";
import NavBar from "../nav-bar";
import { useNavClick } from "../../app";
import { useHomeClick } from "../../app";

function ServiceCards() {
  let servicesTitle = ["S", "E", "R", "V", "I", "C", "E", "S"];
  //handle the state of clicked services description (+)
  const [isOpen, setIsOpen] = useState(null);
  //handle the state of elements (titles etc)
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { hasHomepageClicked } = useHomeClick();
  const { hasNavClicked } = useNavClick();

  const services = [
    {
      title: "Design Services",
      number: "01",
      description: " UI/UX Design , Responsive Web Design , Graphic Design",
      bulletPoints: ["UI/UX Design: crafting user interfaces and experiences.", "Responsive Web Design: ensuring websites look good on all devices.", "Graphic Design: creating visual content."],
    },

    {
      title: "Development Services",
      number: "02",
      description: "Frontend Development , Backend Development , Full Stack Development, Web Application Development",
      bulletPoints: [
        "Frontend Development: building the client-facing part of websites using technologies like HTML, CSS, and JavaScript.",

        "Backend Development: developing server-side logic and integration, databases, and application programming interfaces (APIs).",

        "Full Stack Development: offering end-to-end web solutions that encompass both front-end and back-end development.",

        "  Web Application Development: building dynamic and interactive web applications tailored to specific business needs.",
      ],
    },
    {
      number: "03",
      title: "Support & Maintenance Services",

      description: "Website Maintenance,Hosting Solutions, Technical Support",
      bulletPoints: [
        " Website Maintenance: regular updates and maintenance to keep websites running smoothly and securely.",
        "Hosting Solutions: providing reliable web hosting services with different plans to meet varied needs.",
        "Technical Support: offering ongoing technical support to handle any issues or queries related to website performance.",
      ],
    },
    {
      number: "04",
      title: "Others Services",

      description: "Search Engine Optimization (SEO), Web Accessibility ",
      bulletPoints: [
        " Search Engine Optimization (SEO): optimizing websites to rank higher in search engine results and attract more organic traffic.",
        "Web Accessibility: ensuring that websites are accessible to individuals with disabilities, compliant with WCAG guidelines.",
      ],
    },
  ];

  /*
delay the display of navBar when redirected from main page to the services section
and set the state of navbar in session storage , so when the page reload the 
elements will be displayed again (animation will rerun) - this check is added in jsx
 */
  useEffect(() => {
    const navBar = document.querySelector(".Nav-bar-wrapper");

    let timer;

    if (location.pathname === "/services") {
      timer = setTimeout(() => {
        if (navBar) {
          navBar.classList.add("visible");
          sessionStorage.setItem("navBarVisible", "true");
        }
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [location.pathname]);

  function handleClick(index) {
    setIsOpen((prevIsOpen) => (prevIsOpen === index ? null : index));
  }

  /*need to handle the scrollY to display 
  services elements in the main page by adding visible class in jsx*/
  const handleScroll = () => {
    const specialHeight = 200;
    if (window.scrollY >= specialHeight) {
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

  /*
  Check session storage for NavBar visibility state (iw has been clicked from the main page)
 */
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

  ////////////////////////

  const numberDelay = servicesTitle.length * 0.07;
  const numberStyle = { transitionDelay: `${numberDelay + 0.07}s` };
  const aboutDelay = servicesTitle.length * 0.07;
  const aboutStyle = { transitionDelay: `${aboutDelay}s` };

  // Split the text by newlines to work with individual lines
  const wrapTextIntoLines = (text) => {
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="line">
        {line}
      </span>
    ));
  };

  const text = `Specializing in custom and user-friendly web \nsolutions, the focus is on meeting specific \nclient needs through a commitment to \nexcellence and attention to detail. \nEach project is approached with the utmost care, \nensuring that the delivered websites are engaging, functional, and \nsuccessful in enhancing online presence \nfor businesses and individuals alike.`;

  const wrappedText = wrapTextIntoLines(text);

  return (
    <div className="section">
      {hasNavClicked || hasHomepageClicked || isNavBarVisible ? <NavBar /> : ""}
      <section className="services-section">
        <div className="services-wrapper">
          <h2 className={`service-number ${isVisible ? "visible" : ""}`} style={numberStyle}>
            02/
          </h2>
          <span className="title-wrapper">
            {servicesTitle.map((lettre, key) => {
              const style = { transitionDelay: `${key * 0.07}s` };

              return (
                <span key={key} className={`services-title ${isVisible ? "visible" : ""}`} style={style}>
                  {lettre}
                </span>
              );
            })}
          </span>
        </div>
        <div className="services-about">
          <h3 className={`services-about-title ${isVisible ? "visible" : ""}`} style={aboutStyle}>
            ABOUT
          </h3>

          <p className={`services-about-content ${isVisible ? "visible" : ""}`}>{wrappedText}</p>
        </div>

        <div className={`services-card-wrapper ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "1.2s" }}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              number={service.number}
              description={service.description}
              bulletPoints={service.bulletPoints}
              index={index}
              isOpen={index === isOpen}
              onClick={() => handleClick(index)}
              style={{ borderTop: "2px solid grey", marginTop: "85px" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default transition(ServiceCards);
