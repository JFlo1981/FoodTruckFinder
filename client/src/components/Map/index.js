import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../MapStyle";
import austinData from "../data";
import pic from "../icon.svg";
import { Link } from "@chakra-ui/react";
// import marker from "../Marker";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "70vh",
};
const center = {
  lat: 30.2672,
  lng: -97.7431,
};

const options = {
  styles: mapStyles,
};

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const forceUpdate = useForceUpdate();
  const [selected, setSelected] = React.useState(null);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
      >
        {austinData.map((truck) => (
          <Marker
            key={truck.id}
            position={{
              lat: truck.coordinates.latitude,
              lng: truck.coordinates.longitude,
            }}
            icon={{
              url: pic,
              scaledSize: new window.google.maps.Size(70, 70),
            }}
            onClick={() => {
              setSelected(truck);
            }}
          />
        ))}

        {selected && (
          <InfoWindow
            position={{
              lat: selected.coordinates.latitude,
              lng: selected.coordinates.longitude,
            }}
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
          </InfoWindow>
        )}

        {/* <Marker position={{ lat: 30.2672, lng: -97.7431 }} icon={{
              url: pic,
              scaledSize: new window.google.maps.Size(30,30),
            }}></Marker> */}

        {/* {console.log(austinData[0].coordinates.latitude)} */}
      </GoogleMap>
    </div>
  );
}

export default React.memo(App);
