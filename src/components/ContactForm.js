import React from "react";
import TextInput from "./TextInput.js";
import TextArea from "./TextArea.js";
import Label from "./Label.js";
import Header from "./Header.js";
import "./form.css";

function ContactForm() {
  return (
    <div className="form">
      <form>
        <Header
          name="Contact Me"
          instruction="This is where you would write some informational text that would your user with their experience."
        />
        <Label name="Full Name" />
        <TextInput placeholder="Enter Name Here" />

        <Label name="Phone" />
        <TextInput
          type="tel"
          placeholder="000-000-0000"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />

        <Label name="Email" />
        <TextInput type="email" placeholder="Enter your email here" />

        <Label name="Notes" />
        <TextArea placeholder="Enter any important notes here" />
        <button
          type="Submit"
          value="Submit"
          onChange={alert("Input your onchange function here")}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
