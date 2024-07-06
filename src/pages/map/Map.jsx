import React from 'react';

import { IconButton, Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import * as Leaflet from 'leaflet';

import '../../assets/css/mapa.css';
import poiData from './data/POIData';

const Map = () => {
  const LeafIcon = Leaflet.Icon.extend({
    options: {},
  });

  const greenIcon = new LeafIcon({
    iconUrl: 'https://i.postimg.cc/hPShFWR8/location-Pin.png',
    popupAnchor: [23, 0],
  });
  return (
    <Grid container>
      <Grid className="containerBotao">
        <IconButton color="primary" aria-label="Voltar" href="/">
          <ArrowBackIosNewIcon />
        </IconButton>
      </Grid>
      <Grid container>
        <MapContainer
          className="leaflet-container"
          center={[-3.744212747433668, -38.54183660836403]}
          zoom={11}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {poiData.map((poi) => (
            <POI key={poi.id} lat={poi.lat} long={poi.long} text={poi.text} icon={greenIcon} />
          ))}
        </MapContainer>
      </Grid>
    </Grid>
  );
};

const POI = (props) => {
  const { lat, long, icon, text } = props;
  return (
    <Marker key={1} position={[lat, long]} icon={icon}>
      <Popup position={[lat, long]}>{text}</Popup>
    </Marker>
  );
};

export default Map;
