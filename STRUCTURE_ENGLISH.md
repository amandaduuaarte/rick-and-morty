# Techguide:

## Folder Structure: 🗂️
Currently, the project is structured following some React Native project patterns, aiming to divide responsibilities as much as possible and separating the application into components.
___

### Pastas: 📚
* src
    * @types
    * assests
    * components
        * __tests__
    * hooks
    * pages
    * queries
    * routes
    * service
    * utils

### OBS: 
Some folders like ``@types`` are self-explanatory and don't require further detailing of what they encompass.


- src: 🎯
    - The src folder encompasses the entire core implementation of React Native.
    - src is the application's source folder containing all the previously mentioned folders.
    </br>

- service: 🤖
    - The service is responsible for handling the implementation of Apollo, thereby generating the constant client.
    </br>

- components: 🤓
    - The components folder contains all the application's components.
    - Additionally, I consider that something should be inside the components based on its usage. That is, components that repeat or are used in multiple parts of the application are recommended to reside within the components folder, thus - avoiding code duplication.
        - `TextField`
        - `Card`
        - `Loading`
        - `CharacterType`
    </br>

- pages: 💻
    -  In the application, I chose to centralize all parts related to the application itself. For instance, error handling is in the errors folder. I also included controllers within this layer. In this interface folder, I concentrated middleware, controllers, and other types used throughout the code.
    - I plan to further analyze the typings I have in the interfaces folder to add or remove some as needed.
    - application 
        - `./controllers`
        - `./interfaces`
        - `./errors`
        - `./utils`
        - `./constants`
    </br>

- hooks: 👷‍♀️
    - In the hooks folder, I typically place all created contexts. In this specific case, I've included `useNavigation` due to a need for handling types, as well as useCharacters.
    -  `useCharacters` is responsible for handling queries and managing functions to retrieve characters.
    </br>
