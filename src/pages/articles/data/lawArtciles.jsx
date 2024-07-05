import feminicidioImage from '../../../assets/img/artigos/C7_icon.svg';
import mariaDaPenhaImage from '../../../assets/img/artigos/C8_icon.svg';
import atendimentoPublicoImage from '../../../assets/img/artigos/C9_icon.svg';
import planoNacionalImage from '../../../assets/img/artigos/C10_icon.svg';

const lawArticlesData = [
  {
    // C7
    id: 'feminicidio',
    title: 'Feminicídio',
    type: 'Legislação',
    image: feminicidioImage,
    text: (
      <>
        <p>
          A Lei do Feminicídio (Lei Federal 13.104/15) criminaliza, como seu próprio nome sugere, a
          conduta de prática do feminicídio, que é o homicídio de mulheres cometido em razão do
          gênero, ou seja, a vítima é morta em razão de ser mulher.
        </p>
        <p>
          O Brasil é considerado o quinto país do mundo com maior número de feminicídios, fato este
          que demonstra por si só a importância dessa legislação que está entrou somente em 2015 e
          pode ser consultada no link a seguir:
          <br />
          <b>
            <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13104.htm">
              Lei Federal 13.104/2015
            </a>
          </b>
        </p>
      </>
    ),
  },
  {
    // C8
    id: 'maria-da-penha',
    title: 'Maria da Penha',
    type: 'Legislação',
    image: mariaDaPenhaImage,
    text: (
      <>
        <p>
          A Lei Maria da Penha tornou mais rigorosa a punição para agressões contra a mulher quando
          ocorridas no âmbito doméstico e familiar. A referida lei entrou em vigor no Brasil no dia
          22 de setembro de 2006, sendo assim nomeada em homenagem a Maria da Penha Maia, que foi
          agredida pelo marido durante muitos anos e, em razão das agressões, tornou-se paraplégica,
          depois de sofrer atentado com arma de fogo, em 1983.
        </p>
        <p>
          A referida lei trouxe um maior respaldo do Estado às mulheres vítimas de violência e no
          seu texto é capaz de se encontrar a diferenciação entre os tipos de violência, que podem
          ser física, psicológica, patrimonial, sexual e moral, além de dispor sobre as medidas
          protetivas de urgência para tutelar a vida das mulheres, como se vê no link a seguir:
          <br />
          <b>
            <a href="https://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2006/Lei/L11340.htm">
              Lei Maria da Penha
            </a>
          </b>
        </p>
      </>
    ),
  },
  {
    // C9
    id: 'atendimento-publico',
    title: 'Atendimento público específico e especializado no SUS',
    type: 'Legislação',
    image: atendimentoPublicoImage,
    text: (
      <>
        <p>
          O atendimento especializado para mulheres e vítimas de violência doméstica e sexual
          tornou-se um dos princípios do Sistema Único de Saúde (SUS) de forma a garantir, entre
          outros direitos, o acompanhamento psicológico e cirurgias plásticas reparadoras, se for o
          caso, como se pode ver em maiores detalhes a seguir:
        </p>
        <p>
          <b>
            <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/L13427.htm">
              Lei 13.427/2017
            </a>
          </b>
        </p>
      </>
    ),
  },
  {
    // C10
    id: 'plano-nacional',
    title: 'Plano Nacional de Enfrentamento ao Feminicídio',
    type: 'Legislação',
    image: planoNacionalImage,
    text: (
      <>
        <p>
          O Plano Nacional de Enfrentamento ao Feminicídio visa combater todas as formas de
          feminicídio por meio de ações governamentais integradas e intersetoriais, bem como
          garantir os direitos e a assistência às mulheres em situação de violência e aos seus
          familiares.
        </p>
        <p>
          A Lei em questão prevê ações que conscientizem a sociedade sobre a violência contra as
          mulheres e ampliem as possibilidades de denúncia:
          <br />
          <b>
            <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/Lei/L14192.htm">
              Lei 14.192/2021
            </a>
          </b>
        </p>
      </>
    ),
  },
];

export default lawArticlesData;
