import React, { useRef, useEffect } from "react";
import { Gradient } from "whatamesh"

const Canva = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []); // Empty dependency array means this runs once on mount

  return <canvas  id="gradient-canvas" data-js-darken-top data-transition-in></canvas>;
};

export default Canva;
