'use client'

import L from 'leaflet'

import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'
import movita from "../public/movitaLogo.png";

const Map = () => {

    const [coord, setCoord] = useState([39.94967778553595, 32.772994993249114])

    const SearchLocation = () => {
        return (
            <div className="search-location">
                <input type="text" placeholder="Search Location" />
            </div>
        )
    }

    const GetMyLocation = () => {
      const getMyLocation = () => {
        console.log("burası çalıştı");
        if (navigator.permissions) {
          navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            console.log("granted");
            if (result.state === 'granted') {
              navigator.geolocation.getCurrentPosition((position) => {
                setCoord([position.coords.latitude, position.coords.longitude]);
                console.log("New Coordinates:", [position.coords.latitude, position.coords.longitude]);
              });
            } else if (result.state === 'prompt') {
              // Kullanıcıya izin sor
              navigator.geolocation.getCurrentPosition((position) => {
                setCoord([position.coords.latitude, position.coords.longitude]);
                console.log("New Coordinates:", [position.coords.latitude, position.coords.longitude]);
              }, (error) => {
                console.error(error);
              });
            } else if (result.state === 'denied') {
              console.error('Geolocation permission denied.');
            }
          });
        } else if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            setCoord([position.coords.latitude, position.coords.longitude]);
            console.log("New Coordinates:", [position.coords.latitude, position.coords.longitude]);
          });
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
    
      return (
        <div className="get-my-location">
          <button onClick={getMyLocation}>Get My Location</button>
        </div>
      );
    }

    return (
        <div className='border w-full h-full'>
            <MapContainer className='w-full h-[480px]' center={coord} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: movita.src,
                        iconRetinaUrl: movita.src,
                        iconSize: [60, 60],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        
                    })
                } position={[39.94967778553595, 32.772994993249114]}>
                     <Popup className='text-accent font-bold'>
                       Movita
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
