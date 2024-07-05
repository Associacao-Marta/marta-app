import { Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/base.css';
import '../../assets/css/C.css';
import BotaoDoPanico from '../../components/BotaoDoPanico';
import HeaderTitulo from '../../components/article/HeaderArtigo';
import LeiaMais from '../../components/article/LeiaMais';
import Header from '../../components/Header';
import MenuInferior from '../../components/MenuInferior';
import allArticlesData from './data/allArticlesData';

const Article = () => {
  const { id } = useParams();
  const selectedArticle = allArticlesData.find((article) => article.id === id);
  const { title, type, image, text } = selectedArticle;

  return (
    <Grid container className="">
      <Header titulo="Artigos" destino="/" backButton />
      <HeaderTitulo
        margin_top_icon="0px"
        margin_top="16px"
        margin_bottom="75px"
        img={image}
        titulo={title}
        chip={type}
      />

      <Grid container className="pageContainer" style={{ paddingRight: '6.67vw' }}>
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">{text}</LeiaMais>
          </div>
        </Grid>

        <Grid container className="EspacoInferior" />
      </Grid>

      {/* 
      <Grid container className="EspacoInferior" />
        <Grid container>
          <Grid item>
            <h1 className="tituloH1">Veja também</h1>
          </Grid>
          <Grid container dir="ltr">
            <Stack direction="row" spacing={2}>
              <CardArtigo
                titulo="Sinais de que a mulher está sofrendo violência doméstica"
                tela="sinais"
                href="/artigos/sinais-de-violencia-domestica"
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      */}

      <Grid container className="EspacoInferior" />
      <BotaoDoPanico />
      <MenuInferior />
    </Grid>
  );
};

export default Article;
