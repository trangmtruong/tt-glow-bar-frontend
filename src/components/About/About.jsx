import React from "react";
import "../About/About.css";
import aboutMePhoto from "../../assets/CameraLashes.png";
function About() {
  return (
    <>
      <div className="about__container">
        <img className="about__photo" src={aboutMePhoto} alt="About Me Photo" />
        <div className="about__info">
          Hello! I'm T.T., a licensed esthetician and certified lash artist
          since 2020. Operating from my home studio in downtown San Diego, I'm
          dedicated to enhancing your natural beauty. Let your eyes do the
          talking!
        </div>
      </div>
    </>
  );
}

export default About;
