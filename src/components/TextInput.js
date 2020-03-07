import React, { useState } from "react";

function TextInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
    if (props.onChange) props.onChange(inputValue);
  }

  return (
    <div>
      <input
        type={inputType}
        value={inputValue}
        onChange={handleChange}
        placeholder={props.placeholder}
        className="inputclass"
      />
    </div>
  );
}

export default TextInput;
