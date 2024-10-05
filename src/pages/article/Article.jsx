import { Grid, Stack } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/base.css';
import '../../styles/articles.css';
import HeaderTitulo from '../../components/article/HeaderArtigo';
import LeiaMais from '../../components/article/LeiaMais';
import Header from '../../components/Header';
import allArticlesData from './data/allArticlesData';
import CardArtigo from '../../components/article/CardArtigo';

const Article = () => {
  const { id } = useParams();
  const selectedArticle = allArticlesData.find((article) => article.id === id);
  const { title, type, image, text } = selectedArticle;

  const otherSuggestions = allArticlesData.filter(
    (article) => article.type === type && article.id !== id,
  );

  return (
    <Grid container className="">
      <Header titulo="Artigo" />
      <HeaderTitulo img={image} titulo={title} chip={type} />

      <Grid container className="pageContainer" style={{ paddingRight: '6.67vw' }}>
        <Grid container item className="containerArtigo" id="target">
          <div className="content">
            <LeiaMais className="leiaMais">{text}</LeiaMais>
          </div>
        </Grid>

        <Grid container className="EspacoInferior" />
        <Grid container>
          {!!otherSuggestions.length && (
            <>
              <Grid item>
                <h1 className="tituloH1">Veja também</h1>
              </Grid>
              <Grid container dir="ltr">
                <Stack direction="row" flexWrap="wrap" columnGap={2} rowGap={2}>
                  {otherSuggestions.map((suggestion) => (
                    <CardArtigo
                      key={suggestion.id}
                      titulo={suggestion.title}
                      tela={suggestion.iconRef}
                      href={suggestion.href}
                    />
                  ))}
                </Stack>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Article;
