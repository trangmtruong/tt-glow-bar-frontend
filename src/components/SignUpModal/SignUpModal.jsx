import React, { useState } from "react";
import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({ isOpen, onClose }) {
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
        />
      </label>
      <label htmlFor="signupmodal-email" className="modal__input_type_email">
        Email*{""}
        <input
          type="text"
          className="modal__input"
          id="signupmodal-email"
          placeholder="Email"
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
        />
      </label>
      <button className="modal__submit" type="submit">
        Sign Up
      </button>
    </ModalWithForm>
  );
}

export default SignUpModal;
