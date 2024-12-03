import React, { useState } from "react";
import "./SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({ isOpen, onClose }) {
  //useState Hooks

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
      onClose={onClose}
      titleText="Sign In"
      buttonText="Sign In"
      name={"sign-in"}
    >
      <label htmlFor="signinmodal-email" className="modal__input_type_email">
        Email{""}
        <input
          type="text"
          className="modal__input"
          id="signinmodal-email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label
        htmlFor="signinmodal-password"
        className="modal__input_type_password"
      >
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="signinmodal-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button className="modal__submit" type="submit">
        Sign In
      </button>
    </ModalWithForm>
  );
}

export default SignInModal;
