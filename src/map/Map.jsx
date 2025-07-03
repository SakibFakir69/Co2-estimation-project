import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  console.log("map load");
  return (
    <div>
      <MapContainer
        center={[23.8103, 90.4125]}
        style={{ height: "400px", width: "100%", maxWidth: "600px" }}
        zoom={13}
        scrollWheelZoom={true}
        className="max-w-lg py-20"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
