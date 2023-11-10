let data = [
    {
        "id": 0,
        "name": "Empresa 0",
        "sucursales": [5, 1, 2, 3, 4, 5, 6, 7],
        "propietario": {
            "nombre": "Alexis 0",
            "apellido": "Matamoros 0",
            "direccion": {
                "id": 0,
                "correlativo": {
                    "id": 0,
                    "nombre": "Correlativo 0"
                },
                "nombre": "Direccion 0"
            }
        },
        ganancias: 1000000
    },
    {
        "id": 1,
        "name": "Empresa 1",
        "sucursales": [1],
        "propietario": {
            "nombre": "Alexis 1",
            "apellido": "Matamoros 1",
            "direccion": {
                "id": 1,
                "correlativo": {
                    "id": 1,
                    "nombre": "Correlativo 1"
                },
                "nombre": "Direccion 1"
            }
        }
    },
    {
        "id": 2,
        "name": "Empresa 2",
        "sucursales": [1],
        "propietario": {
            "nombre": "Alexis 2",
            "apellido": "Matamoros 2",
            "direccion": {
                "id": 2,
                "correlativo": {
                    "id": 2,
                    "nombre": "Correlativo 2"
                },
                "nombre": "Direccion 2"
            }
        }
    }
]

let objeto1 = data[0];
let objeto2 = { ...objeto1 };
// objeto2.name = "Modificado"
// console.log(objeto1 === objeto2)
// console.log(objeto1)
// console.log(objeto2)

let agregado = {
    id: 1,
    corporativa: 'SA Imaginario'
}

agregado.idAgregado = agregado.id


let empresaConTodoSusDatos = {
    ...objeto1,
    ...agregado
}

// console.log(empresaConTodoSusDatos)




let arreglo1 = data[0].sucursales
let arreglo2 = [...arreglo1];
arreglo2.push(8)

let arregloConcatenado = [...arreglo1, ...arreglo2]
// console.log(arreglo1 === arreglo2)
// console.log(arreglo1)
// console.log(arregloConcatenado)

function foo(num1, num2, num3, ...rest) {
    console.log(rest)
}

// function foo(...args) {
//     console.log(args)
// }

// foo(1, 2, 3, 4, 5, 6, 8, 9)

let objeto3 = data[0];
// console.log(objeto3)
let { name: nombre, propietario: { nombre: nombrePropietario, apellido: apellidoPropietario }, sucursales } = objeto3;
// console.log(`El propietario de la empresa ${objeto3.name} es el caballero ${objeto3.propietario.nombre}, y tiene ${objeto3.sucursales.length} sucursales`);
// console.log(`El propietario de la empresa ${nombre} es el caballero ${nombrePropietario + " " + apellidoPropietario}, y tiene ${sucursales.length} sucursales`)



let arreglo3 = data[0].sucursales
let [numero1, ...rest] = arreglo3;
// console.log(arreglo3)
// console.log(rest)

for (const num of rest) {
    numero1 > num && (numero1 = num);
}

// console.log(numero1)

let empresa = data[0];
console.log(empresa)

function obtenerCredito({ sucursales, ganancias, name }) {
    if (sucursales.length > 2 && ganancias > 500000) {
        return `Credito Aprobado par ala empresa ${name}`
    }
    return "No Aprobado"
}
console.log(obtenerCredito(empresa))