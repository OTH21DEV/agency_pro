import React from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import arrow_down from "../../assets/arrow_down.png";

const ContactFooter = () => {
  const cn = bem("Contact");
  return (
    <section>
      <div className="contact-wrapper">
        <div className="contact-heading">

        <h2>04/</h2>
        <p >{"WANT TO WORK TOGETHER?"}</p>
        </div>
        <p>{"SEND A MESSAGE"}</p>
      </div>
      <div className="project-cards-heading">
         <h3>ABOUT</h3>
         <p> Excelling in creating user-friendly websites tailored to your needs, there is a strong commitment to honesty, diligent work, and collaboration to deliver engaging and practical online solutions. Looking forward to working together to make your project exceptional. Thank you for choosing this service. </p>
       </div> 
      <div className={cn("footer")}>
        <h1>Web accurancy agency</h1>
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

export default ContactFooter;
