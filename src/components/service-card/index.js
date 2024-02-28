import React, { useEffect, useState, useRef } from "react";
import arrow_down from "../../assets/arrow_down.png";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

function ServiceCard({ number, title, style, description, bulletPoints, isOpen, index, onClick }) {
  const cn = bem("Plan");

  return (
    <div className="service-card" style={{ borderTop: index === 0 ? "2px solid grey" : undefined, marginTop: index === 0 ? "85px" : undefined }}>
      <div className="service-card-header" onClick={onClick}>
        <div className="service-card-header-wrapper">
          <span>{number}</span>
          <p>{title}</p>
        </div>
        <div className="toggle-button">
          <span className={`bar horizontal ${isOpen ? "open" : ""}`}></span>
          <span className={`bar vertical ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
      <div className={`service-card-content ${isOpen ? "open" : "closed"}`}>
        {bulletPoints.map((point, index) => (
          <React.Fragment key={index}>
            {point.split(/:(.+)/).map((chunk, chunkIndex) => (
              <span key={chunkIndex}>{chunkIndex === 0 ? <strong>{chunk}:</strong> : chunk}</span>
            ))}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
