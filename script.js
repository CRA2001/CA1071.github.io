const { response } = require("express");
const express = require("express");
const http = require('http');
const app = express();

lessons = [
    { topic: "math", location: "Hendon", price : 100},
    { topic: "math", location: "Colindal", price : 80},
    { topic: "math", location: "Brent Cross", price : 90},
    { topic: "math", location: "Golders Green", price : 120}

]
user = {email: "user@email.com", password: "mypassword"}


app.get("/lessons",function(request,response){
    response.send(lessons);
})

app.get("/users",function(request,response){
    response.send(user)
})

app.use(function(request,response){
    response.status(404).send("Page not found!");
});


app.listen(3000);
