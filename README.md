
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
|  Prover Informações |  O sistema deve prover conteúdos pertinentes a mulheres que estão procurando por ajuda ou aprofundamento em relação à violência de gênero.  | Diretório: src/telas/C1.jsx. Linha: 19 até 89. |
|  Conteúdo das Informações |  As informações devem esclarecer dúvidas a respeito da violência contra a mulher, por exemplo, maneiras de identificar um caso de violência e onde buscar ajuda. | Diretório: src/telas/C2.jsx. Linha: 12 até 70. |
|  Acessibilidade das Informações |  Na página do artigo, o sistema deve prover um botão para aumento ou diminuição do tamanho da fonte do texto exibido.  |  Diretório: src/components/BotaoAcessibilidade.jsx. Linha: 4 até 34.  |
|  Botão de Pânico |  O sistema deve oferecer um botão de emergência para auxiliar usuários que estão em situação de urgência. |  Diretório: src/components/BotaoDoPanico.jsx. Linha: 1 até 62 |
|  Funcionamento do Botão |  O botão deve direcionar o usuário para o seu aplicativo de chamadas com o número de emergência já discado. Feito isso, o usuário deve apenas efetuar a chamada. |  Diretório: src/components/BotaoDoPanico.jsx. Linha: 49 até 58 |
|  Descrição do Botão |  O sistema deve prover ao usuário uma explicação sobre o funcionamento do botão.  |  Diretório: src/components/BotaoDoPanico.jsx. Linha: 37 até 48 |
|  Mapa da Rede de Proteção |  O sistema deve disponibilizar um mapa para facilitar a procura de serviços da rede de proteção à mulher.  | Diretório: src/components/mapa/mapa.jsx. Linha: 7 até 15 |
|  Destaques da Rede de Proteção |  O sistema deve disponibilizar, no mapa, pontos de destaque referentes aos locais de apoio (delegacias, defensorias, centros de atendimento, entre outros). |  Diretório: src/components/mapa/mapa.jsx. Linha: 16 até 140 |
|  Detalhamento da Rede de Proteção |  Ao clicar em uma instituição no mapa ou na lista, o usuário terá acesso a informações básicas como: descrição, endereço, número de telefone e horário de funcionamento. |  Diretório: src/components/mapa/mapa.jsx. Linha: 16 até 140 |
|  Onboarding |  Ao entrar no aplicativo, o usuário irá visualizar uma apresentação do aplicativo onde suas principais funcionalidades serão mostradas. Caso queira, o usuário poderá pular esta apresentação. |  Diretório:<br> src/telas/A1.jsx. Linha: 16 até 140; <br> src/telas/A2.jsx. Linha: 11 até 87; <br> src/telas/A3.jsx. Linha: 11 até 86; <br> src/telas/A4.jsx. Linha: 11 até 87; <br> src/telas/A5.jsx. Linha: 11 até 86.|



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
