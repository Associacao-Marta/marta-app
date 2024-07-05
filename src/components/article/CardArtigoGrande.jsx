import React from 'react';
import { Grid, Link } from '@mui/material';
import '../../assets/css/cardArtigo.css';
import '../../assets/css/base.css';
import motivosIcon from '../../assets/img/artigos/motivos_icon.svg';
import sinaisIcon from '../../assets/img/artigos/sinais_icon.svg';
import feminicidioIcon from '../../assets/img/artigos/feminicidio_icon.svg';
import mariaDaPenhaIcon from '../../assets/img/artigos/maria_da_penha_icon.svg';
import atendimentoPublicoIcon from '../../assets/img/artigos/atendimento_pulico_icon.svg';
import planoNacionalIcon from '../../assets/img/artigos/plano_nacional_icon.svg';
import artigosIcon from '../../assets/img/artigos/artigos_icon.svg';
import atendimentoIcon from '../../assets/img/artigos/atendimento_icon.svg';
import locaisDeApoioIcon from '../../assets/img/artigos/locais_de_apoio_icon.svg';
import botaoDePanicoIcon from '../../assets/img/artigos/btn_de_panico_icon.svg';
import equipeIcon from '../../assets/img/artigos/equipe_icon.svg';

export const icons = {
  motivos: motivosIcon,
  sinais: sinaisIcon,
  feminicidio: feminicidioIcon,
  mariaDaPenha: mariaDaPenhaIcon,
  atendimentoPublico: atendimentoPublicoIcon,
  planoNacional: planoNacionalIcon,
  artigos: artigosIcon,
  atendimento: atendimentoIcon,
  locaisDeApoio: locaisDeApoioIcon,
  botaoDePanico: botaoDePanicoIcon,
  equipe: equipeIcon,
};

const CardArtigoGrande = (props) => {
  const selectedIcon = icons[props.tela] || '';

  return (
    <Link href={props.href} underline="none">
      <Grid container className="cardContainerGrande">
        <Grid item className="iconContainer-cardArtigoGrande">
          <img src={selectedIcon} alt={props.titulo} />
        </Grid>
        <Grid item className="tituloContainer-cardArtigoGrande">
          <h2 className="body2" style={{ color: '#337066' }}>
            {props.titulo}
          </h2>
        </Grid>
      </Grid>
    </Link>
  );
};

export default CardArtigoGrande;
