import React, { useState } from "react";

function TextArea(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
    if (props.onChange) props.onChange(inputValue);
  }

  return (
    <div>
      <textarea
        type={inputType}
        value={inputValue}
        name="TextArea"
        onChange={handleChange}
        className="inputclass"
      />
    </div>
  );
}

export default TextArea;
