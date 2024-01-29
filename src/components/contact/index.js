import React from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import contact_bg from"../../assets/contact_bg.jpg"
import arrow_white from"../../assets/arrow_white.png"
const Contact = () => {
  const cn = bem("Contact");
  const text =
    "Welcome! Our passionate team excels in creating user-friendly websites tailored to your needs. We value honesty, diligent work, and teamwork to deliver engaging and practical online solutions. Let's collaborate to make your project exceptional. Thank you for choosing us.";

  // Split the text by period followed by a space to get an array of sentences.
  const sentences = text.split(/\. +/);

  return (
    <section className={cn("")}>
        <div className={cn("bg")}>
            <img src={contact_bg} alt=""></img>
        </div>
      <div className={cn("wrapper")}>
        <div className={cn("content")}>
          {sentences.map((sentence, index) => (
            <p key={index}>
              {sentence}
              {index !== sentences.length - 1 && `.\n`}
            </p>
          ))}
          {/* <p>{text}</p> */}
        </div>
          <div className={cn("email")}>
            <h2>Have a project in your mind?</h2>
            <a href="mailto:contact@test.com" className={cn("link")}>
            <p>Contact Us</p>
<img src={arrow_white} alt=""></img>
            </a>
          </div>
      </div>
    </section>
  );
};

export default Contact;
