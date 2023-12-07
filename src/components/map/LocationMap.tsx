'use client';

import type {FC} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface Props {
  latitude: number;
  longitude: number;
}

const LocationMap: FC<Props> = ({latitude, longitude}) => {
  return (
    <div className="w-full h-[300px]">
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        scrollWheelZoom={false}
        dragging={false}
        boxZoom
        zoomControl
        className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={Leaflet.icon({
            iconUrl: '/images/marker-icon.png',
            shadowUrl: '/images/marker-shadow.png'
          })}
          position={[latitude, longitude]}>
          <Popup>محل رستوران</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
