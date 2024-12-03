import React, { useState } from "react";
import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({ isOpen, onClose }) {
  //useState Hooks
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      titleText="Sign Up"
      buttonText="Sign Up"
      name={"sign-up"}
      onClose={onClose}
    >
      <label htmlFor="signupmodal-name" className="modal__input_type_name">
        Name*{" "}
        <input
          type="text"
          className="modal__input"
          id="signup-name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="signupmodal-email" className="modal__input_type_email">
        Email*{""}
        <input
          type="text"
          className="modal__input"
          id="signupmodal-email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label
        htmlFor="signupmodal-password"
        className="modal__input_type_password"
      >
        Password*{""}
        <input
          type="password"
          className="modal__input"
          id="signupmodal-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button className="modal__submit" type="submit">
        Sign Up
      </button>
    </ModalWithForm>
  );
}

export default SignUpModal;
