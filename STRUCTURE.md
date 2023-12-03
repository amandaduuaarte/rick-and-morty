# Techguide:

## Estrutura de pastas: 🗂️
Hoje o projeto está estruturado seguindo como base alguns padrões de projetos React Native, tentando ao máximo dividir resposábilidades e separando
a aplicação em components. 
___

### Pastas: 📚
* src
    * @types
    * assests
    * components
    * hooks
    * pages
    * queries
    * routes
    * service
    * utils

### OBS: 
Algumas pastas como a `@types` são por si só explicativas não sendo necessário um detalhamento maior do que ela engloba.

- src: 🎯
    -  A pasta src contém todo o core a implementação React Native.
    -  src é a pasta source de aplicação contendo todas as outras pastas citadas anteriormente.
    </br>

- service: 🤖
   -  A service ficou com a responsabilidade de lidar com a implementação do apollo, gerando assim a const client.
    </br>

- components: 🤓
    -  A components contém todos os components da aplicação.
    -  Além disso, considero que algo deve está dentro da components de acordo com sua utilização, ou seja, components que se repetem ou são usados em mais de uma parte do aplicativo 
    é indicado que fique dentro de components evitando assim uma reescrita de código.
    - components 
        - `TextField`
        - `Card`
        - `Loading`
        - `CharacterType`
    </br>

- pages: 💻
    -  Na application optei por concentrar todas as partes relacionadas a aplicação em si, como tratamentos de erros na `errors`, também adicionei os controllers dentro dessa camada nessa pasta de interface concentrei a parte de middlewares, controllers e outros tipos que uso no decorrer do código.
    - Pretendo analisar melhor quais tipagens tenho na folder `interfaces` para que possa adicionar outras ou remover algumas. 
    - application 
        - `./controllers`
        - `./interfaces`
        - `./errors`
        - `./utils`
        - `./constants`
    </br>

- hooks: 👷‍♀️
    -  A pasta de hooks costumo deixar todos os contexts criados, nesse caso em especifico deixei o `useNavigation`, por uma necessidade de tratar types, e também o useCharacters.
    -  o `useCharacters` ficou responsável por realizar o tratamento das queries e também lidar com as fuções para get de personagens.
    </br>
