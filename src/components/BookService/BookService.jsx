import React, { useState } from "react";
import "../BookService/BookService.css";

function BookService() {
  const [activeButton, setActiveButton] = useState(null);

  const services = [
    {
      id: "fullsets",
      label: "Lash Extensions/Fullsets",
      subOptions: ["Volume Fullset", "Hybrid Fullset", "Classic Fullset"],
    },
    {
      id: "fills",
      label: "Lash Fills",
      subOptions: ["Volume Fill", "Hybrid Fill", "Classic Fill", "Mini Fill"],
    },
    {
      id: "lashlift",
      label: "Lash Lift",
      subOptions: ["add Tint"],
    },
    {
      id: "browlam",
      label: "Brow Lamination",
      subOptions: ["add Tint"],
    },
    {
      id: "hairremoval",
      label: "Hair Removal/Waxing",
      subOptions: ["Lip", "Underarm", "Arms", "Legs", "Bikini"],
    },
  ];

  const toggleButtons = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };
  return (
    <div>
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
                  <p key={index}>{option}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookService;
