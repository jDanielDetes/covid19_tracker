import React from 'react'
import { Circle, Popup } from "react-leaflet";


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


export const showDataOnMap2 =(data) =>(
    data.map(country =>(
        <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors.cases.hex}
        radius={Math.sqrt(country.cases) * casesTypeColors.cases.multiplier}
        >
          <Popup>
              <h1>popup</h1>
          </Popup>
        </Circle>
    ))
)