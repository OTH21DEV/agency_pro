import React from "react";
import arrow_big from "../../assets/arrow_down_outline.png";
import "./style.css";
import "../../styles/variables.css";

const ArrowBig = () => {
  return (
    <div className="arrow-big">
      <img src={arrow_big} alt="" className="arrow-big-img"></img>
    </div>
  );
};

export default ArrowBig;
