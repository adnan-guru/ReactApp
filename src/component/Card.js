import React from "react";

export const Card = ({ children, bgColor,textColor }) => (
  <div style={{
    marginTop:'10px'
  }}>
    <div
      style={{
        backgroundColor: bgColor,
      padding:'20px',
        borderRadius: "10px",
        width: "400px",
        minHeight:'100px',
        textColor:textColor
        
      }}
    >
      {children}
    </div>
  </div>
);
