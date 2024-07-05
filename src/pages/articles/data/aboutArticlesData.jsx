import quemSomosImg from '../../../assets/img/artigos/C2_icon.svg';
import martaEscutaImg from '../../../assets/img/artigos/C3_icon.svg';
import doacoesImg from '../../../assets/img/artigos/C4_icon.svg';

const aboutArticlesData = [
  {
    // C2
    id: 'quem-somos',
    title: 'Quem somos',
    type: 'Sobre a associação',
    image: quemSomosImg,
    text: (
      <>
        <p>
          Uma Associação composta apenas por mulheres, que empatiza com a causa das vítimas da
          violência estrutural da sociedade, atuando na sua prevenção e conscientização.
        </p>
        <p>
          A Associação Marta leva este nome em homenagem a uma mulher anônima que, assim como
          muitas, já sofreu com a violência doméstica, mas que tem uma história inspiradora de
          superação.
        </p>
        <b>O que fazemos?</b>
        <p>
          Além de realizarmos palestras virtuais e presenciais, temos forte presença nas redes
          sociais com o objetivo de conscientizar e educar os estudantes e a comunidade, a fim de
          que se tornem cidadãos mais responsáveis, sensíveis aos temas relacionados à causa da
          Associação.
        </p>
        <p>
          Também promovemos projetos de assistência jurídica e psicológica gratuitas para vítimas de
          violência contra a mulher.
        </p>
        <b>Por que fazemos?</b>
        <p>
          Acreditamos na importância da conscientização por meio de palestras e pelas redes sociais,
          tendo em vista que muitas mulheres e adolescentes não sabem identificar as formas de
          violência, não estando preparadas para se proteger delas. Ainda, este método nos
          possibilita capacitar o público-alvo para perceber, se sensibilizar e dar suporte quando
          se depara com uma situação de violência.
        </p>
        <b>Contatos</b>
        <p>
          Instagram:{' '}
          <a href="https://www.instagram.com/associacaomarta/">
            https://www.instagram.com/associacaomarta/
          </a>{' '}
          <br />
          Facebook:{' '}
          <a href="https://www.facebook.com/AssociacaoMarta/">
            https://www.facebook.com/AssociacaoMarta/
          </a>{' '}
          <br />
          E-mail:{' '}
          <a href="mailto:contato.associacaomarta@gmail.com">
            contato.associacaomarta@gmail.com
          </a>{' '}
          <br />
          Whatsapp: <a href="tel:+558599612-0974">(85) 99612-0974</a>
        </p>
      </>
    ),
  },
  {
    // C3
    id: 'marta-escuta',
    title: 'Marta Escuta',
    type: 'Sobre a associação',
    image: martaEscutaImg,
    text: (
      <>
        <p>
          Durante o Marta Escuta, por intermédio de profissionais capacitadas, a Associação Marta
          disponibilizará os serviços de assessoria jurídica e de escuta solidária, de maneira
          completamente GRATUITA e remota, às mulheres vítimas de violência, em qualquer lugar do
          Brasil.
        </p>
        <b>Assessoria jurídica</b>
        <p>
          A assessoria jurídica é realizada por Advogadas capacitadas inscritas na OAB, em que é
          ofertado <b>suporte jurídico</b> para que mulheres vítimas de violência conheçam seus
          direitos e possibilidades com <b>segurança e sigilo</b>, incluindo informações sobre
          Divórcio, guarda de filhos, alimentos, boletim online, medidas protetivas etc., com os
          respectivos alinhamentos judiciais.
        </p>
        <b>Escuta solidária</b>
        <p>
          É um <b>serviço de escuta</b>, realizado por Psicólogas capacitadas inscritas no CRP, às
          mulheres vítimas de violência possibilitando um espaço de fala em que elas{' '}
          <b>se sintam acolhidas</b> e possam externalizar suas angústias, oferecendo uma{' '}
          <b>rede de apoio segura e sigilosa</b>.
        </p>
        <b>Quem pode ser atendida?</b>
        <p>
          Mulheres que sofrem ou já sofreram algum tipo de violência e estejam interessadas nos
          serviços da campanha.
        </p>
        <b>Como posso participar?</b>
        <p>
          É possível participar realizando um agendamento disponível na página de{' '}
          <a href="/artigos/atendimentos">
            <stan style={{ color: '#337066' }}>Atendimento</stan>
          </a>
          , para saber melhor sobre como fazer um agendamento basta clicar aqui (vai pra página
          explicando sobre a tela de atendimento).
        </p>
      </>
    ),
  },
  {
    // C4
    id: 'doacoes',
    title: 'Doações',
    type: 'Sobre a associação',
    image: doacoesImg,
    text: (
      <>
        <p>
          Gostaria de ajudar a Associação Marta a crescer? Você pode fazer uma doação via Pix, além
          de doar pela nossa Benfeitoria. Fazendo isso você ajuda a alcançar mulheres em situação de
          vulnerabilidade e contribui em um papel de ruptura de um ciclo de violência.
        </p>
        <p>
          Doações via Pix por: <br />
          <b>ajude.marta@gmail.com</b>
        </p>
        <p>
          Você também pode contribuir diretamente no site da benfeitoria:
          <br />
          <b>
            <a href="https://benfeitoria.com/projeto/associacaomarta">
              Benfeitoria - Associação Marta
            </a>
          </b>
        </p>
      </>
    ),
  },
];

export default aboutArticlesData;
