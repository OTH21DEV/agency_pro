import React, { useEffect } from "react";

import "./style.css";

const PageTrasitionWrapper = ({ children }) => {
  useEffect(() => {
    // Trigger the enter animation on mount.
    const body = document.body;
    // body.classList.remove("fade-out");
    body.classList.add("fade-in");
    return () => {
      // Prepare to trigger the exit animation.
      body.classList.remove("fade-in");
    //   body.classList.add("fade-out");
    };
  }, []);
  return children
};


export default PageTrasitionWrapper;
