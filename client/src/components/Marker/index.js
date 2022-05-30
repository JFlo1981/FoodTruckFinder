
import React from "react";
import { Link } from "@chakra-ui/react";
import austinData from "../data";
import pic from "../icon.svg";
import {Marker} from "@react-google-maps/api";


 const marker = () =>{
     return(<div>{austinData.map((truck) => (
        <Marker
          key={truck.id}
          position={{
            lat: truck.coordinates.latitude,
            lng: truck.coordinates.longitude,
          }}
          icon={{
            url: pic,
            scaledSize: new window.google.maps.Size(70,70),
          }}
        //   onClick={() =>{
        //     setSelected(truck);
           
        //   }}
          
          
        />
      ))}
      
    
      {/* {selected && (<InfoWindow  position={{ lat: selected.coordinates.latitude, lng: selected.coordinates.longitude}}
      onCloseClick={() => {
        setSelected(null);
      }}
      >
        <div>
          <h2>{selected.name}</h2>
          <p>Rating: {selected.rating} stars</p>
          <p>{selected.location.display_address}</p>
          <Link href={"/truck"}>View Truck</Link>
        </div>
      </InfoWindow>) } */}
      </div>
    
 )}
 
 export default marker;