import React from "react";
import "../Craftmanship/Craftmanship";
import PhotoCard from "../PhotoCard/PhotoCard";
import { clientData } from "../../utils/constants";

function Craftmanship() {
  return (
    <section className="craftmanship__content">
      <p className="craftmanship__text">Beauty Portfolio:</p>
      <ul className="craftmanship__list">
        {/*filter clientsphotos here:
        ex: clientPhotos.filter((item)....*/}
        <PhotoCard />
      </ul>
    </section>
  );
}

export default Craftmanship;
