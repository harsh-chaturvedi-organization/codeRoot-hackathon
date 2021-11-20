import React, { useState } from "react"
import axios from "axios"
import "./vender.css"
// map info--------------------
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "400px",
};

const options = {
  zoomControl: true,
};
const center = {
  lat: 23.488745,
  lng: 80.104507,
};

// --------------------------------
export default function Vendor({email}) {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  });
  const [marker, setMarkers] = React.useState(center);


  // const [shop, setShop] = useState("");
  const [address, setadd] = useState("")

  const onMapClick = React.useCallback((e) => {
    setMarkers(
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      }
    );

  })

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      lat:marker.lat,
      long:marker.lng,
      address,
      email:email,
      time: new Date()
    }
    axios.patch(`http://localhost:3002/vendor/updateLocation`,data)
    .then(resp=>console.log("success"))
  }


  return (
    <div style={{ display: "grid", gridTemplateColumns: "100%" }}>

      <div >
        <p>choose shop location on map</p>
        <div style={{width:"40%"}}>
        <GoogleMap
          id="map"
          
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={options}
          onClick={onMapClick}
        >
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        </GoogleMap>
        </div>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="shopDetails">
            <textarea className="shopInput" onChange={e => setadd(e.target.value)} id="w3review" name="" rows="2" cols="20">
              enter shop address
            </textarea>
          </div>
          <input className="shopSubmit" type="submit" />
        </form>
      </div>
    </div>

  )
}