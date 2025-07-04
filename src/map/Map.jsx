import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Map() {
  console.log("map load");
  return (
    <div className="w-full h-[400px]">
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>
            Develop by sakib . <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
