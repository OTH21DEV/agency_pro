import React, { useEffect, useState, useRef } from "react";
import arrow_down from "../../assets/arrow_down.png";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

const ServiceCard = ({ title, description, bulletPoints }) => {
  const cn = bem("Plan");
  //   document.body.classList.add("fade-in");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    // <section className={cn("container")}>
    // <div className={cn("")}>
      <div className={cn(isOpen ? "services-active" : "services")}>
        <div className={cn("wavy")}>
          <span>{title}</span>
        </div>

        {isOpen ? (
          <p className={cn(isOpen ? "text-active" : "text")}>
         
            {bulletPoints.map((point, index) => (
              <React.Fragment key={index}>
                {point}
                <br />
              </React.Fragment>
            ))}
          </p>
        ) : (
            <p className={cn("text")}>{description}</p>
        //   <p className={cn("text")}>UI/UX Design , Responsive Web Design , Graphic Design </p>
        )}

        <div onClick={handleClick} className={cn("arrow")}>
          <img src={arrow_down} alt=""></img>
        </div>
      </div>
    // </div>
   
  );
};

export default ServiceCard;
