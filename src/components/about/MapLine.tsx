import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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

interface MapArrayValue {
  name: string;
  location: string;
  description: string;
  lat: number;
  lng: number;
  year: number | null;
}

interface Props {
  lat: number;
  lng: number;
  mapArray?: MapArrayValue[];
}

const MapLine: React.FC<Props> = ({ lat, lng, mapArray = [] }) => {
  const center: [number, number] = [lat, lng];

  console.log('lat', lat)
  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {mapArray.map((store, index) => (
        <Marker
          key={index}
          position={[store.lat, store.lng]}
          eventHandlers={{
            mouseover: (e) => e.target.openPopup(),
            mouseout: (e) => e.target.closePopup(),
            dblclick: (e) => e.originalEvent.stopPropagation(),
          }}
        >
          <Popup autoClose={false} closeOnClick={false}>
            <strong>{store.name}</strong>
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
