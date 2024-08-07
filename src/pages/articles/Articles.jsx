import { Grid, Stack } from '@mui/material';
import '../../assets/css/base.css';
import '../../assets/css/articles.css';
import Header from '../../components/Header';
import CardArtigoGrande from '../../components/article/CardArtigoGrande';

const Articles = () => {
  return (
    <Grid container>
      <Header titulo="Artigos" />
      <Grid container style={{ marginTop: '40px' }} className="pageContainer">
        <Grid item>
          <h2 className="tituloH2" style={{ color: '#337066' }}>
            Sobre violência de gênero
          </h2>
        </Grid>
        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack spacing={2} style={{ width: '100%' }}>
            <CardArtigoGrande
              titulo="Por que essas relações de violência perduram?"
              tela="motivos"
              href="/artigos/por-que-essas-relacoes-de-violencia-perduram"
            />
            <CardArtigoGrande
              titulo="Sinais de que a mulher está sofrendo violência doméstica"
              tela="sinais"
              href="/artigos/sinais-de-violencia-domestica"
            />
          </Stack>
        </Grid>
        <Grid item style={{ marginTop: '30px' }}>
          <h2 className="tituloH2" style={{ color: '#337066' }}>
            Legislação
          </h2>
        </Grid>
        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack spacing={2} style={{ width: '100%' }}>
            <CardArtigoGrande
              titulo="Feminicídio "
              tela="feminicidio"
              href="/artigos/feminicidio"
            />
            <CardArtigoGrande
              titulo="Maria da Penha"
              tela="mariaDaPenha"
              href="/artigos/maria-da-penha"
            />
            <CardArtigoGrande
              titulo="Atendimento público específico e especializado no SUS"
              tela="atendimentoPublico"
              href="/artigos/atendimento-publico"
            />
            <CardArtigoGrande
              titulo="Plano Nacional de Enfrentamento ao Feminicídio"
              tela="planoNacional"
              href="/artigos/plano-nacional"
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container className="pageContainer">
        <Grid item style={{ marginTop: '30px' }}>
          <h2 className="tituloH2" style={{ color: '#337066' }}>
            Conheça a aplicação
          </h2>
        </Grid>
        <Grid container className="carrosselArtigos" dir="ltr">
          <Stack spacing={2} style={{ width: '100%' }}>
            <CardArtigoGrande titulo="Artigos" tela="artigos" href="/artigos/artigos" />
            <CardArtigoGrande
              titulo="Atendimento"
              tela="atendimento"
              href="/artigos/atendimentos"
            />
            <CardArtigoGrande
              titulo="Locais de Apoio"
              tela="locaisDeApoio"
              href="/artigos/locais-de-apoio"
            />
            <CardArtigoGrande
              titulo="Quem desenvolveu"
              tela="equipe"
              href="/artigos/quem-desenvolveu"
            />
          </Stack>
        </Grid>
        <Grid item className="EspacoInferior" />
      </Grid>
    </Grid>
  );
};

export default Articles;
