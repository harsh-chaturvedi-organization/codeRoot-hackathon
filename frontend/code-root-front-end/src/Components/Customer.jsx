import React, { useState } from "react";
import axios from "axios";
import "./Customer.css";
import { Button } from "@mui/material";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// import { formatRelative } from "date-fns";
const mapContainerStyle = {
  height: "400px",
  width: "600px",
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
    googleMapsApiKey: "AIzaSyC3xVwRAUfOTYGJ9JsB3yJLxzwHZatEVR8",
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [user, setUser] = React.useState(center);
  const [venderLocation, setVenderLocation] = useState([]);

  const [showClicked, setShowClicked] = useState({})
  const [showProducts, setShowProducts] = useState(false)

  const onMapClick = React.useCallback((e) => {
    setUser({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  });

  const getVCendoras = () => {
    axios.get("http://localhost:3002/user/nearByVenders").then((resp) => {
      console.log(typeof resp.data);
      resp.data.map((e) => console.log(typeof e.location[0]));
      setVenderLocation(resp.data);
    });
    // .then(resp=>console.log(resp.data))
  };

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  // give vendor info
  function getVendorInfo(email) {
    axios.get(`http://localhost:3002/vendor/information/${email}`)
      .then(resp => {
        setShowClicked(resp.data)
        setShowProducts(true)
      })
  }

  return (
    <>
    <div>
      <div style={{marginLeft:"-150px"}}>
        <p>choose your location on map</p>
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
              key={`${vender.location[0]}-${vender.location[1]}`}
              position={{ lat: vender.location[0], lng: vender.location[1] }}
              onClick={() => {
                setSelected(vender);
              }}
              icon={{
                url: `/76c4ecaf04185f2b3fc2e1047121eca1.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(25, 25),
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={{
                lat: selected.location[0],
                lng: selected.location[1],
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div onClick={() => {
                getVendorInfo(selected.email)
              }}>
                <h2>
                  <img src="76c4ecaf04185f2b3fc2e1047121eca1.svg" alt="" style={{ height: "20px", width: "20px", position: "relative" }} />
                </h2>
                <div>
                  <p>Name: {selected.name}</p>
                  <p>Adress: {selected.address}</p>
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
      <div>
        <button className="vanderSubmit" onClick={getVCendoras}>
          findVendors
        </button>
      </div>
    </div>
     {/* products details */}
    <div className="locationMainDiv">
        {/* <button onClick={() => setShowProducts(!showProducts)}>{showProducts ? "Hide" : "Show"}</button> */}
        <Button style={{margin:"10px"}} onClick={() => setShowProducts(!showProducts)} variant="contained">{showProducts ? "Hide Details" : "Show Details"}</Button>

        {showProducts ?
          (<div style={{ display: showProducts ? "block" : "none",marginBottom:"100px",boxShadow:"5px 5px 15px gray" }}>
            <div className="venderLocationInfo">
              <img src={showClicked.vendor.imageUrl} style={{ height: "100px", width: "100px",margin:"10px" }} alt="user" />
              <div>
                <h3>VENDOR : {showClicked.vendor.name}</h3>
                <h3>Address : {showClicked.vendor.address}</h3>
              </div>
            </div>
            <div className="productDetailsOfLocatedVender">
              {
                showClicked.productDetails.map(item => (
                  <div className="itemDiv">
                    <img src={`uploads/${item.image}`} className="productImage" alt="productImage"/>
                    <div>
                      <p>Product Name : {item.name}</p>
                      <p>Price : {item.price}</p>
                      <p>quantity : {item.quantity}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>):""}

      </div>
    </>

  );
};
