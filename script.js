var express = require("express");
var app = express();

// Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors());


app.get("/lessons", function(request, response) {
    response.json( [{topic: 'Math',location:'Hendon',price:100},
                    {topic: 'Math',location:'Colindale',price:80},
                    {topic: 'Math',location:'Brent Cross',price:90},
                    {topic: 'Math',location:'Golden Green',price:120}]);
    });


app.get("/user", function(request, response) 
    {response.json({email:"user@gmail.com",password:"mypassword"});});


app.use(function(request, response) {response.status(404).send("Page not found!");});


app.listen(3000);

