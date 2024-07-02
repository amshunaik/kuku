
#  Audiobook application

## About the application
It is a web application that allows users to browse audiobooks, view details, and submit reviews and ratings.

## Application Architecture

1. Frontend: React.js

- Consists of different parts which combine to create a interactive application.
* Navigating throught different directories
  - index.js : First file which get executed and has App.js file in it.
  - App.js : Contain the logic and code of the user interface.
  - index.css and App.css : used for styling depending on id and classes.
  - Package.json : Contain all the dependancies

* node_modules
  - Contain all the necessary modules, libraries and dependancies.

- All the directories containing frontend code logic are created in src directory in which one is Audio directory.
- In audio directory the different files are :
   - Data.js : It store the dataset of different audio books.
   -  First.js : It is the main page of the application which show the list of audio books.
   - SearchBox.js : It is the code for search box to filter out the desired list of audio books by author name and sorted by their rating.
   - Second.js : This file show the details of the audio book which you want to know. Along with this it all show reviews by different users and have a feedback form to get users comments .
   - Review.js : This file show all the reviews which that selected audio book recieved.
   - Feedback.js : This part contain the feedback form to recieve users comment/feedback
   
- Here the routing and navigation form one page to another is handelled using react-router-dom.
   - Root.js in Audio directory is  the main entry point of a React application where the routing structure is defined.

- Styling is handeled by different .css files like  First.css, Second.css etc.

2. Backend : Node.js , Express.js

- This is the part which handles request from the client side as well as fetching , sending and storing the data in database.
- For database we used MongoDB atlas , and created 2 different database 
    - audio : to store the audiobook dataset
    -  review : to store the reviews recieved from users.
- Create the schema structure of the database for
    - audio in Usermod.js file in Back directory.
    - review in Comment.js file in Back directory.
- Also handle the different get, post requests recieved from client side in backend. 
- Page.js is the main backend file which handles all the request and send response and also handle fetching and sending data to the desired database in mondodb atlas.

## API endpoints :
- /start -> To fetch the audiobook data from mongodb audio database and send it back to the frontend .
- /point/:id -> This will recieve the selected audio book's id to fetch that particular id's audio book's detail and send it back to frontend.
- / review -> This will recieve the feedback data from frontend and get the data stored in review database.

## Deployment steps
### Installations
Necessary installation which need to be done for windows:
* install NodeJs and NPM
* install VS Code

### Set up mongoDB atlas
* Purpose : To store the backend data in database.
* SignUp and SignIn in MongoDB Atlas
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
* Then open 2 terminals side by side
* In left side terminal
    - Go to kuku directory using "cd kuku"
    - Then write the command "npm start"
* In the right side terminal
    - Go to Back directory using "cd kuku/Back"
    - Then write the command " nodemon Page.js" 
    - Page.js file handle backend implementation
* Go to the Back directory in Page.js file and uncomment the code in 83rd line .
* After writing the code in both terminal go to the page where the application open up and relaod it once to add the dataset.
* After that comment out the code in 83rd line in Page.js.
* Then your application will start working in your pc.
* Open the folder Kuku in vs-code.
* install React from terminal
   - npx create-react-app my-app
   - cd my-app
   - npm start

