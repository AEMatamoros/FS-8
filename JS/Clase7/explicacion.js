// function getFullName(nombre, apellido) {
//     return nombre + " " + apellido;
// }

// function welcome(nombre, apellido, getFullNameFunction) {
//     console.log("Log de la funcion de orden superior");

//     let fullName = getFullNameFunction(nombre, apellido);
//     console.log(fullName);
// }

// welcome("Alexis", "Matamoros", getFullName)

function getEdad(anoNacimiento) {
    return 2023 - anoNacimiento;
}

function welcome(nombre, apellido, anoNacimiento, getFullNameFunction, getEdadFunction) {
    console.log("Log de la funcion de orden superior");

    let fullName = getFullNameFunction(nombre, apellido);
    let edad = getEdadFunction(anoNacimiento)
    console.log(fullName + " Su edad es " + edad);
}

// welcome("Alexis", "Matamoros", 1996, function getFullName(nombre, apellido) {
//     return nombre + " " + apellido;
// }, getEdad);


let paises = ["Colombia", "Mexico", "Honduras", "Ecuador", "Bolivia", "Narnia"]

// for (let index = 0; index < paises.length; index++) {
//     console.log(paises[index])
// }

paises.forEach(function printValues(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array)
})


const getEdad2 = (anoNacimiento) => 2023 - anoNacimiento

// console.log(getEdad2(1993))

const ramdon = (...args) => {
    console.log(args)
}

// ramdon(1, 2, 3, 4, 556, 6)

// Funcion Anonima
// () => {
//     return "Alexis MAtamoros"
// }

paises.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array)
})

// Enfoque declarativo
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]