import React, { useRef, useState, useCallback, useEffect } from "react";

// import { motion, useMotionValue, useTransform } from "framer-motion";
import video from "../../assets/video.mp4";

import "./style.css";

const DraggableImg = () => {
  const containerRef = useRef(null);
  const customCursorRef = useRef(null);

  // Assuming the container scales to 120%
  const containerScaleFactor = 1.2;
  // Calculate the inverse scale factor
  const invertScaleFactor = 1 / containerScaleFactor;

  //test

  const disableTransition = () => {
    if (containerRef.current) {
      containerRef.current.style.transition = "none";
    }
  };

  // Function to restore transitions
  const enableTransition = () => {
    if (containerRef.current) {
      // Replace this with the actual transition styles you wish to restore
      containerRef.current.style.transition = "transform 1s cubic-bezier(0.62,0.05,0.01,0.99),clip-path 1.25s cubic-bezier(0.62,0.05,0.01,0.99)";
    }
  };

  const posRef = useRef();
  const startPosRef = useRef();

  const onMouseDown = useCallback(
    (e) => {
      const pos = posRef.current;
      startPosRef.current = e.clientX; // Store the starting X position

      const imageContainer = containerRef.current;
      if (imageContainer && customCursorRef.current) {
        imageContainer.classList.add("dragging");
        imageContainer.style.transform = `scaleY(1.2)`;
        customCursorRef.current.classList.add("cursor-dragging");
      }

      const onMouseMove = (moveEvent) => {
        disableTransition();
        const deltaX = moveEvent.clientX - startPosRef.current;
        pos.style.setProperty("--x", `${deltaX}px`);
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        //   pos.style.setProperty("--x", `0px`); // Reset the --x position after drag ends
        //   if (imageContainer) {
        //     imageContainer.classList.remove("dragging");
        //   }
        requestAnimationFrame(() => {
          pos.style.setProperty("--x", `0px`);
          if (imageContainer && customCursorRef.current) {
            imageContainer.classList.remove("dragging");
            customCursorRef.current.classList.remove("cursor-dragging");
            imageContainer.style.transform = ""; // Remove the inline transform style
            enableTransition();
          }
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [disableTransition, enableTransition]
  );

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
      pos.style.setProperty("--x", "0px");
    }

    const container = containerRef.current;
    container.addEventListener("mousemove", moveCursor);

    return () => {
      container.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="image-container-wrapper" ref={posRef} onMouseDown={onMouseDown} style={{ cursor: "grab" }}>
      <div id="image-container" ref={containerRef}>
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div class="custom-cursor" ref={customCursorRef}></div>
      </div>
      {/* <div class="custom-cursor" ref={customCursorRef}></div> */}
    </div>
  );
};

export default DraggableImg;
