import React from "react";
import "../assets/css/Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import stateContext from "../StateProvider";
import CovidContext from "../CovidContext";
import { Circle, Popup } from "leaflet";

function Map({ center, zoom }) {
  return (
    <div>
      <CovidContext.Consumer>
        {(country) => {
            console.log(country.globalData[1])
           
            const showDataOnMap=() =>{
                
                {country.globalData.map((counties)=>(
                    
                  
                  
                    <Circle center={[counties.countryInfo.lat,counties.countryInfo.long]}
                    fillOpacity={0.4}
                    color= {"#CC1034"}
                    fillColor={"#CC1034"}
                   
                    radius={0}
                    key={counties.countryInfo._id}
                   >
                    
                    </Circle>
          
                
           
            
          ))}
                
            }



          return (
            <div className="map">
              <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright"> OpenStreetMap</> contributors'
                />
                {/* {Loop through countries and draw circles on the screen} */}
                {showDataOnMap()}
              </LeafletMap>
             
            </div>
          );
        }}
      </CovidContext.Consumer>
    </div>
  );
}

export default Map;
