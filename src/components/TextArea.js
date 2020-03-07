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
        className="textArea"
        placeholder={props.placeholder}
        pattern={props.pattern}
      />
    </div>
  );
}

export default TextArea;
