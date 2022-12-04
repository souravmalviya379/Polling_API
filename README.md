# Polling_API
This is Polling API created using ExpressJS and MongoDB database, where user can add question and options to them, and Vote for the options he/she wants.

## Features
* User can add Questions
* User can add Options to questions
* User can delete Questions
* User can delete Options
* User can vote for particular option through the link
* User can fetch the Questions

## Following are the routes which can be used
*	/questions/create  (To create a question)
##### (Use request type: POST, send the question in body with key "title" )
*	/questions/:id/options/create  (To add options to a specific question)
##### (Use request type: POST, send the option in body with key "option" )
*	/questions/:id/delete (To delete a question)
##### (Use request type: DELETE)
*	/options/:id/delete (To delete an option)
##### (Use request type: DELETE)
*	/options/:id/add_vote (To increment the count of votes)
##### (Use request type: PUT)
*	/questions/:id (To view a question and it’s options)
##### (Use request type: GET)


## Setup On local
* Install Node version 16.15.1
* Install MongoDB
* Open project folder in VS Code
* Open Terminal
* Run command "npm install" so it will install all the necessary packages to run on local sysetem
* Run command "npm start" to start the server
* Server will start at port 8000 of localhost
* Use postman to play with API
