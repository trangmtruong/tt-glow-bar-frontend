import React from "react";
import "../SignUpModal/SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal() {
  return (
    <ModalWithForm titleText="Sign Up" buttonText="Sign Up" name={"sign-up"}>
      <label htmlFor="signupmodal-name" className="modal__input_type_name">
        Name*{" "}
        <input
          type="text"
          className="modal__input"
          id="signup-name"
          placeholder="Name"
          value={name}
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
        />
      </label>
      <button className="modal__submit" type="submit">
        Sign Up
      </button>
    </ModalWithForm>
  );
}

export default SignUpModal;
