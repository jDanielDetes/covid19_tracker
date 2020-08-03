import React from 'react'
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral"; // to format numbers in a certain way


const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 800,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000,
    },
}


export const showDataOnMap2 =(data) => (
    
    data.map(country =>(
        
        <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors.cases.hex}
        radius={Math.sqrt(country.cases) * casesTypeColors.cases.multiplier}
        >
          <Popup>
          <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="info-recovered">
                        Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info-deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}</div>
                </div>
          </Popup>
        </Circle>
    ))
     
)


  
