import React from "react";
import "../PhotoCard/PhotoCard.css";
import Star from "../../assets/Star.svg";
import LikeIcon from "../../assets/like-empty.svg";

function PhotoCard({ item }) {
  return (
    <li className="photo">
      <img src={item.imageUrl.href} alt={item.name} className="photo__img" />
      <div className="photo__overlay">
        <p className="photo__service">{item.service}</p>
        <img
          src={LikeIcon}
          alt="favorite button"
          className="photo__favorite-btn"
        />
      </div>
    </li>
  );
}

export default PhotoCard;
