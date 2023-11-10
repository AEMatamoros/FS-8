// const date = new Date();

// console.log(typeof (date));
// console.log(typeof (date.toString()));

// console.log(new Date("2030-03-16"));
// console.log(new Date("2030-03"));
// console.log(new Date("2018"));
// console.log(new Date("03/16/2030"));
// console.log(new Date("2030/03/16"));
// console.log(new Date("2030/3/16"));
// console.log(new Date("March 16, 2030"));
// console.log(new Date("March 16, 2030 14:25:00"));
// console.log(new Date("2030-03-16 14:25:00"));
// console.log(new Date("2030-03-16T14:25:00"));
// console.log(new Date("16 March 2030"));


// const date = new Date();
// console.log("Date: ", date);

// // Regrese el día del mes del 1 al 31
// console.log("getDate(): ", date.getDate());

// // Regrese el día de la semana del 0 al 6
// console.log("getDay(): ", date.getDay());

// // Regrese los meses del 0 al 11
// console.log("getMonth(): ", date.getMonth() + 1);

// // Regrese el año en 4 cifras
// console.log("getFullYear(): ", date.getFullYear());

// // Regrese la hora
// console.log("getHours(): ", date.getHours());

// // Regrese los minutos
// console.log("getMinutes(): ", date.getMinutes());

// // Regrese los segundos
// console.log("getSeconds(): ", date.getSeconds());

// // Regrese los milisegundos
// console.log("getMilliseconds(): ", date.getMilliseconds());

// const date = new Date();
// console.log("Date: ", date);

// // Regrese el día del mes del 1 al 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Regrese el día de la semana del 0 al 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Regrese los meses del 0 al 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Regrese el año en 4 cifras
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Regrese la hora
// console.log("getUTCHours(): ", date.getUTCHours());

// // Regrese los minutos
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Regrese los segundos
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Regrese los milisegundos
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

const date = new Date("March 16, 2030 14:25:00");

console.log(date.toString());
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(date.toTimeString());
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(date.toLocaleTimeString());
// "2:25:00 PM"

console.log(date.toUTCString());
// "Sat, 16 Mar 2030 12:25:00 GMT"

console.log(date.toDateString());
// "Sat Mar 16 2030"

console.log(date.toISOString());
// "2030-03-16T12:25:00.000Z"

console.log(date.toLocaleString());
// "3/16/2030, 2:25:00 PM"

console.log(date.getTime());
// 1899894300000