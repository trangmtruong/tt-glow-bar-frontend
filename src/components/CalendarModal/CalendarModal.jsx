import React, { useState } from "react";
import "../CalendarModal/CalendarModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Calendar from "../Calendar/Calendar";
import { services } from "../../utils/constants";

function CalendarModal({ isOpen, onClose, selectedSrc }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      titleText="Booking Calendar"
      name={"book-calendar"}
    >
      <Calendar selectedSrc={selectedSrc} />
    </ModalWithForm>
  );
}

export default CalendarModal;
