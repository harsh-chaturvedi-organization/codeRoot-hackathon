import React,{useState} from "react";
import axios from "axios";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

// import { formatRelative } from "date-fns";
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

export const Customer = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const [user,setUser] = React.useState(center)
    const [venderLocation,setVenderLocation] = useState([])

    const onMapClick = React.useCallback((e) => {
        setUser(
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          }
        );
    
    })
    
    const getVCendoras = () => {
        axios.get("http://localhost:3002/user/nearByVenders")
        .then(resp=>setVenderLocation(resp.data))
        // .then(resp=>console.log(resp.data))

      }
    
      if (loadError) return "Error";
      if (!isLoaded) return "Loading...";


    return (
        <div>
            <div>
                <p>choose your  location on map</p>
                <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={options}
          onClick={onMapClick}
        >
          <Marker
            key={`${user.lat}-${user.lng}`}
            position={{ lat: user.lat, lng: user.lng }}
                    />
                    
        {venderLocation.map((vender) => (
          <Marker
          key={`${+(vender.location.lat)}-${+(vender.location.long)}`}
            position={{ lat: vender.location.lat, lng: vender.location.long }}
            onClick={() => {
              setSelected(vender);
            }}
            icon={{
              url: `/bear.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(15, 15),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: +selected.location.lat, lng: +selected.location.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>{" "}
              </h2>
                                <div>
                                    <p>{ selected.name}</p>
                                    <p>{ selected.addresss}</p>
               </div>
            </div>
          </InfoWindow>
        ) : null}


        </GoogleMap>
            </div>
            <div>
                <button className="vanderSubmit" onClick={getVCendoras}>findVendors</button>
            </div>
            </div>
    )
}