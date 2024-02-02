import React from 'react'
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import arrow_down from "../../assets/arrow_down.png";

const ContactFooter = () => {
    const cn = bem("Contact");
  return (
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
  )
}

export default ContactFooter