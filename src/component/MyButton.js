import React from "react";

export default function MyButton(props) {
  const {
    text,
    bgColor,
    textColor,
    padding,
    borderRadius,
    marginLeft,
    type,
    onClick,
    disabled,
  } = props;
  return (
    <button
      style={{
        padding: padding,
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: borderRadius,
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        marginLeft: marginLeft,
        border: "none",
        opacity: disabled ? 0.5 : 1,
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
