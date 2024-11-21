import React from "react";
import "../PhotoCard/PhotoCard.css";
import CameraLashes from "../../assets/CameraLashes.png";
import Star from "../../assets/Star.svg";

function PhotoCard() {
  return (
    <li className="photo">
      <div className="photo__overlay">
        <img src={Star} alt="favorite button" className="photo__favorite-btn" />
      </div>
      <img src={CameraLashes} alt="Photo" className="photo__img" />
    </li>
  );
}

export default PhotoCard;
