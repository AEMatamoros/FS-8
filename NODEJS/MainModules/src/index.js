// Modulos
// const os = require("node:os");

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.version());
// // console.log(os.cpus());
// console.log(os.totalmem() / 1024 / 1024);
// console.log(os.freemem() / 1024 / 1024);

// const path = require("node:path");

// console.log(path.sep);

// console.log(path.join("Carpeta1", "carpeta2", "Imagenes"));
// console.log(path.basename("../test.txt"));
// console.log(path.dirname("../test.txt"));
// console.log(path.extname("../test.txt"));
// console.log(path.extname("test.txt32.jpg"));

// const fs = require("node:fs");
// // Sincrono
// const testFileSync = fs.readFileSync("./src/index.html", "utf-8");
// console.log(testFileSync);
// console.log("Otra operacion");
// // Asincrono
// const testFile = fs.readFile("./src/index.html", "utf-8", (err, text) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(text);
// });
// console.log("Otra operacion");

// Servidor
const http = require("node:http");

const server = http.createServer((req, res) => {
  const method = req.method;
  res.setHeader("Content-type", "application/json");
  res.statusCode = 200;
  if (method === "GET") {
    res.end("Resopuesta del  Obtuviste los datos");
    return;
  }
  if (method === "POST") {
    res.end("Resopuesta del  Creaste los datos");
    return;
  }
  if (method === "PUT") {
    res.end("Resopuesta del  Actualizaste los datos");
    return;
  }
  if (method === "DELETE") {
    res.end("Resopuesta del  Eliminaste los datos");
    return;
  }
  res.statusCode = 400;
  res.end("Methodo no valido");
});

server.listen(3000, () => {
  console.log("Server Up in port 3000");
  // console.log(__dirname);
  // console.log(__filename);
  // console.log(process);
});
