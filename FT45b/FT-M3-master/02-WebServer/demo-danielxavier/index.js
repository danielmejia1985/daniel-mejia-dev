console.log("Hola mundo...");
console.log("Hola Backend..");

const axios = require("axios");
const server = require("http");
const fileSystem = require("fs");

let userData = [];
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
    console.log(response.data)
    userData = response.data
}).catch(() => console.log("Mensaje de error"));

server.createServer((request, response) => {
   
if (request.url === "/home") {
    response.writeHead(200, {"Content-type": "text/plain"})
    response.end("Estas visitando HOME..")
}else if(request.url === "/users") {
    response.writeHead(200, {"Content-type": "aplication-json"})
    response.end(JSON.stringify(userData))
}else if (request.url === "/htmlprueba"){
    response.writeHead(200, {"Content-type": "text/html"})
    response.end("<p>parrafo</p>")
}else if(request.url === "/html2"){
    response.writeHead(200, {"Content-type": "text/html"})
    const miHtml = fileSystem.readFileSync("./index.html")
    response.end(miHtml)
}else{
    response.writeHead(404, {"content-type": "text/plain"})
    response.end("Not found page..")    
}



}).listen(3001,"localhost");

