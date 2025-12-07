import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FindUs() {
  const [mapPosition, setMapPosiion] = useState([11, 10]);
  return (
    <div className="space-y-4 bg-gray-50 px-10 py-15 text-center">
      <h2>Find Us</h2>
      <p>Visit our beautiful campus in the heart of Learning City</p>

      <div className="m-auto my-5 flex h-[20rem] flex-col items-center justify-center space-y-3 rounded-xl bg-gray-200 md:w-[60rem]">
        <div className="relative z-30 flex h-full w-full flex-1">
          <MapContainer
            center={mapPosition}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
              <Popup>
                Demonstration Primary. <br /> And Secondary School Azare.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default FindUs;
