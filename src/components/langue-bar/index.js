import React from 'react'
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import globe from "../../assets/globe.png"


const LangueBar = () => {

    const cn = bem("Langue");
  return (
    <div className={cn("")}>
<img src={globe}alt=""></img>
<span className={cn("text")}>ENG</span>
<span className={cn("text")}>FRA</span>
<span className={cn("text")}>RUS</span>
    </div>
  )
}

export default LangueBar