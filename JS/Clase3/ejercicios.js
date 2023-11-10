// Módulo 2. Clase 3. Arrays

//// Ejemplo 1 - Operaciones básicas con un array

// 1. Crea un Array `genres` con lo elementos «Jazz» y «Blues».
// 2. Agrega «Rock n Roll» al final.
// 3. Muestra el primer elemento del Array en la consola.
// 4. Muestra el último elemento del Array en la consola.El código
//  debería funcionar para un array de cualquier longitud.
// 5. Elimina el primer elemento y muestralo en la consola.
// 6. Inserta "Country" y "Reggae" al principio del Array.


let genres = ['Jazz', 'Blues'];

genres.push("Rock n Roll");
console.log(genres);
console.log(genres[0]);
console.log(genres[genres.length - 1]);
genres = genres.slice(1, genres.length);
console.log(genres);
genres.splice(0, 0, "Country", "Reggae");
console.log(genres);
//// Ejemplo 2 - Arrays y Cadenas
// Escribe un script para calcular el área de un rectángulo con lados cuyos
// valores se almacenan en la variable `values` en forma de cadena.
// Se garantiza que los valores están separados por un espacio.


const values = '8 11';
let dimensions = values.split(" ");
console.log(parseFloat(dimensions[0]) * parseFloat(dimensions[1]))


//// Ejemplo 3 - Indexación de un Array

// Escribe un script para buscar en el array `fruits` con un bucle`for`.Para cada 
// elemento del Array, envía a la consola una cadena con el formato`número_de_elemento: valor_de_elemento`.
// La numeración de los elementos debe empezar por`1`.


const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
for (let index = 0; index < fruits.length; index++) {

    console.log(`${index + 1} --- ${fruits[index]}`)

}

//// Ejemplo 4 - Arrays y bucles

// Escriba un script que muestre el nombre y el número de teléfono del usuario en la consola. 
// En las variables `names` y `phones` se almacenan cadenas de nombres y números de teléfono, separados
// por comas.El índice de los nombres y números de teléfono en las líneas indica correspondencia.
// La cantidad de nombres y teléfonos debe de ser igual.


const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
let namesArray = names.split(',');
let phonesArray = phones.split(',');

if (namesArray.length === phonesArray.length) {
    for (let index = 0; index < namesArray.length; index++) {
        console.log(`El nombre de la persona es ${namesArray[index]}, y su telefono es ${phonesArray[index]}`)
    }
} else {
    console.log("Ocurre un error con los datos")
}

//// Ejemplo 5 - Arrays y cadenas

// Escriba un script que muestre en la consola todas las palabras de la cadena
// excepto la primera y la última.La cadena resultante no debe comenzar ni terminar
// con un espacio en blanco.El script debería funcionar para cualquier cadena.

const welcomeMessage = 'Welcome  to the future  ';
let arrayMessage = welcomeMessage.split(' ');
arrayMessage.pop();
arrayMessage.splice(0, 1);
console.log(arrayMessage.join(" ").trim())

//// Ejemplo 6 - Arrays y cadenas

// Escriba un script que "invierta" la cadena(invierta el orden de las letras)
// y la muestre en la consola.


const message = 'Welcome to the future';
let messageArray = message.split('');
// console.log(messageArray.reverse().join(""));
let concatMessage = '';
for (let index = messageArray.length; index >= 0; index--) {

    concatMessage = concatMessage + messageArray[index]

}
console.log(concatMessage)

//// Ejemplo 7 - Ordenar Arrays con un bucle

// Escribe un script para ordenar un array de cadenas en orden alfabético 
// según la primera letra elemento.

const langs = ['python', 'javascript', 'c++', 'haskel', 'zz', 'php', 'ruby'];
console.log(langs.sort());
console.log(langs.reverse());

const numeros = [1, 6, 23, 546, 7, 2, 3];
console.log(numeros.sort())
console.log(numeros.sort((a, b) => b - a))

// https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/

//// Ejemplo 8 - Buscar un elemento

// Escribe un script para encontrar el número más pequeño en el Array.El código
// debería funcionar para cualquier Array de números.Utiliza un bucle para resolver el problema.


const numbers = [2, 17, 94, 1, 23, 37, -5];
let min = numbers[0];

for (let number of numbers) {
    if (number < min) {
        min = number
    }
}

console.log(min); // 1



