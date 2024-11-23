import React, { useState } from "react";
import "../SignInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal() {
  return (
    <ModalWithForm titleText="Sign In" buttonText="Sign In" name={"sign-in"}>
      <label htmlFor="signinmodal-email" className="modal__input_type_email">
        Email{""}
        <input
          type="text"
          className="modal__input"
          id="signinmodal-email"
          placeholder="Email"
          value={email}
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
        />
      </label>
      <button className="modal__submit" type="submit">
        Sign In
      </button>
    </ModalWithForm>
  );
}

export default SignInModal;
