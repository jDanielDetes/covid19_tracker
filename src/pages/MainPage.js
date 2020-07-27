import React, { Component, useState } from "react";
import DataCharts from "../components/DataCharts";
import "../mainPage.css";
import LiveCasesChart from "../components/LiveCasesChart";
import Map from "../components/Map";
import "leaflet/dist/leaflet.css";

function MainPage() {
const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796})
const [mapZoom,setMapZoom] = useState(3)

  return (
    <div>
      <Map center={mapCenter} zoom={mapZoom} />
    </div>
  );
}

export default MainPage;
