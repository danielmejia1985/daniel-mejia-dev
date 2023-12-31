const fs = require("fs");
const http = require("http");

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

const firstServer =  http.createServer((request, response) => {
  console.log(`Server raised in port ${PORT}`);
  switch (request.url) {
    case "/api":
        fs.readFile("./utils/dogsData.json", (err, data) => {
          if (err) {
            response.writeHead(404, {"Content-Type": "text/plain"})
            response.end("json not found")
            return
          }
            response.writeHead(200, {"Content-Type": "application/json"})
            response.end(data)
        })        
      break;

    case "/allDogs":
          fs.readFile("./utils/allDogs.html", "UTF8", (err, data) => {
            if (err) {
              response.writeHead(404, {"Content-Type": "text/plain"})
              response.end("html not found")
              return
            }
              response.writeHead(200, {"Content-Type": "text/html"})
              response.end(data)
          })
      break
  
    default:
      response.writeHead(404, {"Content-Type": "text/plain"})
      response.end("Route not found")
      break;
  }

}).listen(PORT, "127.0.0.1");

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
/* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
module.exports = firstServer;
  
