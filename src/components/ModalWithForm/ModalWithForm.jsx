import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  isOpen,
  titleText,
  buttonText,
  name,
  onClose,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className={`modal__content modal__content_type_${name}`}>
        <h2 className="modal__title">{titleText}</h2>
        <button onClick={onClose} className="modal__close" type="button" />
        <form className="modal__form" onSubmit={() => {}} name={name}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
