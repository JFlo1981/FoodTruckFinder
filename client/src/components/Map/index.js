import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from "@react-google-maps/api"
import mapStyles from "../MapStyle"
import austinData from "../data"
import pic from "../marker.png"

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "70vh",
};
const center ={
  lat: 30.2672,
  lng: -97.7431,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};


export default function App () {
  const {isLoaded, loadError}= useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });


  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";


  return <div>
    
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} >
     {/* {austinData.map((truck) =>(
       <Marker key={truck.id} position={{lat: 30.2672, lng:-97.7431 ,}} icon={{url: "/Marker.svg",}}/>
     
     ))}  */}

     <Marker
     position={{lat:30.2672, lng: -97.7431 }} icon={"/Marker.svg"}></Marker>
     
     
     {console.log(austinData[0].coordinates.latitude)}
    </GoogleMap>
  </div>;
}
