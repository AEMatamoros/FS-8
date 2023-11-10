// ## Ejemplo 6 - Métodos de cadenas y encadenamiento

// Escriba un script que calcule el índice de masa corporal de una persona. Para ello
// divide el peso en kilogramos por el cuadrado de la altura de la persona en metros.

// El peso y la altura se almacenan en las variables `weight` y `height`, pero no como
// números, sino como cadenas (específicamente para esta tarea). Los números no enteros se
// pueden dar en forma de `24.7` o `24,7`, es decir, la parte de la fracción puede estar
// separada por una coma.

// El índice de masa corporal debe redondearse para que tenga solo una cifra después de la coma;


let weight = '88,3';
    weight = weight.replace(',','.');
    weight = parseFloat(weight);
let height = '1.75';
    height = parseFloat(height);
let imc = weight/Math.pow(height,2);
    imc = imc.toFixed(1);
    console.log(imc);
    // console.log((parseFloat(weight.replace(',','.'))/Math.pow(parseFloat(height),2)).toFixed(1));
// Peso entre altura al cuadrado

