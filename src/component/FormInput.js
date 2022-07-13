import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onChange,
    id,
    style,
    marginLeft,
    ...inputProps
  } = props;

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
        marginLeft: marginLeft,
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
        }}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
