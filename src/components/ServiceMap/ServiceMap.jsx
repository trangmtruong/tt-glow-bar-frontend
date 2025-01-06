import React from "react";
import "./ServiceMap.css";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

function ServiceMap() {
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
