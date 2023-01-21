const { response } = require("express");
const express = require("express");
const http = require('http');
const { stringify } = require("querystring");
const app = express();
const port = 3000;

lessons = [
    { topic: "math", location: "Hendon", price : 100},
    { topic: "math", location: "Colindal", price : 80},
    { topic: "math", location: "Brent Cross", price : 90},
    { topic: "math", location: "Golders Green", price : 120}

]
user = {email: "user@email.com", password: "mypassword"}


app.get("/lessons",function(request,res){
    res.end(JSON.stringify(lessons));
})

app.get("/users",function(request,res){
    res.end(JSON.stringify(user));
})

app.use(function(request,response){
    response.status(404).send("Page not found!");
});
app.listen(port);

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.writeHead(200,{'Control-Type':'text/plain'});
//     res.end(JSON.stringify(lessons));  
// }).listen(port,()=>{
//     console.log('Server running at http://localhost:$(port)');
// });

// app.get("/users",function(req,res){
//     res.end(JSON,stringify(user));
// });




