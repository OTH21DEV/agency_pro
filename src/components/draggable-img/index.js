import React, { useRef, useState, useCallback, useEffect } from "react";
// import contact_bg from "../../assets/contact_bg.jpg";
// import { motion, useMotionValue, useTransform } from "framer-motion";
import "./style.css";

const DraggableImg = () => {
  const containerRef = useRef(null);
  const customCursorRef = useRef(null);

  const posRef = useRef();
  const startPosRef = useRef();

  const onMouseDown = useCallback((e) => {
    const pos = posRef.current;
    startPosRef.current = e.clientX; // Store the starting X position
  
   const imageContainer = containerRef.current;
   if (imageContainer) {
     imageContainer.classList.add("dragging"); 
   }



    const onMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startPosRef.current;
      pos.style.setProperty("--x", `${deltaX}px`);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      pos.style.setProperty("--x", `0px`); // Reset the --x position after drag ends
      if (imageContainer) {
        imageContainer.classList.remove("dragging"); 
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  const moveCursor = (e) => {
    if (containerRef.current && customCursorRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      customCursorRef.current.style.left = `${e.clientX - rect.left}px`;
      customCursorRef.current.style.top = `${e.clientY - rect.top}px`;
    }
  };

  // Attach and clean up the mousemove event listener
  useEffect(() => {

    //Reset the image position  for --x property after reload to 0
    const pos = posRef.current;
    if (pos) {
     
      pos.style.setProperty('--x', '0px');
    }
 
    const container = containerRef.current;
    container.addEventListener("mousemove", moveCursor);

    return () => {
      container.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div ref={posRef} onMouseDown={onMouseDown} style={{ cursor: "grab" }}>
      <div id="image-container" ref={containerRef}>
        <div class="custom-cursor" ref={customCursorRef}></div>
      </div>
    </div>
  );
};

export default DraggableImg;
