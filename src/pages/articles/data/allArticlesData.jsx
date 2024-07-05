import aboutArticlesData from './aboutArticlesData';
import appArticlesData from './appArticles';
import lawArticlesData from './lawArtciles';
import violenceArticlesData from './violenceArticlesData';

// Artigos:
// Carrossel: Quem somos, Marta Escuta e Contribuição (2 a 4)
// Violência de Gênero [16]: Motivos, Sinais (5 e 6)
// Legislação[17]: Feminicídio, Maria da Pena, Atendimento Pub e PNEF (7 a 10)
// App:[18] Artigos, atendimento, Locais de apoio, Botão de pâncio, Quem desenvolveu (11 a 15)

const allArticlesData = [
  ...aboutArticlesData,
  ...violenceArticlesData,
  ...lawArticlesData,
  ...appArticlesData,
];

export default allArticlesData;
