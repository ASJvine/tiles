# Random Colored Tiles Game


Random Colored Tiles Game is the ultimate game where you need to select the odd color tile by clicking on it. Colors are randomly generated using *HSL* (Hue, Saturation, Lightness) for every level. If you click the right one, the square matrix (nxn) dimension will increase by one and a new color will be set and a counter will popup.


Either you finish the 15 levels of the game or you fail on the way up, a form will appear to print your name on the ___Hall of Fame___. Unfortunately, such hall will only contain the Top10 Best players ever. 


Click on the **Display Hall of Fame**/**Hide Hall of Fame** button to display/hide the list respectively. 

Cannot wait to play? Live version (with Continuous Deployment) is available at: https://eager-saha-f29c90.netlify.com/.

<br>

-----------
<br>

## Prerequisites


* Install [node](http://blog.teamtreehouse.com/install-node-js-npm-mac)


* Install [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) or [npm](http://blog.teamtreehouse.com/install-node-js-npm-mac)


* Install a node version like [n](https://github.com/tj/n)

<br>

The project was build using:


* node version: **v9.11.2**
* npm version: **5.6.0**
* yarn **1.6.0**

<br>

-----------
<br>

## Get Started Immediately


Go to the **Terminal** and clone the repo and go the directory.


Then install all the project dependencies using `yarn` or `npm install`.


To start playing run the command `yarn start` and the project will be automatically running at **http://localhost:8080/** in a development mode.


```sh
git clone https://github.com/ASJvine/tiles.git
cd tiles
yarn
.
.
.
- - -  dependencies installed (npm packages) - - - 


yarn start
```

<br>

-----------
<br>


## Technical Details


The project was implemented with scalability, maintainability, readability and easy to test mindset. So even if there are some pitfalls it is designed to easily move things around, refactor and reuse.


The architecture approach is a mixture of [**Feature First**](https://jaysoo.ca/2016/02/28/organizing-redux-application/) (aka _feature first, function second_ or _pods_ in ember), [**Atomic Design**](http://bradfrost.com/blog/post/atomic-web-design/) and the [**Presentational and Container Components**](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).


_Atomic Design_ defines 5 different components:
1. Atoms - smallest functional unit (cannot be broken down to smaller pieces)
2. Molecules - more tangible and operational than atoms (simple UI unit)
3. Organisms - composition of groups of (molecules and/or atoms and/or organisms)
4. Templates - page-level objects (skeleton)
5. Pages - templates with content


In this case we do not have multiple routes, so we will only use **atoms, molecules and organisms**, and the MainApp.jsx.

<br>

### Main structure


Inside the tiles' directory you'll find the following structure:


```
tiles
├── README.md
├── node_modules
├── package.json
├── .babelrc
├── .eslintrc
├── .gitignore
├── webpack.config.js
├── dist (created after command yarn build-tiles-game)
│   ├── bundle.js
│   └── index.html
├── coverage (created after command - yarn test-coverage)
└── src
    ├── index.html
    ├── index.jsx
    ├── app
    │   ├── common (multiple components used in different feature)
    │   ├── MainApp.jsx
    │   └──styles.scss
    ├── scoreForm
    ├── scores
    ├── tiles
    └── utils
```
As you can see **app** directory contains the **MainApp.jsx** and **styles.scss** (main styles) and also the components shared between multiple features in the app (within the **common** directory).


**Webpack4** has been used you to bundle the different modules. It will build and serve the content within **/dist** directory:


```
dist
├── bundle.js
└── index.html
```
<br>

The **package.json** contains the main info of the project, all the **dependencies** (_npm packages_) and the scripts.


Scripts created:
* **build-tiles-game** >> it builds the project in production mode 
* **start** >> it uses the webpack-dev-server that provides live reloading (used for development only) to build the project in development mode and opens a browser tab at http://localhost:8080/ or other port (check the Terminal message >> _Project is running at http://localhost:8080/_)
* **test** >> to run the tests
* **test-dev** >> to run the tests with a watch mode (used for development)
* **test-coverage** >> to get a coverage report of the tested modules (will build a directory **/coverage**)


To run any of the listed scripts above, go to the terminal and use the command:


```sh
yarn [script-name]
```
  -- OR -- 


```sh
npm run [script-name]
```


For example:
```sh
yarn start
```
<br>

### Common directory 


