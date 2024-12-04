import React, { useState } from "react";
import "../BookService/BookService.css";

function BookService() {
  const [activeButton, setActiveButton] = useState(null);

  const services = [
    {
      id: "fullsets",
      label: "Lash Extensions/Fullsets",
      subOptions: [
        {
          name: "Volume Fullset",
          price: "3.5 hours @ $200",
          descriptiom: "volume set",
        },
        {
          name: "Hybrid Fullset",
          price: "3.5 hours @ $180",
          description: "Mix between classic and fans",
        },
        {
          name: "Classic Fullset",
          price: "3 hours @ $150",
          description: "Natural look",
        },
      ],
    },
    {
      id: "fills",
      label: "Lash Fills",
      subOptions: [
        {
          name: "Volume Fill",
          price: "2 hours @ $100",
          description: "2-3 weeks touch up",
        },
        {
          name: "Hybrid Fill",
          price: "2 hours @ $90",
          description: "2-3 weeks touch up",
        },
        {
          name: "Classic Fill",
          price: "2 hours @ $80",
          description: "2-3 weeks touch up",
        },
        {
          name: "Mini Fill",
          price: "1 hour @ $60",
          description: "less than 10 days touchup",
        },
      ],
    },
    {
      id: "lashlift",
      label: "Lash Lift",
      subOptions: [
        {
          name: "no Tint",
          price: "1 hour @ $100",
          description: "lash lift description",
        },
        {
          name: "add Tint",
          price: "1 hour 15 minutes @ $130",
          description: "lash lift and tint description",
        },
      ],
    },
    {
      id: "browlam",
      label: "Brow Lamination",
      subOptions: [
        {
          name: "no Tint",
          price: "45 minutes @ $90",
          description: "brow lam description",
        },
        {
          name: "add Tint",
          price: "1 hour @ $130",
          description: "brow lam and tint description",
        },
      ],
    },
    {
      id: "hairremoval",
      label: "Hair Removal/Waxing",
      subOptions: [
        {
          name: "lips",
          price: "10 minutes @ $15",
          description: "lip wax description",
        },
        {
          name: "underarms",
          price: "15 minutes @ $30",
          description: "underarm wax description",
        },
        {
          name: "arms",
          price: "30 minutes @ $50",
          description: "arm wax description",
        },
        {
          name: "legs",
          price: "45 minutes @ $65",
          description: "leg wax description",
        },
        {
          name: "brazillian",
          price: "45 minutes @ $90",
          description: "brazillian description",
        },
      ],
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
                  <div key={index}>
                    <label className="bookservice__name">{option.name}</label>
                    <div className="bookservice__price">{option.price}</div>
                    <div className="bookservice__description">
                      {option.description}
                    </div>
                    <button className="bookservice__select-btn" type="button">
                      Select
                    </button>
                  </div>
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
