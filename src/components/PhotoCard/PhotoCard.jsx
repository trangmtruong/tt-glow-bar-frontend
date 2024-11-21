import React from "react";
import "../PhotoCard/PhotoCard";
import CameraLashes from "../../assets/CameraLashes";
import Star from "../../assets/Star";

function PhotoCard() {
  return (
    <li className="photo">
      <div className="photo__overlay">
        <img src={Star} alt="favorite button" className="photo__favorite-btn" />
      </div>
      <img src={CameraLashes} alt="" className="photo__img" />
    </li>
  );
}

export default PhotoCard;
