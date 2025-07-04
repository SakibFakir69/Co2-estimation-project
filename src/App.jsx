import { useState } from "react";
import Map from "./map/Map";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PositionAndDestinationInput from "./page/PositionAndDestinationInput";

function App() {
  return (
    <div className=" border p-4">

      <div className="border p-4 grid md:grid-cols-12 md:grid-rows-2 md:order-1 gap-4">

        <section className="border p-2 md:col-span-4">
          <PositionAndDestinationInput />
        </section>

        <section className="border  md:col-span-8">
          <Map />
        </section>

      </div>
    </div>
  );
}

export default App;
