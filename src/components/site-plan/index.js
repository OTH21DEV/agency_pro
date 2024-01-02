import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

const SitePlan = () => {
  const cn = bem("Plan");
  document.body.classList.add("fade-in");
  // useEffect(()=>{
  //     document.body.classList.add('fade-in')
  // })

  return (
    <section className={cn("container")}>
      <div className={cn("")}>
        <div className={cn("wavy")}>
          <span style={{ "--i": 1 }}>A</span>
          <span style={{ "--i": 2 }}>G</span>
          <span style={{ "--i": 3 }}>E</span>
          <span style={{ "--i": 4 }}>N</span>
          <span style={{ "--i": 5 }}>C</span>
          <span style={{ "--i": 6 }}>Y</span>
        </div>

        <div className={cn("wavy")}>
          <span style={{ "--i": 1 }}>P</span>
          <span style={{ "--i": 2 }}>0</span>
          <span style={{ "--i": 3 }}>R</span>
          <span style={{ "--i": 4 }}>T</span>
          <span style={{ "--i": 5 }}>F</span>
          <span style={{ "--i": 6 }}>O</span>
          <span style={{ "--i": 7 }}>L</span>
          <span style={{ "--i": 8 }}>I</span>
          <span style={{ "--i": 9 }}>O</span>
        </div>

        <div className={cn("wavy")}>
          <span style={{ "--i": 1 }}>S</span>
          <span style={{ "--i": 2 }}>E</span>
          <span style={{ "--i": 3 }}>R</span>
          <span style={{ "--i": 4 }}>V</span>
          <span style={{ "--i": 5 }}>I</span>
          <span style={{ "--i": 6 }}>C</span>
          <span style={{ "--i": 7 }}>E</span>
          <span style={{ "--i": 8 }}>S</span>
        </div>

        <div className={cn("wavy")}>
          <span style={{ "--i": 1 }}>O</span>
          <span style={{ "--i": 2 }}>T</span>
          <span style={{ "--i": 3 }}>H</span>
          <span style={{ "--i": 4 }}>E</span>
          <span style={{ "--i": 5 }}>R</span>
          <span style={{ "--i": 6 }}>S</span>
        </div>
      </div>

      <aside className={cn("contact")}>
        <h2>Get in touch</h2>
        <p>00 33 6 00 00 00 00</p>
        <p>info@webaccuracy.com</p>
        <p></p>
      </aside>
    </section>
  );
};

export default SitePlan;
