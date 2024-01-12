import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";


const WorkFlowCard = ({id, number,name,content}) => {
    const cn = bem("Work-flow");
  return (
    
    <div className={cn("card-wrapper")}id={id}>
      <div className={cn("card-section")}>

  
      <h2 className={cn("title")}>
        <span>{number}</span>
        {name}
      </h2>
      <p className={cn("text")}>
       {content}
      </p>
      </div>
      <div className={cn("line")}></div>
    </div> 
 
  );
};

export default WorkFlowCard;
