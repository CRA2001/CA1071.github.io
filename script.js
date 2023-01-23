var express = require("express"); 
var app = express(); // initializing express framework

// Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors());

//routing - refers to how an apps endpoint respond to client requests
//In here, if the user puts localhost:3000/lessons, the following json
//will be output (lessons)
app.get("/lessons", function(request, response) {
    response.json( [{topic: 'Math',location:'Hendon',price:100},
                    {topic: 'Math',location:'Colindale',price:80},
                    {topic: 'Math',location:'Brent Cross',price:90},
                    {topic: 'Math',location:'Golden Green',price:120}]);
    });

//in here if the user puts localhost:3000.users, the json of the user
// details will be the output
app.get("/user", function(request, response) 
    {response.json({email:"user@gmail.com",password:"mypassword"});});

//404 error output if /lessons or /user is not inputted 
app.use(function(request, response) {response.status(404).send("Page not found!");});


app.listen(3000);

