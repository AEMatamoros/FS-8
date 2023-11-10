// const timerId = setTimeout(callback, delay, arg1, arg2, ...);
// const welcome = (nombre) => {
//     alert("I love async JS! " + nombre);
// }
// setTimeout(welcome, 3000, "Alexis");
// const welcome2 = (nombre) => {
//     console.log("I love async JS! " + nombre);
// }

// console.log("Este es un log al inicio")
// setInterval(welcome2, 1500, "Eduardo");
// console.log("Este es un log al final")

// console.log("Este es un log al inicio");
// console.log("I love async JS! Eduardo");
// console.log("Este es un log al final");


let timerId = null;
let timerId2 = null;
let timerId3 = null;


timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
}, 1000);

timerId2 = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
}, 3000);

timerId3 = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
}, 3000);
console.log(timerId)
console.log(timerId2)
console.log(timerId3)

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerId);
    console.log(`Interval with id ${timerId} has stopped!`);
});