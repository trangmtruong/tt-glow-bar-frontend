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
          time: "3.5",
          price: "200",
          descriptiom: "volume set",
        },
        {
          name: "Hybrid Fullset",
          time: "3.5",
          price: "180",

          description: "Mix between classic and fans",
        },
        {
          name: "Classic Fullset",
          time: "3",
          price: "150",
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
          time: "2",
          price: "100",
          description: "2-3 weeks touch up",
        },
        {
          name: "Hybrid Fill",
          time: "2",
          price: "90",
          description: "2-3 weeks touch up",
        },
        {
          name: "Classic Fill",
          time: "2",
          price: "80",
          description: "2-3 weeks touch up",
        },
        {
          name: "Mini Fill",
          time: "1",
          price: "60",
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
          time: "1",
          price: "100",
          description: "lash lift description",
        },
        {
          name: "add Tint",
          time: "1.5",
          price: "130",
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
          time: "less than 1",
          price: "90",
          description: "brow lam description",
        },
        {
          name: "add Tint",
          time: "1",
          price: "120",
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
          time: "less than .5",
          price: "15",
          description: "lip wax description",
        },
        {
          name: "underarms",
          time: "less than .5",
          price: "30",
          description: "underarm wax description",
        },
        {
          name: "arms",
          time: ".5",
          price: "50",
          description: "arm wax description",
        },
        {
          name: "legs",
          time: "less than 1",
          price: "65",
          description: "leg wax description",
        },
        {
          name: "brazillian",
          time: "less than 1",
          price: "90",
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
                    <div className="bookservice__price">
                      {option.time} hours @ ${option.price}
                    </div>
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
