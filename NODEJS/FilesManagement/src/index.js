// PATH == > Acceder a metodos del directorio del sistema
// OS ==> Accede a metoodos que me brindan informacion del servidfor sobre el que se ejecuta nuestra app
// FS ==> Fyle System Acceder a los metodos manejo de archivos
// HTTP ==> Me brinda la posibilidad de generar un servidor WEB
// READLINE ==> Poder leer las entradas de consola

// console.log(process);

const fs = require("fs");

const readline = require("readline");
const path = require("path");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("Gestor de archivos de GOIT Team");
  console.log("1 -- Leer Archivo");
  console.log("2 -- Editar Archivo");
  console.log("3 -- Crear Archivo");
  console.log("4 -- Salir");
}

function main() {
  showMenu();
  rl.question("Seleccione una opcion : ", (choice) => {
    switch (choice) {
      case "1":
        // console.log(__dirname);
        rl.question("Nombre del archivo a leer ejem:Texto ", (filename) => {
          readAndDisplay(path.join(__dirname, "files", filename + ".txt"));
        });

        break;
      case "2":
        rl.question("Nombre del archivo a editar ejem:Texto ", (filename) => {
          editFile(path.join(__dirname, "files", filename + ".txt"));
        });
        break;
      case "3":
        createFile();
        break;
      case "4":
        process.exit(0);
        break;
      default:
        console.log("opcion invalida");
        main();
        break;
    }
  });
}

function readAndDisplay(filename) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.log("Ocurrio un error al carga rel archivo, verifica el nombre.");
      main();
      return;
    }
    console.log("Contenido del archivo: ");
    console.log(data);
    main();
  });
}
function editFile(filename) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.log("Ocurrio un error al carga rel archivo, verifica el nombre.");
      main();
      return;
    }
    rl.question("ingrese el nuevo contenido del archivo : ", (newContent) => {
      fs.writeFile(filename, newContent, (err) => {
        if (!!err) {
          console.log("Error al editar el archivo");
          main();
        }
        console.log("El archivo fue editado correctamente");
        main();
      });
    });
  });
}

function createFile() {
  rl.question("Nombre del nuevo archivo : ", (filename) => {
    rl.question("Contenido del nuevo archivo : ", (content) => {
      fs.writeFile(
        path.join(__dirname, "files", filename + ".txt"),
        content,
        (err) => {
          if (!!err) {
            console.log("Error al crear el archivo");
            main();
          }
          console.log("El archivo fue creado correctamente");
          main();
        }
      );
    });
  });
}

main();
