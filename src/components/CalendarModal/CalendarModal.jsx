import React, { useState } from "react";
import "../CalendarModal/CalendarModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Calendar from "../Calendar/Calendar";

function CalendarModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      titleText="Booking Calendar"
      name={"book-calendar"}
    >
      <Calendar />
    </ModalWithForm>
  );
}

export default CalendarModal;
