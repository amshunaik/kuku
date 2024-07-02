#  Audiobook application

## About the application
It is a web application that allows users to browse audiobooks, view details, and submit reviews and ratings.

## Steps of running the application locally
### Installations
Necessary installation which need to be done for windows:
* install NodeJs and NPM
* install VSCode

### Set up mongoDB atlas
* To store the backend data
* SignUp and signIn in MongoDB
* Create new project by any name eg. "Audio"
* Then click next and create project
* Then go to Database section and click on "Build Cluster" button.
* Select free Service provider M0 and give a cluster name eg. "Audio" and then click "Create deployment" .
* You will be redirected to connect to your database page where you can use the default username and password or change it.
* Then click on "Create Database User" button  and "choose a connection method" button.
* Click on "Drivers" for connection and copy the mongodb connection string and add username and password in the .env file in Back directory.
* Again click to Database section and open the downloaded folder in VS code.


### Open the directory and follow below steps.
* Download the folder Kuku and open in vs code
* then open 2 terminals side by side
* In left side terminal
    - Go to kuku directory using "cd kuku"
    - Then write the command "npm start"
* In the right side terminal
    - Go to Back directory using "cd kuku/Back"
    - Then write the command " nodemon Page.js" 
    - This .js file handle backend implementation
    
* Then your application will start working in your pc.
   

* Create a new directory and open it in vs code
* install React from terminal
   - npx create-react-app my-app
   - cd my-app
   - npm start