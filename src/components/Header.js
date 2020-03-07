import React from "react";

function Header(props) {
  return (
    <div className="Header">
      <h1>{props.name}</h1>
      <p>{props.instruction}</p>
    </div>
  );
}

export default Header;
