import React, { useState } from "react";

function TextInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
    if (props.onChange) props.onChange(inputValue);
  }

  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        className="inputclass"
      />
    </>
  );
}

export default TextInput;
