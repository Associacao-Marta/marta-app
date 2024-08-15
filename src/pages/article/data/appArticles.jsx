import artigosImage from '../../../assets/img/artigos/artigos_icon.svg';
import atendimentosImage from '../../../assets/img/artigos/atendimento_icon.svg';
import locaisDeApoioImage from '../../../assets/img/artigos/locais_de_apoio_icon.svg';
// import btnEmergenciaImage from '../../../assets/img/artigos/btn_de_panico_icon.svg';
import equipeImage from '../../../assets/img/artigos/equipe_icon.svg';

const appArticlesData = [
  {
    // C11
    id: 'artigos',
    href: '/artigos/artigos',
    title: 'Artigos',
    type: 'Conheça a aplicação',
    image: artigosImage,
    iconRef: 'artigos',
    text: (
      <>
        <p>
          É sempre importante adquirir novos conhecimentos, especialmente quando se trata de um
          assunto sério e recorrente como violência de gênero, as maneiras de combater esse crime e
          apoiar as mulheres que o vivenciam.
        </p>
        <p>
          Para seguir nessa missão, o app Associação Marta apresenta um conjunto de conteúdos
          educacionais e informativos localizados na página de <b>Artigos</b> que vão lhe ajudar a
          se informar sobre diversos assuntos, como distinguir os tipos de violência de gênero, como
          costumam acontecer os casos, as leis e serviços que garantem o direito e suporte às
          mulheres, entre outros tipos de informações.
        </p>
      </>
    ),
  },
  {
    // C12
    id: 'atendimentos',
    href: '/artigos/atendimentos',
    title: 'Atendimentos',
    type: 'Conheça a aplicação',
    image: atendimentosImage,
    iconRef: 'atendimento',
    text: (
      <>
        <p>
          Uma importante missão da Associação Marta é promover o acolhimento às vítimas de violência
          contra a mulher, através de serviços de apoio psicológico e/ou jurídico, de forma{' '}
          <b>totalmente gratuita e remota</b>.
        </p>
        <p>
          Se você necessita dessa assistência, para entrar em contato com a Associação basta visitar
          a página de <b>Atendimento</b> e selecionar a opção <b>Agendar Atendimento</b>, para o
          atendimento ocorrer da melhor forma possível será necessário preencher um formulário
          básico com informações de contato, descrição do caso, o tipo de atendimento que deseja
          receber e sua disponibilidade para a conversa. Ao confirmar o agendamento, um protocolo é
          enviado via SMS para o número informado.
        </p>
        <p>
          Caso já tenha feito o agendamento, para obter mais informações posteriormente, você pode
          na página de <b>Atendimento</b> selecionar a opção <b>Consultar Agendamento</b> e informar
          o número de protocolo enviado via SMS que foi passado após o agendamento.
        </p>
        <p>
          <b>
            Ressaltamos que esse é um serviço que garante segurança e sigilo para todas as mulheres
            vítimas de violência.
          </b>
        </p>
      </>
    ),
  },
  {
    // C13
    id: 'locais-de-apoio',
    href: '/artigos/locais-de-apoio',
    title: 'Locais de Apoio',
    type: 'Conheça a aplicação',
    image: locaisDeApoioImage,
    iconRef: 'locaisDeApoio',
    text: (
      <>
        <p>
          Garantir o amparo e suporte às mulheres vítimas de violência é extremamente necessário.
          Para isso, por meio de uma rede de serviços
          <b>*</b> disponibilizada na página de <b>Locais</b> você pode visualizar um mapa com
          locais de acolhimento que estão próximos, possibilitando informações como endereço,
          telefone, e horário de atendimento.
        </p>
        <p>
          <b>*</b>Essa rede apresenta até o momento somente serviços localizados na Região
          Metropolitana de Fortaleza
        </p>
      </>
    ),
  },
  // {
  //   // C14
  //   id: 'botao-de-emergencia',
  //   href: '/artigos/botao-de-emergencia',
  //   title: 'Botão de Emergência',
  //   type: 'Conheça a aplicação',
  //   image: btnEmergenciaImage,
  //   iconRef: 'botaoDePanico',
  //   text: (
  //     <p>
  //       Em momentos de risco queremos garantir que você tenha um suporte, para isso o aplicativo
  //       permite que você solicite ajuda de forma rápida e segura através de um botão de pânico
  //       localizado no lado direito inferior da sua tela, que ao ser acionado realiza a discagem de
  //       um número de emergência no seu aplicativo de chamadas.
  //     </p>
  //   ),
  // },
  {
    // C15
    id: 'quem-desenvolveu',
    href: '/artigos/quem-desenvolveu',
    title: 'Quem desenvolveu',
    type: 'Conheça a aplicação',
    image: equipeImage,
    iconRef: 'equipe',
    text: (
      <>
        <p>
          Essa aplicação foi desenvolvida para a disciplina de Projeto Integrado 1 do curso de
          Sistemas e Mídias Digitais da Universidade Federal do Ceará, em parceria com a Associação
          Marta. O produto foi projetado pela equipe Os Cappuccinos, composta pelo seguintes
          integrantes:
        </p>
        <p>
          <b>Giselle Fonseca</b> - Product Manager (
          <a href="https://www.linkedin.com/in/giselle-fonseca-b1a2561b9/">Linkedin</a>)
        </p>
        <p>
          <b>Jadson Alcantara</b> - UX/UI Designer (
          <a href="https://www.linkedin.com/in/jadsonalcantara/">Linkedin</a>)
        </p>
        <p>
          <b>Lucas Xavier</b> - Desenvolvedor e Lead Designer (
          <a href="https://www.linkedin.com/in/lucasemanuelx/">Linkedin</a>)
        </p>
        <p>
          <b>Lucas de Oliveira</b> - Desenvolvedor, Analista de Requisitos e Arquiteto da Informação
          (<a href="https://www.linkedin.com/in/lucasmdoliveira/">Linkedin</a>)
        </p>
        <p>
          <b>Sami Nagahama</b> - Desenvolvedora Full Stack (
          <a href="https://www.linkedin.com/in/saminagahama/">Linkedin</a>)
        </p>
        <p>
          A aplicação contou ainda com a revisão de 2 desenvolvedores de software para o
          desenvolvimento de melhorias e a garantia de sua manutenção.
        </p>
        <p>
          <b>Eric Junqueira</b> - Desenvolvedor Full Stack (
          <a href="https://www.linkedin.com/in/eric-junqueira-bb40091a7/">Linkedin</a>)
        </p>
        <p>
          <b>Cláudio Guimarães </b> - Desenvolvedor Back-end (
          <a href="https://www.linkedin.com/in/ant%C3%B4nio-cl%C3%A1udio-guimar%C3%A3es-6210651a3/">
            Linkedin
          </a>
          )
        </p>
      </>
    ),
  },
];

export default appArticlesData;
