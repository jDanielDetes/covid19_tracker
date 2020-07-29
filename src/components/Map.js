import React from "react";
import "../assets/css/Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import stateContext from "../StateProvider";

function Map({ center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright"> OpenStreetMap</> contributors'
        />
      </LeafletMap>
    </div>
  );
}

export default Map;