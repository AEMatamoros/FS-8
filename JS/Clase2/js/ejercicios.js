// Módulo 1. Clase 2. Oraciones condicionales. Bucles
//// Ejemplo 1 - Entrada del usuario y oración condicional
// Utilizando la construcción if..else y prompt, escribe un código que pregunte:
// `¿Cuál es el nombre oficial de JavaScript?` Si el usuario introduce `ECMAScript`, 
// entonces muestra una alerta con la cadena `"¡Correcto!"`, en caso contrario,
// `"¿No lo sabes? ECMAScript"`.

// let message = prompt("¿Cuál es el nombre oficial de JavaScript?");
// let correctResponse = "  ECMAScript   "; //Trim elimina los espacios vacios al inicio y al final de la cadena
// if(message.toLocaleLowerCase().trim() === correctResponse.toLocaleLowerCase().trim()){
//   alert("¡Correcto!");
// }else{
//   alert("¿No lo sabes? ECMAScript");
// }


//// Ejemplo 2 - Visualización de la hora (if...else)
// Escribe un script para mostrar las horas y los minutos en la consola del navegador 
// como una cadena con el formato `"14 h. 26 min"`. Si el valor de la variable `minutes` es `0`, entonces
// muestra la cadena `"14 h"`, sin minutos.

const hours = 14;
const minutes = 10;
let timestring;

if (minutes !== 0) {
  timestring = `${hours} h. ${minutes} min`;
} else {
  timestring = `${hours} h`;
}
// console.log(timestring);
timestring = minutes !== 0 ? `${hours} h. ${minutes} min` : `${hours} h`
// console.log(timestring);

//// Ejemplo 3 - Oración condicional
// Escriba un script que muestre en la consola la cadena `"Este es un número positivo"`, si el 
// usuario ha introducido un número mayor que cero en el prompt. Si se ha introducido un cero, 
// la respuesta en la consola es la cadena `"Esto es cero"`.Si se introduce un número negativo, 
// en la consola debe aparecer la cadena `"Este es un número negativo"`.

// const userInput = parseFloat(prompt('Introduzca un número'));

// if(userInput > 0){
//   console.log("Este es un número positivo");
// }else if(userInput == 0){
//   console.log("Esto es cero");
// }else if(userInput < 0){
//   console.log("Este es un número negativo");
// }

//// Ejemplo 4 - Oraciones condicionales encadenadas
// Escribe un script que compare los números de las variables `a` y `b`. Si ambos son mayores 
// que `100`, imprime el mayor de ellos en la consola. En caso contrario, la consola debería
// mostrar la suma del valor de `b` y el número 512.

// const a = 120;
// const b = 18;
// if (a > 100 && b > 100) {
//   a > b ? console.log(a) : console.log(b);
// } else {
//   console.log(b + 512);
// }


//// Ejemplo 5 - Formato del link (endsWith)
// Escriba un script que compruebe si el valor de la variable `link` no termina  con `/`. Si no es
// así, añada dicho símbolo al final del valor de `link`. Utilice la construcción `if...else`.


// let link = 'https://my-site.com/about';
// // console.log(!link.endsWith("/"))
// if (!link.endsWith("/")) {
//   console.log(link + "/");
// } else {
//   console.log(link);
// }



//// Ejemplo 6 - Formato del link (includes y lógica «Y»)

// Escriba un script que compruebe si el valor de la variable `link` no termina con `/`.
// Si no es así, añada dicho símbolo al final del valor de `link`, pero sólo si en `link` hay
// una subcadena `"my-site"`. Utilice la construcción `if...else`.


// let link = 'https://somesite.com/about';
//  link = "https://my-site.com/about";
// console.log(link.includes("my-site"))
// if (!link.endsWith("/") && link.includes("my-site")) {
//   console.log(link + "/");
// } else {
//   console.log(link);
// }
//console.log(link);



//// Ejemplo 7 - Formato del link (operador ternario)
// Refactoriza la tarea número 4 utilizando el operador ternario.
// let link = 'https://somesite.com/about';
// link = "https://my-site.com/about";
// (!link.endsWith("/") && link.includes("my-site"))
//   ? console.log(link + "/")
//   : console.log(link);


//// Ejemplo 8 - if...else y operadores lógicos

// Escriba un script que envíe una cadena a la consola del navegador según el
// valor de la variable `hours`.

// Si el valor de la variable `hours` es:

// - menor que `17`, muestra la cadena `"Pending"`
// - mayor o igual que `17` y menor o igual que 24, muestra la cadena `"Expires"`
// - mayor que `24` , muestra la cadena `"Overdue"`

// const productHours = 28;
// if (productHours < 17) {
//   console.log("Pending")
// } else if (productHours >= 17 && productHours <= 24) {
//   console.log("Expires")
// } else if (productHours > 24) {
//   console.log("Overdue")
// }


//// Ejemplo 10 - Plazo de entrega del proyecto (switch)

const productHours = 3;
switch (productHours) {
  case 1:
    console.log("Horas hasta que paguen 1")
    break;
  case 2:
    console.log("Horas hasta que paguen 2")
    break;
  case 3:
    console.log("Horas hasta que paguen 3")
    break;
  default:
    console.log("No Ingresa")
    break;
}


//// Ejemplo 11 - Bucle for

// Escriba un bucle for que muestre los números en orden ascendente de `min` a `max` en
// la consola del navegador, pero sólo si el número es un múltiplo de `5`.

const max = 100;
const min = 20;
for (let index = 20; index <= 100; index++) {
  // if (index % 5 === 0)
  //   console.log(index)
  (index % 5 === 0) && console.log(index)
}


//// Ejemplo 12 - Entrada del usuario y oración condicional

// Escribe un script que pida un login usando `prompt` y haga un log del resultado en la consola del navegador.

// - Si el visitante introduce `Admin`, `prompt` le pide una contraseña
// - Si no se introduce nada y pulsa la tecla Esc - muestra la cadena `"Cancelado"`
// - En caso contrario, muestra la cadena `"No te conozco"`

// Comprobar la contraseña de la siguiente manera:

// - Si se introduce la contraseña `"Soy el admin"`, mostrar la cadena `"¡Hola!"`
// - En caso contrario, mostrar la cadena `"Contraseña incorrecta"`
