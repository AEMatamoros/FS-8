// ## Ejemplo 8 - Operadores lógicos

// ¿Cuál sería el resultado de las expresiones?
// && and Es verdadera solo si los dos elementos son iguales
// || or Es verdadero cuando cualquiera de sus expresiones es verdadera

console.log('true && false');
console.log(true && false);

console.log('false && 3');
console.log(false && 3);

console.log('true && 4 && "kiwi"');
console.log(true && 4 && "kiwi");

console.log('true && 0 && "kiwi"');
console.log(true && 0 && "kiwi");

console.log('true || 3');
console.log(true || 3);

console.log('true || 3 || 4');
console.log(true || 3 || 4);

console.log('true || false || 7');
console.log(true || false || 7);

console.log('null || 2 || undefined');
console.log(null || 2 || undefined);

console.log('(1 && null && 2) > 0');
console.log((1 && null && 2) > 0);

console.log('null || (2 && 3) || 4');
console.log(null || (2 && 3) || 4);

console.log('null ?? undefined ?? "Hola"');
console.log(null ?? undefined ?? "Hola");


