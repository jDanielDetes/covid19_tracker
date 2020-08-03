import React, { Component, useState, useEffect } from "react";
import DataCharts from "../components/DataCharts";
import "../mainPage.css";
import LiveCasesChart from "../components/LiveCasesChart";
import Map from "../components/Map";
import "leaflet/dist/leaflet.css";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import axios from "axios";
import CovidContext from "../CovidContext";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

function MainPage() {
  const [mapCenter, setMapCenter] = useState({ lat: 38, lng: -97 });
  const [mapZoom, setMapZoom] = useState(3);
  const [globalData, setGlobalData] = React.useState([]);

  useEffect(() => {
    axios.get(API).then((res) => {
      setGlobalData(res.data);
      console.log(res);
    });
  }, []);
  const API = `https://disease.sh/v3/covid-19/countries`;

  const value = React.useMemo(
    () => ({
      globalData,
    }),
    [globalData]
  );

  const test = globalData;

  return (
    <div className="mainApp">
      <CovidContext.Provider value={value}>
        <div className="right__data">
          <DataCharts data={test} />
          <Map center={mapCenter} zoom={mapZoom} countries={test} />
        </div>
        <div className="left__data">
          <LiveCasesChart />
        </div>
      </CovidContext.Provider>
    </div>
  );
}

export default MainPage;
