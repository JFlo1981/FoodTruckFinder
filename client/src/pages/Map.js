import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map"

export default function foodTruck(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyBVgM3gh76mFt2sae6fupvXo8rzI8_pEos",
        libraries: ['places'],
    })

    if (!isLoaded) return <div>Loading...</div>
    return <Map />;
}