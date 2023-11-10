//Exportacion
// import { nombre, edad, apellido } from './exports.js';
import { nombre as nombrePersona, edad, apellido } from './default.js';
import { data } from './default.js';


// Exportacion por defecto
import saludo2 from './default.js';

console.log(nombrePersona)

console.log(saludo2(data.nombre, data.apellido, data.edad));