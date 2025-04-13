import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DefaultIcon = new L.Icon({
  iconUrl: "/assets/images/location-pin.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Project {
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
  name: string;
  year: number | null;
  description: string;
  mapArray?: Project[];
}

const MapLine: React.FC<Props> = ({
  lat,
  lng,
  mapArray = [],
  description,
  name,
  year,
}) => {
  const center: [number, number] = [lat, lng];

  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${name}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div
      className="map-container"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
        position: "relative",
      }}
    >
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        style={{ height: "100%", width: "100%" }}
        className="leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[lat, lng]}
          eventHandlers={{
            mouseover: (e) => e.target.openPopup(),
            mouseout: (e) => e.target.closePopup(),
            dblclick: (e) => e.originalEvent.stopPropagation(),
            click: handleMarkerClick,
          }}
          title={name} // Add title attribute to show name on hover
        >
          <Popup autoClose={false} closeOnClick={false}>
            <strong>{name}</strong>
            <br />
            {description || "No description available."}
            <br />
            <em>Year: {year}</em>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLine;
