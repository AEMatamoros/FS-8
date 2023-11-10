// ## Ejemplo 5 - Plantilla de cadena

// Escriba una frase utilizando una plantilla de cadena `La empresa A tiene B botas en su almacen`, donde A, B
// son variables insertadas en la cadena.

const companyName = "Cyberdyne Systems";
const bots = 150; //Botas Totales
const repairBots = 50; //Botas a reparar
const message = `La empresa ${companyName} tiene ${bots - repairBots} botas en su almacen`;
console.log(message);