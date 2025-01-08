import React, { useState } from "react";
import "../PhotoCard/PhotoCard.css";

import LikeIcon from "../../assets/like-empty.svg";
import IsLikedIcon from "../../assets/islikedicon-red.svg";

function PhotoCard({ item }) {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => setIsLiked((prevLiked) => !prevLiked);
  return (
    <li className="photo">
      <img src={item.imageUrl.href} alt={item.name} className="photo__img" />
      <div className="photo__overlay">
        <p className="photo__service">{item.service}</p>
        <img
          src={isLiked ? IsLikedIcon : LikeIcon}
          alt={isLiked ? "unfavoritte button" : "favorite button"}
          className="photo__favorite-btn"
          onClick={toggleLike}
        />
      </div>
    </li>
  );
}

export default PhotoCard;
