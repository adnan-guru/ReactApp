import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, style, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          inputProps.type === "radio"
            ? "row"
            : inputProps.type === "checkbox"
            ? "row"
            : "column",
        marginLeft: inputProps.type === "radio" && "15px",
      }}
    >
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        style={{
          padding: "15px",
          marginTop:
            inputProps.type === "radio"
              ? "3px"
              : inputProps.type === "checkbox"
              ? "3px"
              : "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
