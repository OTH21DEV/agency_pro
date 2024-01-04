import React from 'react'
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import globe from "../../assets/globe.png"


const LangueBar = () => {

    const cn = bem("Langue");
  return (
    <div className={cn("")}>
<span className={cn("text")}>ENG</span>
<img src={globe}alt=""></img>

    </div>
  )
}

export default LangueBar