import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "../project-card";
import "./style.css";
import { cn as bem } from "@bem-react/classname";



const ProjectCards = () => {
  return (
    <div style={{height:"100vh",backgroundColor:"white"}}>
   <ProjectCard></ProjectCard>
   </div>
  )
}

export default ProjectCards