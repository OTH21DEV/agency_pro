import React from "react";
import "../../styles/variables.css";
import "./style.css";

const Heading = ({  text }) => {
  let creates = ["C", "R", "E", "A", "T", "E", "S"];
  let builds = ["B", "U", "I", "L", "D", "S"];
  let and = ["&"];

  const baseDelayAnd = creates.length * 0.07;
  const style = { transitionDelay: `${baseDelayAnd + 0.07}s` };

  return (
    <div className="heading-section">
      {/* Heading titles */}
        {/* Group "creates" and "and"together so they can wrap together */}
      <div className="heading-creates-and-wrapper">
        {creates.map((lettre, key) => {
          const style = { transitionDelay: `${key * 0.07}s` };
          return (
            <span key={key} className="heading-letter" style={style}>
              {lettre}
            </span>
          );
        })}
        <span style={{ margin: "0 10px" }}></span>
      
        <div className="heading-word-and-wrapper">
          <span className="heading-word-and" style={style}>
            {and}
          </span>
        </div>
      </div>

      {/* Builds word */}
      <div className="heading-builds-text-wrapper">
        {builds.map((lettre, key) => {
          const baseDelayCreates= creates.length * 0.07;
          const style = { transitionDelay: `${baseDelayCreates + key * 0.07}s` };
          return (
            <div key={key} className="builds-container">
              <span className="heading-letter" style={style}>
                {lettre}
              </span>
            </div>
          );
        })}
        {/* Additional text */}
        <div className="heading-text" style={style}>
          {text}
        </div>
      </div>
    </div>
  );
};
export default Heading;
