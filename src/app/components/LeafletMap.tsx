"use client";

// @ts-nocheck
import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function LeafletMap() {
  return (
    <MapContainer
      style={{ width: "250px", height: "250px" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable
        </Popup>
      </Marker>
    </MapContainer>
  );
}
