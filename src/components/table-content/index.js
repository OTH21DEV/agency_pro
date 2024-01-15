import React, { useEffect, useState, useRef } from "react";
import arrow_down from "../../assets/arrow_down.png";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import Canva from "../canva";

const TableContent = () => {
  const cn = bem("Plan");
  document.body.classList.add("fade-in");
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  // useEffect(()=>{
  //     document.body.classList.add('fade-in')
  // })

  return (
    <section className={cn("container")}>
      <div className={cn("")}>
        <div className={cn("services")}>
          <div className={cn("wavy")}>
            <span>Design Services</span>

            {/* <span style={{ "--i": 1 }}>A</span>
            <span style={{ "--i": 2 }}>G</span>
            <span style={{ "--i": 3 }}>E</span>
            <span style={{ "--i": 4 }}>N</span>
            <span style={{ "--i": 5 }}>C</span>
            <span style={{ "--i": 6 }}>Y</span> */}
          </div>

          {isClicked ? (
            <p>
              UI/UX Design: Crafting user interfaces and experiences that are both visually appealing and intuitive to use. <br/>Responsive Web Design: Ensuring websites look and function well on all
              devices, from desktops to smartphones.<br/> Graphic Design: Creating logos, banners, and other visual content that enhances brand identity.
            </p>
          ) : (
            <p>UI/UX Design , Responsive Web Design , Graphic Design </p>
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
            {/* <span style={{ "--i": 1 }}>H</span>
            <span style={{ "--i": 2 }}>O</span>
            <span style={{ "--i": 3 }}>W</span>
            {/* Add an extra span for space */}
            {/* <span style={{ "--i": 4 }}>&nbsp;</span>
            <span style={{ "--i": 5 }}>W</span>
            <span style={{ "--i": 6 }}>E</span> */}
            {/* Add an extra span for space */}
            {/* <span style={{ "--i": 7 }}>&nbsp;</span>
            <span style={{ "--i": 8 }}>W</span>
            <span style={{ "--i": 9 }}>O</span>
            <span style={{ "--i": 10 }}>R</span>
            <span style={{ "--i": 11 }}>K</span> */}
          </div>
          <p>Frontend Development , Backend Development , Full Stack Development, Web Application Development </p>
          <div className={cn("arrow")}>
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