```
common
├── modals
│   ├── Modal.organism.jsx
│   └── ModalContent.molecule.jsx
├── Button.atom.jsx
├── Counter.atom.jsx
├── InputLabel.atom.jsx
└── MainTitle.atom.jsx
```


A **utils** directory is also defined to contain some functions and constants (not components) used within the project.


Check how **Modal** is built using [portals](https://reactjs.org/docs/portals.html) one of the new feature since **Reactv16.0**. 🎉🎉

<br>

### Features


Then the have the different features with their respective particles:
* scoreForm
* scores
* tiles


Ideal feature structure:
```
featureA
├── constants.js
├── helpers.js
├── helpers.test.js
├── featureStyles.scss
├── (atoms)
├── molecules
├── organisms
└── (some integration tests)
```


NOTE: Previous commits had the styles split per feature but due to some issues (injecting multiple style anchors - for every @import - within the html page 😞 😞) with **Webpack4** and the SASS loader, it has been all moved to the **styles.scss** file. To properly scale the CSS styles, they should be divided by component (future).


NOTE: The current version does not contain component testing or integration tests. However, most of the helpers and utils functions have been tested.

<br>

### Cross-browser compatibility

It has been implemented using a **mobile-first** approach and mainly using widespread compatible elements.

Doubts have been solved checking information in Internet in websites like [caniuse](https://caniuse.com/). Automatic Cross-browser testing would be a nice to have, but out of the scope of the project.

The game has been tested in multiple real devices:
* [Laptop - Mac] Chrome version 67.0.3396.99 (desktop and mobile simulators)
* [Laptop - Mac] Safari version 11.0.3 (13604.5.6)
* [Laptop - Mac] Firefox version 61.0.2
* [iPhone6 - 11.2(15C114)] - Chrome version 68.0.3440.83
* [iPhone6 - 11.2(15C114)] - Safari
* Android (OS version and browser not checked _to be updated_)

To do so, a first quick manual deploy has been done using [**Netlify**](https://www.netlify.com/) and the Terminal, the last version is running at https://musing-lumiere-bc62ed.netlify.com.

Such deploy cannot be done using other machines because it requires ssh keys and user permissions.

```sh
Alexandres-MacBook-Pro:tiles alexandre$ netlifyctl deploy
What path would you like deployed? (default: .) ./dist
Counting objects: 3 total objects  ✔
Resolving deltas: 1 objects to upload  ✔
Uploading objects: 1/1 done  ✔    
Deploy done  🌎
    https://musing-lumiere-bc62ed.netlify.com
```

Furthermore, a **Continuous Deployment (CD)** has been implemented using also [**Netlify** ](https://www.netlify.com/docs/continuous-deployment/) has been created using. Continuous deployment works by connecting a git repository to a Netlify site and keeping the two in sync.

The live version (with CD) is at: https://eager-saha-f29c90.netlify.com/.

<br>

### Quality Assurance

To ensure the code quality different approaches and tools have been used:

* **Manual User Testing** (not automated) - just using the game within multiple platforms and devices to check if it works 
* **Static analysis - ESLint** - used in almost all the files to find problematic patterns and adhre to style guidelines
* **PropTypes** - react components typechecking
* [FUTURE] Add JS extensions like [Flow](https://flow.org/) or [TypeScript](https://www.typescriptlang.org/)


<br>

-----------
<br>


## Future Improvements 🤓


* [REFACTOR] refactor **/src/tiles/Tiles.organism.jsx** and bring more logic to the **/src/tiles/TilesAndHallOfFame.organism.jsx**
* [STYLES] Split the SASS style.scss file (well organized) and create .scss files per feature/domain
* [STYLES] (alternative to precedent bullet point) Add [emotion](https://github.com/emotion-js/emotion) and use **CSS-in-JS** 
* [SCRIPT] Code a script to win the game
* [TESTING] Increase code coverage - Integration tests
* [FEATURE 🕹️] Add a Clock to increase the pressure and sort the Hall of Fame players by score && time
* [TYPECHECKING] Add JS extensions like [Flow](https://flow.org/) or [TypeScript](https://www.typescriptlang.org/)

<br>

-----------
<br>


### Architecture inspiration: 👨‍💻 👩‍💻</span>
    
  * [**Feature First** _by Jack Hsu_](https://jaysoo.ca/2016/02/28/organizing-redux-application/)
  * [**Atomic Design** _by Brad Frost_ ](http://bradfrost.com/blog/post/atomic-web-design/)
  * [**Presentational and Container Components** _by Dan Abramov_ ](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)