import React from "react";
import TextInput from "./TextInput.js";
import TextArea from "./TextArea.js";
import Label from "./Label.js";
import Header from "./Header.js";

function ContactForm() {
  return (
    <div className="Form">
      <form>
        <Header />
        <span>
          <Label name="Full Name" />
          <TextInput />
        </span>
        <span>
          <Label name="Phone" />
          <TextInput />
        </span>
        <span>
          <Label name="Email" />
          <TextInput />
        </span>
        <Label name="Notes" />
        <TextArea />
        <input type="Submit" value="Submit" onChange={alert("Yes")} />
      </form>
    </div>
  );
}

export default ContactForm;
