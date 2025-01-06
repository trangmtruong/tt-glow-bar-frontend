import React from "react";
import "./Map.css";
import { APIProvider } from "@vis.gl/react-google-maps";

function Map() {
  return (
    <APIProvider
      apiKey={"Your API key here"}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <h1>Hello, world!</h1>
    </APIProvider>
  );
}

export default Map;
