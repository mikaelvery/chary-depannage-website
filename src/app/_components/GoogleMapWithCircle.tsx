'use client';

import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const center = { lat: 49.1193, lng: 6.1757 }; 
const radius = 35000; 

const containerStyle = {
  width: '100%',
  height: '250px',
};

export default function GoogleMapWithCircle() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        <Circle
          center={center}
          radius={radius}
          options={{
            strokeColor: '#BD9F6E',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#BD9F6E',
            fillOpacity: 0.25,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}
