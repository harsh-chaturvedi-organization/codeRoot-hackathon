import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState } from "react";

const Maps = ({ google }) => {
    const containerStyle = {
        position: "relative",
        width: "500px",
        height: "500px",
    };

    const Center = {
        lat: 23.488745,
        lng: 80.104507,
    };
    const [mapCenter, setMapCenter] = useState(Center);


    const mapClicked = (google) =>{
        console.log(google)
    }
    return (
        <Map
            onClick={()=>mapClicked(google)}
            containerStyle={containerStyle}
            google={google}
            zoom={14}
            initialCenter={{
                lat: 23.488745,
                lng: 80.104507,
            }}
            center={{
                lat: mapCenter.lat,
                lng: mapCenter.lng,
            }}
        >
            <Marker
                name={"Sihora"}
                position={{
                    lat: mapCenter.lat,
                    lng: mapCenter.lng,
                }}
            />
            <Marker />
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyC3xVwRAUfOTYGJ9JsB3yJLxzwHZatEVR8",
})(Maps);

// import React, { useState } from 'react';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';

// const MapContainer = ({google}) => {

//     const [address,setAddress] = useState("")
//     const [showingInfoWindow, setshowingInfoWindow] = useState(false)
//     const [activeMarker,setactiveMarker] = useState({})
//     const [selectedPlace, setselectedPlace] = useState({})
//     const Center= {
//         lat: 49.2827291,
//         lng: -123.1207375
//     }
//     const [mapCenter,setMapCenter] = useState({Center})

//    const handleChange = address => {
//     setAddress({ address });
//     };

//     const handleSelect = address => {
//         setAddress(address);
//         geocodeByAddress(address)
//             .then(results => getLatLng(results[0]))
//             .then(latLng => {
//                 console.log('Success', latLng);

//                 // update center state
//                 setMapCenter({latLng});
//             })
//             .catch(error => console.error('Error', error));
//     };

// return (
//             <div id='googleMaps'>
//                 <PlacesAutocomplete
//                     value={address}
//                     onChange={handleChange}
//                     onSelect={handleSelect}
//                 >
//                     {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                         <div>
//                             <input
//                                 {...getInputProps({
//                                     placeholder: 'Search Places ...',
//                                     className: 'location-search-input',
//                                 })}
//                             />
//                             <div className="autocomplete-dropdown-container">
//                                 {loading && <div>Loading...</div>}
//                                 {suggestions.map(suggestion => {
//                                     const className = suggestion.active
//                                         ? 'suggestion-item--active'
//                                         : 'suggestion-item';
//                                     // inline style for demonstration purpose
//                                     const style = suggestion.active
//                                         ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                                         : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                                     return (
//                                         <div
//                                             {...getSuggestionItemProps(suggestion, {
//                                                 className,
//                                                 style,
//                                             })}
//                                         >
//                                             <span>{suggestion.description}</span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     )}
//                 </PlacesAutocomplete>

//                 <Map
//                     google={google}
//                     initialCenter={{
//                                         lat: 23.488745,
//                                         lng: 80.104507,
//                                     }}
//                     // center={{
//                     //     lat: mapCenter.lat,
//                     //     lng: mapCenter.lng
//                     // }}
//                 >
//                     {/* <Marker
//                         position={{
//                             lat: mapCenter.lat,
//                             lng: mapCenter.lng
//                         }} /> */}
//                 </Map>
//             // </div>
//         )
// }

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyC3xVwRAUfOTYGJ9JsB3yJLxzwHZatEVR8')
// })(MapContainer)
