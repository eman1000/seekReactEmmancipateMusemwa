
===========

Frontend code for Seek Checkout


GETTING STARTED WITH SEEK CHECKOUT DEVELOPMENT ENV
---------------------------------------------------

1. Software installation:
    - Sublime Text 3
    - Currently stable Google Chrome
    - [NodeJS 6.9.4][] (for development, testing, previewing, compiling and optimizing processes)
    - [Webpack][] locally installed
2. Setting up Environment and running app
    - Install dependencies: In terminal, cd to __this__ folder: `npm install`
    - Run `npm run dev`
3. Optimize source code and prepare bundle for deployment: [TBD]
4. Prepare upload bundle and upload to server: [TBD]


UNIT TESTING USING JEST
-----------------------
1.  MAKE sure .barbelrc file is in the main directory before running tests with the following presets
		`{
		  "presets": [
		     "react",
		     "es2015"
		  ]
		}`
2. Running tests
	- Run `npm run test`

TECHNICAL SOLUTIONS
-------------------

- [React][] 15.3 and [Redux][] 3.5.2 for the Frontend Architecture
- [Webpack] for building and bundling.
- SASS (SCSS dialect) as CSS preprocessor
- Bootstrap as base CSS framework
- Form field validation: [TBD]
- Minimum browser's supports (as per overall TSD):
    
### DEVELOPMENT DEPENDENCIES

- [NodeJS 6.9.4][]
- [Webpack][]
- See _dependencies_ in `package.json`

### VERSIONS

Below are list of main components

- React: __15.3__
- Redux: 3.5.2
- Bootstrap: 3.3.7

FOLDER STRUCTURE
----------------

Fractal Folder Structure


### Development Environment Setup
- Install Nodejs [6.9.4]
- Install GIT
- Install React Developer Tools for Google Chrome.
- Go to Project root directory and run `npm install`. This will install Project dependencies.
- Run `npm run dev`. This will start development node server. 
- Go to http://localhost:8081/home/ from Browser.

### Generating Bundle.
- Install Nodejs [6.9.4]
- Install GIT
- Open Git Bash (if you are using windows) and Go to Project Root.
- Run `npm run bundle`. This will create a ~dist folder with compiled code.


