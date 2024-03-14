import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import network_img from "../../assets/test_1.png";
import dashboard_v1 from "../../assets/test_2.png";
import "../../styles/variables.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCard = () => {
  let networkTitle = ["I", "N", "T", "R", "A", "L", "I", "N", "K"];
  let sportTitle = ["S", "P", "O", "R", "T", "S", "E", "E"];
  // useRef for networkTitle letters
  const networkTitleRef = useRef([]);
  // useRef for sportTitle letters
  const sportTitleRef = useRef([]);

  const parallaxContainerRef = useRef(null);

  const parallaxContainerrRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [networkUnderlineWidth, setNetworkUnderlineWidth] = useState(0);
  const [sportUnderlineWidth, setSportUnderlineWidth] = useState(0);
  const projectTitle = "A secure and streamlined platform designed to enhance corporate communications";

  const [isVisible, setIsVisible] = useState(false);
  const [isSecondTitleVisible, setSecondTitleIsVisible] = useState(false);
  const [isParallaxContainerVisible, setParallaxContainerVisible] = useState(false);
  // State to handle the hover effect
  const [isNetworkTitleHovered, setNetworkTitleIsHovered] = useState(false);
  const [isSportTitleHovered, setSportTitleIsHovered] = useState(false);
  // Event handlers
  const handleMouseEnterNetwork = () => setNetworkTitleIsHovered(true);
  const handleMouseLeaveNetwork = () => setNetworkTitleIsHovered(false);
  const handleMouseEnterSport = () => setSportTitleIsHovered(true);
  const handleMouseLeaveSport = () => setSportTitleIsHovered(false);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);




  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    let networkTotalWidth = 0;
    networkTitleRef.current.forEach((element) => {
      if (element) {
        const elementWidth = element.getBoundingClientRect().width;
        const style = window.getComputedStyle(element);
        const marginLeft = parseFloat(style.marginLeft);
        const marginRight = parseFloat(style.marginRight);

        networkTotalWidth += elementWidth + marginLeft + marginRight;
      }
    });
    setNetworkUnderlineWidth(networkTotalWidth);

    let sportTotalWidth = 0;
    sportTitleRef.current.forEach((element) => {
      if (element) {
        const elementWidth = element.getBoundingClientRect().width;
        const style = window.getComputedStyle(element);
        const marginLeft = parseFloat(style.marginLeft);
        const marginRight = parseFloat(style.marginRight);

        sportTotalWidth += elementWidth + marginLeft + marginRight;
      }
    });
    setSportUnderlineWidth(sportTotalWidth);
  }, []);

  /*need to handle the scrollY to display 
  services elements in the main page by adding visible class in jsx*/
  // const handleScroll = () => {
  //   const path = window.location.pathname;

  //   if (path === "/" && window.scrollY >= 2000) {
  //     setIsVisible(true);
  //   }

  //   if (path === "/" && window.scrollY >= 3300) {
  //     setSecondTitleIsVisible(true)
  //   };

  // };

  //to handle this more dynamically is by referencing actual element offsets
  // const homeOffset = document.querySelector('.home-anchor').offsetTop;
  // Then use `homeOffset` instead of `1900`

  const handleScroll = () => {
    ScrollTrigger.refresh();

    // const scrollY = window.scrollY + window.innerHeight;
    const scrollY = window.scrollY + window.innerHeight/2;
    if (parallaxContainerRef.current && scrollY >= parallaxContainerRef.current.offsetTop) {
      setIsVisible(true);
    }

    if (parallaxContainerrRef.current && scrollY >= parallaxContainerrRef.current.offsetTop) {
      setSecondTitleIsVisible(true);
    }
  };

  // const handleScroll = () => {
  //   const path = window.location.pathname;
  //   ScrollTrigger.refresh()

  //   // Conditions for Home ("/") Page
  //   if (path === "/") {
  //     if (window.scrollY >= 1900) {
  //       setIsVisible(true);
  //     }

  //     if (window.scrollY >= 3000) {
  //       setSecondTitleIsVisible(true);
  //     }
  //   }
  //   // Condition for Non-Home (other) Pages
  //   else {
  //     if (window.scrollY >= 200) {
  //       setIsVisible(true);
  //     }
  //     if (window.scrollY >= 1200) {
  //       setSecondTitleIsVisible(true);
  //     }
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNavBarVisible = sessionStorage.getItem("navBarVisible") === "true";

  /*CHECK FOR TEH SAME EFFECT IN ANOTHER COMPONENTS -TO DELETE?
  if the nabBar was clciked from the main page (state is save in sessionstorage ), 
  user will be redirected to the services section
  so need to rerun the display effect of the elements there
   */

  // useEffect(() => {
  //   let timeoutId;
  //   let parallaxTimeoutId;
  //   if (isNavBarVisible) {
  //     // Set a timeout before making the navigation bar visible
  //     timeoutId = setTimeout(() => {
  //       // setIsVisible(true);
  //       // setSecondTitleIsVisible(true);
  //     }, 1800);

  //   } else {
  //     setIsVisible(false);
  //     setSecondTitleIsVisible(false);
  //     // setParallaxContainerVisible(false)
  //   }

  //   return () => {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //     if(parallaxTimeoutId){
  //       clearTimeout(parallaxTimeoutId)
  //     }
  //   };
  // }, [isNavBarVisible]);

  const underlineDelay = networkTitle.length * 0.07 + 0.14;
  const secondUnderlineDelay = sportTitle.length * 0.07 + 0.14;
  const descriptionDelay = underlineDelay + 1;
  const secondDescriptionDelay = secondUnderlineDelay + 1;
  // console.log(underlineDelay)

  // Split the text by newlines to work with individual lines
  const wrapTextIntoLines = (text, style) => {
    return text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="line">
        {line}
      </span>
    ));
  };

  const text = `A STREAMLINED COLLABORATION APP \nDESIGNED TO ENHANCE CORPORATE COMMUNICATIONS AND TEAMWORK.\nSECURE,PRIVATE AND EXCLUSIVE TO ORGANISATION MEMBERS.`;
  const project_Title = "CHARTPLAY ANALYTICS IS AN ULTIMATE HUB FOR FITNESS ACTIVITES MONITORING.\nREAL TIME CHARTS FOR IN DEPTH PERFORMANCE ANALYSIS.";
  const wrappedText = wrapTextIntoLines(text);
  const secondText = wrapTextIntoLines(project_Title);
  const testElementRef = useRef(null);






  useEffect(() => {
    const initAnimations = () => {
      // Network Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".parallax-container .scroll-content", 
            start: "top bottom",
            scrub: true,
            onEnter: () => console.log("Network onEnter"),
            onLeave: () => console.log("Network onLeave"),
          },
        })
        .to(".parallax-container .scroll-content", { yPercent: -250, ease: "none" });

      // Sport Animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".parallax-containerr .scroll-content", 
            start: "top bottom",
            scrub: true,
            onEnter: () => console.log("Sport onEnter"),
            onLeave: () => console.log("Sport onLeave"),
          },
        })
        .to(".parallax-containerr .scroll-content", { yPercent: -250, ease: "none" });
    };

    const timeoutId = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timeoutId);
      gsap.killTweensOf(".scroll-content");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    // <div className={`parallax-container ${isVisible ? "visible" : ""}`} >
    //   <Controller>
    //     <Scene duration={"100%"} triggerHook={0.2} pin triggerElement={".test"}>
    //       <div className="test" style={{ display: "flex", width: "50%", flexDirection: "column", height: "100vh", position: "relative 0!important" }}>
    //         <span className="fixed-content" onMouseEnter={handleMouseEnterNetwork} onMouseLeave={handleMouseLeaveNetwork}>
    //           {networkTitle.map((letter, index) => {
    //             const style = { transitionDelay: `${index * 0.07}s` };
    //             return (
    //               <span key={index} className={`fixed-content-letter ${isVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
    //                 {letter}
    //               </span>
    //             );
    //           })}
    //           <div className={`underline ${isVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth, transitionDelay: `${underlineDelay}s` }} />
    //           <div className="project-card-title">

    //             <p className={`project-card-content ${isVisible ? "visible" : ""}`}> {wrappedText}</p>
    //           </div>
    //         </span>
    //         <span className="fixed-contentt" onMouseEnter={handleMouseEnterSport} onMouseLeave={handleMouseLeaveSport}>
    //           {sportTitle.map((letter, index) => {
    //             const style = { transitionDelay: `${index * 0.07}s` };
    //             return (
    //               <span key={index} className={`fixed-content-letter ${isSecondTitleVisible ? "visible" : ""}`} ref={(el) => (sportTitleRef.current[index] = el)} style={style}>
    //                 {letter}
    //               </span>
    //             );
    //           })}
    //           <div className={`underline ${isSecondTitleVisible ? "visible" : ""}`} style={{ width: sportUnderlineWidth, transitionDelay: `${secondUnderlineDelay}s` }} />
    //           <div className="project-card-title">
    //             <p className={`project-card-content ${isSecondTitleVisible ? "visible" : ""}`}> {secondText}</p>
    //           </div>
    //         </span>
    //       </div>
    //     </Scene>
    //   </Controller>

    //   {/* Scrollable content */}
    //   <div className="scroll-content">
    //     <div className="top-right">
    //       <img className={`img ${isNetworkTitleHovered ? "scaled" : ""}`} src={network_img} alt="" />
    //     </div>

    //     <div className="bottom-right">
    //       <img className={`img ${isSportTitleHovered ? "scaled" : ""}`} src={dashboard_v1} alt="" />
    //     </div>
    //   </div>
    // </div>

    <>
      <div className={`parallax-container ${isVisible ? "visible" : ""}`} ref={parallaxContainerRef}>
        <div className="test" style={{ display: "flex", width: "100%", flexDirection: "column" }}>
          <span className="fixed-content" onMouseEnter={handleMouseEnterNetwork} onMouseLeave={handleMouseLeaveNetwork}>
            {networkTitle.map((letter, index) => {
              const style = { transitionDelay: `${index * 0.07}s` };
              return (
                <span key={index} className={`fixed-content-letter ${isVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
                  {letter}
                </span>
              );
            })}
            <div className={`underline ${isVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth, transitionDelay: `${underlineDelay}s` }} />
            <div className="project-card-title">
              <p className={`project-card-content ${isVisible ? "visible" : ""}`}> {wrappedText}</p>
            </div>
          </span>
        </div>

        {/* Scrollable content */}

        <div className="scroll-content">
          <div className="top-right">
    <img className={`img ${isNetworkTitleHovered && !isMobileView ? "scaled" : ""}`} src={network_img} alt="" />
          </div>
        </div>

      </div>

      <div className={`parallax-containerr ${isVisible ? "visible" : ""}`} ref={parallaxContainerrRef}>
        <div className="testt" style={{ display: "flex", width: "100%", flexDirection: "column" }}>
          <span className="fixed-contentt" onMouseEnter={handleMouseEnterSport} onMouseLeave={handleMouseLeaveSport}>
            {sportTitle.map((letter, index) => {
              const style = { transitionDelay: `${index * 0.07}s` };
              return (
                <span key={index} className={`fixed-content-letter ${isSecondTitleVisible ? "visible" : ""}`} ref={(el) => (sportTitleRef.current[index] = el)} style={style}>
                  {letter}
                </span>
              );
            })}
            <div className={`underline ${isSecondTitleVisible ? "visible" : ""}`} style={{ width: sportUnderlineWidth, transitionDelay: `${secondUnderlineDelay}s` }} />
            <div className="project-card-title">
              <p className={`project-card-content ${isSecondTitleVisible ? "visible" : ""}`}> {secondText}</p>
            </div>
          </span>
        </div>

        {/* Scrollable content */}
        <div className="scroll-content">
          <div className="bottom-right">
            <img className={`img ${isSportTitleHovered && !isMobileView ? "scaled" : ""}`} src={dashboard_v1} alt="" />
          </div>
        </div>
      </div>

      {/* 
      <div className={`parallax-containerr ${isVisible ? "visible" : ""}`}>
        <Controller>
          <Scene duration={"100%"} triggerHook={0} pin triggerElement={".testt"} >
            <div className="testt" style={{ display: "flex", width: "100%", flexDirection: "column", height: "100vh", position: "relative 0!important" }}>
                    <span className="fixed-contentt" onMouseEnter={handleMouseEnterSport} onMouseLeave={handleMouseLeaveSport}>
             {sportTitle.map((letter, index) => {
               const style = { transitionDelay: `${index * 0.07}s` };
               return (
                 <span key={index} className={`fixed-content-letter ${isSecondTitleVisible ? "visible" : ""}`} ref={(el) => (sportTitleRef.current[index] = el)} style={style}>
                   {letter}
                 </span>
               );
             })}
             <div className={`underline ${isSecondTitleVisible ? "visible" : ""}`} style={{ width: sportUnderlineWidth, transitionDelay: `${secondUnderlineDelay}s` }} />
             <div className="project-card-title">
               <p className={`project-card-content ${isSecondTitleVisible ? "visible" : ""}`}> {secondText}</p>
             </div>
           </span>
            </div>
          </Scene>
        </Controller>

        <div className="scroll-content">
             <div className="bottom-right">
         <img className={`img ${isSportTitleHovered ? "scaled" : ""}`} src={dashboard_v1} alt="" />
        </div>
        </div>
      </div> */}
    </>
  );
};

export default ProjectCard;

// {/* <div className="parallax-container visible"> */}
// <Controller>
// {/* <div className={`parallax-container ${isVisible ? "visible" : ""}`}> */}
//   <div className="parallax-container">
//     <Scene triggerHook={0}  pin={true} triggerElement={".test" } >
//       {/* <div ref={testElementRef}  className="test" style={{ display: "flex", width: "100%", flexDirection: "column"}}>
//         <span className="fixed-content" onMouseEnter={handleMouseEnterNetwork} onMouseLeave={handleMouseLeaveNetwork}>
//           {networkTitle.map((letter, index) => {
//             const style = { transitionDelay: `${index * 0.07}s` };
//             return (
//               <span key={index} className={`fixed-content-letter ${isVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
//                 {letter}
//               </span>
//             );
//           })}
//           <div className={`underline ${isVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth, transitionDelay: `${underlineDelay}s` }} />
//           <div className="project-card-title">
//             <p className={`project-card-content ${isVisible ? "visible" : ""}`}> {wrappedText}</p>
//           </div>
//         </span>
//       </div> */}
//       {(progress, event) => {
//     // Use progress and event to debug your ScrollMagic behavior
//     console.log(progress, event);
//     return (
//       <div ref={testElementRef}  className="test" style={{ display: "flex", width: "100%", flexDirection: "column"}}>
//       <span className="fixed-content" onMouseEnter={handleMouseEnterNetwork} onMouseLeave={handleMouseLeaveNetwork}>
//         {networkTitle.map((letter, index) => {
//           const style = { transitionDelay: `${index * 0.07}s` };
//           return (
//             <span key={index} className={`fixed-content-letter ${isVisible ? "visible" : ""}`} ref={(el) => (networkTitleRef.current[index] = el)} style={style}>
//               {letter}
//             </span>
//           );
//         })}
//         <div className={`underline ${isVisible ? "visible" : ""}`} style={{ width: networkUnderlineWidth, transitionDelay: `${underlineDelay}s` }} />
//         <div className="project-card-title">
//           <p className={`project-card-content ${isVisible ? "visible" : ""}`}> {wrappedText}</p>
//         </div>
//       </span>
//     </div>
//     );
//   }}
//     </Scene>
//   {/* Scrollable content */}
//   <div className="scroll-content">
//     <div className="top-right">
//       <img className={`img ${isNetworkTitleHovered ? "scaled" : ""}`} src={network_img} alt="" />
//     </div>
//   </div>
// </div>
//   </Controller>
