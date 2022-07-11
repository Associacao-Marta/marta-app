import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as L from "leaflet";

import "../../assets/css/mapa.css";

export default function Mapa() {
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const greenIcon = new LeafIcon({
    iconUrl:
      "https://i.postimg.cc/hPShFWR8/location-Pin.png",
      popupAnchor:  [23, 0]
  });
  
  return (
    <MapContainer
      className="leaflet-container"
      center={[-3.744212747433668, -38.54183660836403]}
      zoom={11}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker key={1} position={[-3.743922925095978, -38.541993132884365]} icon={greenIcon}>
        <Popup position={[-3.743922925095978, -38.541993132884365]}>
          <h2>
            Juizado de Violência Doméstica e Familiar Contra a Mulher de
            Fortaleza
          </h2>
          <p>
            <b>Endereço:</b> Av. da Universidade, 3281 - Benfica, Fortaleza -
            CE, 60020-180
          </p>
          <p>
            <b>Horário de Funcionamento:</b> 8h às 18h de segunda à sexta
          </p>
          <p>
            <b>Contato:</b> (85) 3433-8785
          </p>
        </Popup>
      </Marker>

      <Marker key={2} position={[-3.7574475125827997, -38.5597002463776]} icon={greenIcon}>
        <Popup position={[-3.7574475125827997, -38.5597002463776]}>
          <h2>Casa da Mulher Brasileira do Ceará</h2>
          <p>
            <b>Endereço:</b> Rua Teles de Souza, s/n - Couto Fernandes
          </p>
          <p>
            <b>Horário de Funcionamento:</b> Plantão 24h todos os dias{" "}
          </p>
          <p>
            <b>Contatos:</b> (85) 3108.2992 / (85) 3108.2931
          </p>
        </Popup>
      </Marker>

      <Marker key={3} position={[-3.7576203035266804, -38.559672895010564]} icon={greenIcon}>
        <Popup position={[-3.7576203035266804, -38.559672895010564]}>
          <h2>Delegacia de Defesa da Mulher de Fortaleza (DDM-FOR)</h2>
          <p>
            <b>Endereço:</b> R. Tabuleiro do Norte, s/n - Couto Fernandes,
            Fortaleza - CE, 60442-040
          </p>
          <p>
            <b>Horário de Funcionamento:</b> Plantão 24h todos os dias Contatos:
            (85)
          </p>
          <p>
            <b>Contato:</b> 3108- 2950 / (85) 3108-2952
          </p>
        </Popup>
      </Marker>

      <Marker key={4} position={[-3.7370471888837784, -38.6521364445283]} icon={greenIcon}>
        <Popup position={[-3.7370471888837784, -38.6521364445283]}>
          <h2>Delegacia de Defesa da Mulher de Caucaia (DDM-C)</h2>
          <p>
            <b>Endereço:</b> Rua Porcina Leite, 113 - Parque Soledade
          </p>
          <p>
            <b>Horário de Funcionamento:</b> Plantão 24h todos os dias
          </p>
          <p>
            <b>Contato:</b> (85) 3101-7926
          </p>
        </Popup>
      </Marker>

      <Marker key={5} position={[-3.8742427892731737, -38.62722027521255]} icon={greenIcon}>
        <Popup position={[-3.8742427892731737, -38.62722027521255]}>
          <h2>Delegacia de Defesa da Mulher de Maracanaú (DDM-M)</h2>
          <p>
            <b>Endereço:</b> Rua Padre José Holanda do Vale, 1961 (Altos) -
            Piratininga
          </p>
          <p>
            <b>Horário de Funcionamento:</b> Plantão 24h todos os dias
          </p>
          <p>
            <b>Contato:</b> (85) 3371-7835
          </p>
        </Popup>
      </Marker>

      <Marker key={6} position={[-3.890583666654657, -38.60849826107439]} icon={greenIcon}>
        <Popup position={[-3.890583666654657, -38.60849826107439]}>
          <h2>Delegacia de Defesa da Mulher de Pacatuba (DDM-PAC)</h2>
          <p>
            <b>Endereço:</b> Rua Marginal Nordeste, 836 - Jereissati III
          </p>
          <p>
            <b>Horário de Funcionamento:</b> Plantão 24h todos os dias
          </p>
          <p>
            <b>Contatos:</b> (85) 3384-5820 / (85) 3384-4203
          </p>
        </Popup>
      </Marker>

      <Marker key={7} position={[-3.727026031412932, -38.50320863103518]} icon={greenIcon}>
        <Popup position={[-3.727026031412932, -38.50320863103518]}>
          <h2>
            Centro de Referência e Apoio à Vítima de Violência - CRAVV / SPS
          </h2>
          <p>
            <b>Endereço:</b> Silva Paulet, nº 334, Meireles
          </p>
          <p>
            <b>Horário de Funcionamento:</b> Plantão 24h todos os dias
          </p>
          <p>
            <b>Contato:</b> (85) 3101-5104
          </p>
        </Popup>
      </Marker>

      <Marker key={8} position={[-3.773119785664548, -38.47817404452804]} icon={greenIcon}>
        <Popup position={[-3.773119785664548, -38.47817404452804]}>
          <h2>Instituto Maria da Penha - IMP</h2>
          <p>
            <b>Endereço:</b> Rua Tereza Cristina, 1375 – Centro
          </p>
          <p>
            <b>Contato:</b> (85) 4102-5429
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
