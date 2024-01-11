import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import Canva from "../canva";


const TableContent = () => {


  const cn = bem("Plan");
  document.body.classList.add("fade-in");
  // useEffect(()=>{
  //     document.body.classList.add('fade-in')
  // })

  return (
 

   
    
    <section className={cn("container")}>
     
      <div className={cn("")}>
        <div className="rt">
        <div className={cn("wavy")}>
          <span style={{ "--i": 1 }}>A</span>
          <span style={{ "--i": 2 }}>G</span>
          <span style={{ "--i": 3 }}>E</span>
          <span style={{ "--i": 4 }}>N</span>
          <span style={{ "--i": 5 }}>C</span>
          <span style={{ "--i": 6 }}>Y</span>
        </div>
        </div>
        <div className="rt">
        <div className={cn("wavy")}>
          <span style={{ "--i": 1 }}>W</span>
          <span style={{ "--i": 2 }}>O</span>
          <span style={{ "--i": 3 }}>R</span>
          <span style={{ "--i": 4 }}>K</span>
        </div>
        </div>
        <div className="rt">
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
</div>
<div className="rt">
        <div className={cn("wavy")}>
          <span style={{ "--i": 1 }}>O</span>
          <span style={{ "--i": 2 }}>T</span>
          <span style={{ "--i": 3 }}>H</span>
          <span style={{ "--i": 4 }}>E</span>
          <span style={{ "--i": 5 }}>R</span>
          <span style={{ "--i": 6 }}>S</span>
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
