import React, { useState, useEffect } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";
import arrow_white from "../../assets/arrow_white.png";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

//   useEffect(() => {
//     window.addEventListener("scroll", checkScrollTop);
//     return function cleanup() {
//       window.removeEventListener("scroll", checkScrollTop);
//     };
//   });
useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

//   return (
//     <div className="scrollTop" onClick={scrollTop} style={{ opacity: showScroll ? 1 : 0 }}>
//       <img src={arrow_white} alt=""></img>
//     </div>
//   );
return (
    <div
      className={`scrollTop ${showScroll ? 'show' : ''}`}
      onClick={scrollTop}
    >
      <img src={arrow_white} alt=""></img>
    </div>
  );
};

export default ScrollTop;
