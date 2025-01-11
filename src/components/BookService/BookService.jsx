import React, { useState } from "react";
import "../BookService/BookService.css";
import Calendar from "../Calendar/Calendar";
import ServiceMap from "../ServiceMap/ServiceMap";
import { services } from "../../utils/constants";

function BookService({ handleCalendarModal }) {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedSrc, setSelectedSrc] = useState(null);

  const handleSelectedCalendarSrc = (src) => {
    setSelectedSrc(src);
  };

  const toggleButtons = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };
  return (
    <div className="bookservice__container">
      <h3 className="bookservice__deposit">
        Deposit Policy
        <p className="bookservice__text">
          To secure your appointment, a deposit of 50% of the service price is
          required at the time of booking. Please send the deposit via{" "}
          <a
            className="bookservice__venmo"
            href="https://www.venmo.com/tranggang"
            target="_blank"
          >
            Venmo
          </a>
          (@tranggang) to confirm your reservation.
        </p>
        <p className="bookservice__note">
          Note: Deposits are non-refundable and will be applied toward your
          final service cost. Appointments without a deposit will not be
          confirmed.
        </p>
      </h3>
      <h2 className="bookservice__title">Select Service:</h2>
      <div className="bookservice__list">
        {services.map((service) => (
          <div key={service.id} className="bookservice__button-container">
            <button
              className="bookservice__button"
              onClick={() => toggleButtons(service.id)}
            >
              {service.label}
            </button>
            {activeButton === service.id && (
              <div className="bookservicer__hidden-options">
                {service.subOptions.map((option, index) => (
                  <div className="bookservice__service" key={index}>
                    <label className="bookservice__name">{option.name}</label>
                    <div className="bookservice__price">
                      {option.time} hours @ ${option.price}
                    </div>
                    <div className="bookservice__description">
                      {option.description}
                    </div>

                    <button
                      onClick={() => {
                        handleSelectedCalendarSrc(option.src);
                        handleCalendarModal;
                      }}
                      className="bookservice__select-btn"
                      type="button"
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedSrc && (
        <div className="bookservice__map">
          <div className="bookservice__map-container">
            <ServiceMap />
          </div>
        </div>
      )}
    </div>
  );
}

export default BookService;
