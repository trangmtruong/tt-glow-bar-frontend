import React from "react";
import "./ServiceMap.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

function ServiceMap() {
  const REACT_APP_GOOGLE_MAPS_API_KEY =
    "AIzaSyCP1Z64ib5RrQfhKj5NTQePKxtHPoXC8oc";
  return (
    <APIProvider
      apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        style={{ width: "40vw", height: "40vh" }}
        defaultCenter={{ lat: 32.716104568561185, lng: -117.15790170019419 }}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
}

//32.716104568561185, -117.15790170019419

export default ServiceMap;
