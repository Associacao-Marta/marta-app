import React from 'react';

import { Button, Grid } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import * as Leaflet from 'leaflet';

import '../../styles/mapa.css';
import poiData from './data/POIData';
import BackButton from '../../components/BackButton';

const Map = () => {
  const LeafIcon = Leaflet.Icon.extend({
    options: {},
  });

  const greenIcon = new LeafIcon({
    iconUrl: 'https://i.postimg.cc/hPShFWR8/location-Pin.png',
    popupAnchor: [23, 0],
  });
  return (
    <div>
      <Grid container>
        <BackButton />
        <Grid container>
          <MapContainer
            className="leaflet-container"
            style={{ zIndex: 0 }}
            center={[-3.744212747433668, -38.54183660836403]}
            zoom={11}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {poiData.map((poi) => (
              <POI
                key={poi.id}
                phone={poi.phone}
                lat={poi.lat}
                long={poi.long}
                text={poi.text}
                icon={greenIcon}
              />
            ))}
          </MapContainer>
        </Grid>
      </Grid>
    </div>
  );
};

const POI = (props) => {
  const { lat, long, icon, text, phone } = props;
  return (
    <Marker key={1} position={[lat, long]} icon={icon}>
      <Popup position={[lat, long]}>
        <>
          {text}
          <Button
            href={`tel:${phone}`}
            variant="contained"
            autoFocus
            color="success"
            style={{ color: 'white', borderRadius: 8 }}>
            LIGAR
          </Button>
        </>
      </Popup>
    </Marker>
  );
};

export default Map;
