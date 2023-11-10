# Módulo 1. Clase 1. Variables, tipos y operadores

log(result);

## Ejemplo 5 - Plantilla de cadena

Escriba una frase utilizando una plantilla de cadena `A has B bots in stock`, donde A, B
son variables insertadas en la cadena.

```js
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const message = ``;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
```

## Ejemplo 9 - Valor por defecto y Nullish coalescing operator

Refactoriza el código para que a la variable `value` se le asigne el valor de
la variable `incomingValue` , en caso de que el valor no sea `undefined` o `null`.
En caso contrario, se debe asignar el valor `defaultValue`. Comprueba que el script
funciona para los siguientes valores de la variable `incomingValue`: null, undefined,
0, false. Utilice el operador `??` (nullish coalescing operator).

```js
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue || defaultValue;
console.log(value);
```

## Ejemplo 10 - Operador % y métodos de cadena

Escribe un script que traduzca el valor de `totalMinutes` ( cantidad de minutos) en
una cadena en formato de horas y minutos `HH:MM`.

- 70 muestra 01:10
- 450 muestra 07:30
- 1441 muestra 24:01

```js
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
```
