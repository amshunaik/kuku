#  Audiobook application

## About the application
It is a web application that allows users to browse audiobooks, view details, and submit reviews and ratings.

## Steps of running the application locally
### Installations
Necessary installation which need to be done are :
* install NodeJs and NPM
* install VSCode

### Set up mongoDB atlas
* To store the backend data
* SignUp and signIn in MongoDB
* Create new project "Audio"
* then click next and create project
* Click on build a database button
* Select free Service Provide M0 and write the cluster name as "Audio" and click on create button
* After this your Database will be created, click on connect and add Username and Password 
* Have a copy of the password and the password with you. 
* Click on "Create Database User" and then on "choose the connection method" button.
* Add current IP Address to connect to the database.
* After this paste create database Username and Password in Back directory .env file in MONGO_DB url.
* Then add the AudioBook database into the Audio Project.



### Open the directory
* Download the folder Kuku and open in vs code
* then open 2 terminals side by side
* In left side terminal
    - Go to kuku directory using "cd kuku"
    - Then write the command "npm start"
* In the right side terminal
    - Go to Back directory using "cd kuku/src/Back"
    - Then write the command " nodemon Page.js" 
    - This .js file handle backend implementation
    
*Then your application will start working
   



* Create a new directory and open it in vs code
* install React from terminal
   - npx create-react-app my-app
   - cd my-app
   - npm start