import React, { useRef, useState, useCallback, useEffect } from "react";
// import contact_bg from "../../assets/contact_bg.jpg";
// import { motion, useMotionValue, useTransform } from "framer-motion";
import video from "../../assets/video.mp4"
// import video from "../../assets/video_1.mp4"
import "./style.css";

const DraggableImg = () => {
    const containerRef = useRef(null);
  const customCursorRef = useRef(null);




  // Assuming the container scales to 120%
  const containerScaleFactor = 1.2; 
  // Calculate the inverse scale factor
  const invertScaleFactor = 1 / containerScaleFactor;

  useEffect(() => {
    const adjustCursorScale = () => {
      if (customCursorRef.current && containerRef.current) {
        // Check if the container has the 'dragging' class
        const isDragging = containerRef.current.classList.contains('dragging');
        
        // Apply inverted scale to cursor if the container is scaling
        customCursorRef.current.style.transform = 
          isDragging ? `scaleY(${invertScaleFactor})` : '';
      }
    };
  
    // Observe class changes on the image container to adjust the cursor
    const observer = new MutationObserver(adjustCursorScale);
    
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }

    // Clean up the observer on component unmount or if containerRef changes
    return () => {
      observer.disconnect();
    };

  // Include containerRef in the dependency array to reconnect observer if ref changes
  }, [containerRef]);



    //


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
    <div className="image-container-wrapper"ref={posRef} onMouseDown={onMouseDown} style={{ cursor: "grab" }}>
      <div id="image-container" ref={containerRef}>

   {/* Video tag added here */}
   <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* End of video tag */}

        <div class="custom-cursor" ref={customCursorRef}></div>
      </div>
    </div>
  );
};

export default DraggableImg;
