

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Store_Timeline } from '../../utils/consents.ts';
import L from 'leaflet';

const DefaultIcon = new L.Icon({
  iconUrl: "/assets/images/location-pin.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapLine = () => {
  const center: [number, number] = [19.366, 72.805];

  return (
    <MapContainer

      center={center}
      zoom={11}
      scrollWheelZoom={false}
      doubleClickZoom={true} 
      style={{ height: '500px', width: '100%'  }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {Store_Timeline.map((store, index) => (
        <Marker
          key={index}
          position={[store.lat, store.lng]}
          eventHandlers={{
            mouseover: (e) => e.target.openPopup(), // Open popup on hover
            mouseout: (e) => e.target.closePopup(), // Close popup when not hovering
            dblclick: (e) => e.originalEvent.stopPropagation(), // Prevent double-click zoom on marker
          }}
        >
          <Popup autoClose={false} closeOnClick={false}>
            <strong>{store.title}</strong>
            <br />
            {store.description || 'No description available.'}
            <br />
            <em>Year: {store.year}</em>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapLine;
