import React, { useRef, useState, useCallback, useEffect } from "react";
import video from "../../assets/video.mp4";
import "../../styles/variables.css";
import "./style.css";

const DraggableImg = () => {
  const containerRef = useRef(null);
  const customCursorRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 900);

  // Handler to check the Mobile view
  useEffect(() => {
    const handleResize = () => {
   
      setIsMobileView(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const disableTransition = () => {
    if (containerRef.current) {
      containerRef.current.style.transition = "none";
    }
  };

  // Function to restore transitions
  const enableTransition = () => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 1s cubic-bezier(0.62,0.05,0.01,0.99),clip-path 1.25s cubic-bezier(0.62,0.05,0.01,0.99)";
    }
  };

  const posRef = useRef();
  const startPosRef = useRef();

  const onMouseDown = useCallback(
    (e) => {
      if (isMobileView) return;
      disableTransition();
      const pos = posRef.current;
      startPosRef.current = e.clientX; // Store the starting X position

      const imageContainer = containerRef.current;
      if (imageContainer) {
        enableTransition();
        imageContainer.classList.add("dragging");
        imageContainer.style.transform = `scaleY(1.2)`;
      }

      const onMouseMove = (moveEvent) => {
        disableTransition();
        const deltaX = moveEvent.clientX - startPosRef.current;
        pos.style.setProperty("--x", `${deltaX}px`);
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        requestAnimationFrame(() => {
          pos.style.setProperty("--x", `0px`);
          if (imageContainer) {
            imageContainer.classList.remove("dragging");

            imageContainer.style.transform = ""; // Remove the inline transform style
            enableTransition();
          }
        });
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [isMobileView, disableTransition, enableTransition]
  );

  const moveCursor = (e) => {
    if (isMobileView || !containerRef.current || !customCursorRef.current) return;
    if (containerRef.current && customCursorRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      customCursorRef.current.style.left = `${e.clientX - rect.left}px`;
      customCursorRef.current.style.top = `${e.clientY - rect.top}px`;
    }
  };

  // Attach and clean up the mousemove event listener
  useEffect(() => {
    //Reseted the image position  for --x property after reload to 0
    const pos = posRef.current;

    const container = containerRef.current;

    if (!container) return;

    if (pos && !isMobileView) {
      pos.style.setProperty("--x", "0px");
    }

    if (!isMobileView) {
      container.addEventListener("mousemove", moveCursor);
    }
    return () => {
      container.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobileView, moveCursor]);

  return (
    <div className="image-container-wrapper" ref={posRef} onMouseDown={onMouseDown} style={{ cursor: "grab" }}>
      <div id="image-container" ref={containerRef}>
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={`custom-cursor ${isMobileView ? "hide-cursor" : ""}`} ref={customCursorRef}></div>
      </div>
    </div>
  );
};

export default DraggableImg;
