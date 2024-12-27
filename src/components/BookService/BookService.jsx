import React, { useState } from "react";
import "../BookService/BookService.css";
import Calendar from "../Calendar/Calendar";

function BookService({ handleCalendarModal }) {
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
          description:
            "Bold and dramatic look, featuring lightweight, fluffy lashes expertly fanned to create maximum fullness and density.",
        },
        {
          name: "Hybrid Fullset",
          time: "3.5",
          price: "180",

          description:
            "Perfect balance of natural and glam, a mix between classic and volume techniques, giving a textured, multi-dimensional look.",
        },
        {
          name: "Classic Fullset",
          time: "3",
          price: "150",
          description:
            "Timeless and elegant, enhances your natural beauty with individual lashes for a subtle, mascara-like effect.",
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
          description: "2-3 weeks touch up for volume extensions",
        },
        {
          name: "Hybrid Fill",
          time: "2",
          price: "90",
          description: "2-3 weeks touch up for hybrid extensions",
        },
        {
          name: "Classic Fill",
          time: "2",
          price: "80",
          description: "2-3 weeks touch up for classic extensions",
        },
        {
          name: "Mini Fill",
          time: "1",
          price: "60",
          description: "less than 10 days touchup for any extensions",
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
          description:
            "Semi-permanent treatment that curls and lifts your lashes for a stunning, eye-opening effect. Perfect for those seeking a low-maintenance alternative to lash extensions.",
        },
        {
          name: "add Tint",
          time: "1.5",
          price: "130",
          description:
            "Tinting enhances the color of the lashes, creating a fuller, darker, and more defined look without mascara.",
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
          description:
            "Tame and shape your brows, designed to smooth and lift your natural hairs for a fuller, more defined, and polished look.",
        },
        {
          name: "add Tint",
          time: "1",
          price: "120",
          description:
            "Enhance your brows' shape and color. Tinting defines brows that frame your face beautifully—ideal for effortless, long-lasting results.",
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
          description:
            "Removes unwanted hair from the upper lip for a smooth finish.",
        },
        {
          name: "underarms",
          time: "less than .5",
          price: "30",
          description: "Hair removal from both underarms for clean, soft skin.",
        },
        {
          name: "arms",
          time: ".5",
          price: "50",
          description:
            "Removes hair from both arms, leaving them silky and smooth.",
        },
        {
          name: "legs",
          time: "less than 1",
          price: "65",
          description:
            "Removes hair from both upper and lower legs for flawlessly smooth legs.",
        },
        {
          name: "brazillian",
          time: "less than 1",
          price: "90",
          description:
            "All hair is removed from the bikini area for a completely clean look.",
        },
      ],
    },
  ];

  const toggleButtons = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };
  return (
    <div className="bookservice__container">
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
                      onClick={handleCalendarModal}
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
    </div>
  );
}

export default BookService;
