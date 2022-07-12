
# Associação Marta 

Aplicativo em desenvolvimento pela equipe "Os Cappuccinos" na cadeira de Projeto Integrado I (2022.1) do curso de Sistemas e Mídias Digitais da UFC.




## Stack utilizada 

### Tecnologias utilizadas:
**Front-end:** ReactJS

**Back-end:** Firebase e PWA


## Mapeamento de Funcionalidades
### Requisitos Funcionais

| Requisito  |  Descrição  | Codificação  |
| ------------------- | ------------------- | ------------------- |
|  Prover Informações |  O sistema deve prover conteúdos pertinentes a mulheres que estão procurando por ajuda ou aprofundamento em relação à violência de gênero.  | Diretório: src/telas/C1.jsx. Linha: 11 até 60. |
|  Filtros de Artigos |  Na tela de artigos, o usuário poderá filtrar o tipo de conteúdo que deseja consumir utilizando filtros para diferentes temas de artigo.   | Diretório: src/components/C/MenuArtigos.jsx. Linha: 8 até 49. |
|  Conteúdo das Informações |  As informações devem esclarecer dúvidas a respeito da violência contra a mulher, por exemplo, maneiras de identificar um caso de violência e onde buscar ajuda. | Diretório:<br> src/telas/C16.jsx. Linha: 10 até 35; <br> src/telas/C17.jsx. Linha: 10 até 37; <br> src/telas/C18.jsx. Linha: 10 até 40. |
|  Acessibilidade das Informações |  Na página do artigo, o sistema deve prover um botão para aumento ou diminuição do tamanho da fonte do texto exibido.  |  Diretório: src/components/BotaoAcessibilidade.jsx. Linha: 6 até 32.  |
|  Área de Agendamento |  O sistema deve prover uma área onde seja possível agendar um atendimento com a Associação Marta.  |  Diretório: src/telas/D2.jsx. Linha: 20 até 250.  |
|  Preencher dados |  Na área de agendamento, campos de texto devem ficar disponíveis para que o usuário informe seus dados básicos.  |  Diretório: src/telas/D2.jsx. Linha: 115 até 153.  |
|  Escolher tipo de atendimento |  Na área de agendamento, o usuário deverá escolher entre os dois tipos de atendimento disponíveis: jurídico ou psicológico.   |  Diretório: src/telas/D2.jsx. Linha: 155 até 178.  |
|  Definir data e horário |  Na área de agendamento, o sistema deve disponibilizar uma ferramenta de calendário para que o usuário escolha o dia e o horário de atendimento.   |  Diretório: src/telas/D2.jsx. Linha: 184 até 221.  |
|  Pop-up de atendimento agendado |  Ao efetuar o agendamento, o sistema deve abrir um pop-up para informar ao usuário que o agendamento foi feito e que existe a possibilidade de consultar o atendimento através do número de telefone.   |  Diretório:<br> src/telas/D2.jsx. Linha: 223 até 232; <br> src/components/D/PopUpD2.jsx. Linha: 13 até 80;  |
|  Consultar agendamento |  O usuário pode consultar um agendamento inserindo o número de telefone no campo especificado. Com isso, ele pode ver todos os detalhes do atendimento, por exemplo, o tipo de atendimento, data e horário.   |  Diretório:<br> src/telas/D3.jsx. Linha: 11 até 43; <br> src/components/D/PopUpD3.jsx. Linha: 16 até 106;  |
|  Prevenção de Erros  |  O sistema deve avisar caso aconteça algum erro durante o preenchimento do formulário, como a existência um campo vazio ou preenchido incorretamente.   |  Diretório: src/telas/D2.jsx. Linha: 44 até 71.  |
|  Botão de Pânico |  O sistema deve oferecer um botão de emergência para auxiliar usuários que estão em situação de urgência. |  Diretório: src/components/BotaoDoPanico.jsx. Linha: 12 até 60 |
|  Funcionamento do Botão |  O botão deve direcionar o usuário para o seu aplicativo de chamadas com o número de emergência já discado. Feito isso, o usuário deve apenas efetuar a chamada. |  Diretório: src/components/BotaoDoPanico.jsx. Linha: 53 até 55 |
|  Descrição do Botão |  O sistema deve prover ao usuário uma explicação sobre o funcionamento do botão.  |  Diretório: src/components/BotaoDoPanico.jsx. Linha: 40 até 43 |
|  Mapa da Rede de Proteção |  O sistema deve disponibilizar um mapa para facilitar a procura de serviços da rede de proteção à mulher.  | Diretório: src/components/mapa/mapa.jsx. Linha: 7 até 155 |
|  Destaques da Rede de Proteção |  O sistema deve disponibilizar, no mapa, pontos de destaque referentes aos locais de apoio (delegacias, defensorias, centros de atendimento, entre outros). |  Diretório: src/components/mapa/mapa.jsx. Linha: 7 até 155 |
|  Detalhamento da Rede de Proteção |  Ao clicar em uma instituição no mapa ou na lista, o usuário terá acesso a informações básicas como: descrição, endereço, número de telefone e horário de funcionamento. |  Diretório: src/components/mapa/mapa.jsx. Linha: 7 até 155 |
|  Onboarding |  Ao entrar no aplicativo pela primeira vez, o usuário irá visualizar uma apresentação do aplicativo onde suas principais funcionalidades serão mostradas. Caso queira, o usuário poderá pular esta apresentação. |  Diretório:<br> src/telas/A1.jsx. Linha: 11 até 86; <br> src/telas/A2.jsx. Linha: 11 até 87; <br> src/telas/A3.jsx. Linha: 12 até 89; <br> src/telas/A4.jsx. Linha: 12 até 88; <br> src/telas/A5.jsx. Linha: 12 até 89; <br> src/telas/A6.jsx. Linha: 12 até 89. |



## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/osCappuccinos/Projeto-I.git
```

Entre no diretório do projeto

```bash
  cd projeto-I
```

Troque para a branch develop

```bash
  git checkout develop
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


Use a ferramenta Inspecionar do navegador e clique no botão para alternar a barra de ferramentas do dispotivo para visualizar o layout em sua versão mobile (como planejado pela equipe)

```bash
  F12
  Ctrl + Shift + M
```
