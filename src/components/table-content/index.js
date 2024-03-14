import React, { useEffect, useState, useRef } from "react";
import arrow_down from "../../assets/arrow_down.png";
import "../../styles/variables.css";
// import "./style.css";
import { cn as bem } from "@bem-react/classname";
import Canva from "../canva";

const TableContent = () => {
  const cn = bem("Plan");
  document.body.classList.add("fade-in");
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <section className={cn("container")}>
      <div className={cn("")}>
        <div className={cn(isClicked ? "services-active" : "services")}>
          <div className={cn("wavy")}>
            <span>Design Services</span>
          </div>

          {isClicked ? (
            <p className={cn(isClicked ? "text-active" : "text")}>
              <bold>UI/UX Design:</bold> Crafting user interfaces and experiences that are both visually appealing and intuitive to use. <br />
              Responsive Web Design: Ensuring websites look and function well on all devices, from desktops to smartphones.
              <br /> Graphic Design: Creating logos, banners, and other visual content that enhances brand identity.
            </p>
          ) : (
            <p className={cn("text")}>UI/UX Design , Responsive Web Design , Graphic Design </p>
          )}

          <div onClick={handleClick} className={cn("arrow")}>
            <img src={arrow_down} alt=""></img>
          </div>
        </div>
        <div
          className={cn("services")}
          // onClick={(e) => {
          //   e.preventDefault();
          //   console.log(e)
          //   window.scrollTo({
          //     top: document.getElementById("work-flow").offsetTop,
          //     behavior: "smooth",
          //   });
          // }}
        >
          <div className={cn("wavy")}>
            <span>Development Services</span>
         
          </div>

          {isClicked ? (
            <p className={cn(isClicked ? "text-active" : "text")}>
              Frontend Development: Building the client-facing part of websites using technologies like HTML, CSS, and JavaScript.
              <br />
              Backend Development: Developing server-side logic and integration, databases, and application programming interfaces (APIs).
              <br />
              Full Stack Development: Offering end-to-end web solutions that encompass both front-end and back-end development.
              <br />
              {/* E-commerce Development: Specializing in online store creation, payment gateway integration, and shopping cart development. */}
              {/* Content Management Systems (CMS): Implementing and customizing CMS platforms such as WordPress, Drupal, or Joomla for easy content updates. */}
              Web Application Development: Building dynamic and interactive web applications tailored to specific business needs.
            </p>
          ) : (
            <p className={cn("text")}>Frontend Development , Backend Development , Full Stack Development, Web Application Development </p>
          )}

          {/* <p className={cn("text")}>Frontend Development , Backend Development , Full Stack Development, Web Application Development </p> */}
          <div onClick={handleClick} className={cn("arrow")}>
            <img src={arrow_down} alt=""></img>
          </div>
        </div>
        <div className={cn("services")}>
          <div className={cn("wavy")}>
            <span>Support & Maintenance Services</span>
            {/* <span style={{ "--i": 1 }}>S</span>
            <span style={{ "--i": 2 }}>E</span>
            <span style={{ "--i": 3 }}>R</span>
            <span style={{ "--i": 4 }}>V</span>
            <span style={{ "--i": 5 }}>I</span>
            <span style={{ "--i": 6 }}>C</span>
            <span style={{ "--i": 7 }}>E</span>
            <span style={{ "--i": 8 }}>S</span> */}
          </div>
          <p>Website Maintenance,Hosting Solutions, Technical Support </p>
          <div className={cn("arrow")}>
            <img src={arrow_down} alt=""></img>
          </div>
        </div>
        <div className={cn("services")}>
          <div className={cn("wavy")}>
            <span>Others</span>
            {/* <span style={{ "--i": 1 }}>O</span>
            <span style={{ "--i": 2 }}>T</span>
            <span style={{ "--i": 3 }}>H</span>
            <span style={{ "--i": 4 }}>E</span>
            <span style={{ "--i": 5 }}>R</span>
            <span style={{ "--i": 6 }}>S</span> */}
          </div>
          <p>Search Engine Optimization (SEO), Web Accessibility </p>
          <div className={cn("arrow")}>
            <img src={arrow_down} alt=""></img>
          </div>
        </div>
        {/*     
       <aside className={cn("contact")}>



        <div className={cn("contact-info")}>

   
        </div>
          
      </aside>  */}
      </div>
    </section>
  );
};

export default TableContent;
