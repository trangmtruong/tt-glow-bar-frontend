import React from "react";
import "./Craftmanship.css";
import PhotoCard from "../PhotoCard/PhotoCard";
import { clientData } from "../../utils/constants";

function Craftmanship() {
  return (
    <section className="craftmanship__content">
      <h2 className="craftmanship__title">Beauty Portfolio</h2>
      <ul className="craftmanship__list">
        {clientData.map((item) => {
          return <PhotoCard key={item.imageUrl} item={item} />;
        })}
      </ul>
    </section>
  );
}

export default Craftmanship;
