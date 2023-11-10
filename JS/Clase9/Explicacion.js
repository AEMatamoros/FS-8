// Global
// console.log("this")
// console.log(this) //Global test on nav
function welcome(name) {
    this.name = name
    console.log(this)// Es definido en el llamado
    return `Welcome ${name}`
}

// welcome("Alexis")



// En un objeto, hace referencia a ese asus elementos

// let objeto1 = {
//     nombre: "A",
//     apellido: "B",
//     nomCompleto() {
//         console.log(this)
//         return this.nombre + " " + this.apellido
//     }
// }

// console.log(objeto1.nomCompleto())










//En un callback se pierde el contexto, atributos del objeto
const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

function makeMessage(callback) {
    // callback() es una llamada al método getFullName sin un objeto
    console.log(`Tramitamos la solicitud de ${callback()}.`);
}

makeMessage(customer.getFullName); // Habrá un error al llamar a la función






// Funciones Flechas ignoran el use Strict pero siempre hacen referencia a la ventana
"use strict"
const showThis = () => {
    console.log("this in showThis: ", this);
};

// showThis(); // this in showThis: window











// Metodos de Funcionamiento
// Call hace el llamado a la funcion y le brinda un contexto
function Product(name, price) {
    this.name = name;
    this.price = price;
    console.log("From Product")
    console.log(name, price)
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
    console.log("From Food")
    console.log(this)
}

console.log(new Food('cheese', 5).name);




// Apply es igual a call pero se mandan los argumentos como un arreglo
function getMax(numbers) {
    this.newValue = "New Value"
    this.numbers = numbers;
    let max = numbers[0];
    numbers.forEach(value => {
        max < value && (max = value)
    });
    this.max = max;
}
const numbers = [5, 6, 2, 3, 7];

function evaluateMaxValue(numbers) {
    getMax.apply(this, [numbers]);
    console.log(this)
    console.log(this.max)
}

evaluateMaxValue(numbers)

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     console.log("From Product")
//     console.log(name, price)
// }

// function Food(name, price) {
//     Product.apply(this, [name, price]);
//     this.category = 'food';
//     console.log("From Food")
//     console.log(this)
// }

// console.log(new Food('cheese', 5).name);

//Bind no ejecuta en el momento
function greet(clientName) {
    return `${clientName}, bienvenidos a «${this.service}».`;
}

const steam = {
    service: "Steam",
};
const steamGreeter = greet.bind(steam);
steamGreeter("Mango"); // "Mango, bienvenido a  «Steam»."

const gmail = {
    service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Poly");




// Explicar Metodos de Objeto con la doc
const client = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
        console.log(this)//En este caso la fucnion getFullName tambien se retorna, pero no es necesaria, esta por ambito de prueba
        return `${this.firstName} ${this.lastName}`;
    },
};

function makeMessage(callback) {
    // callback() es una llamada al método getFullName sin un objeto
    console.log(`Tramitamos la solicitud de ${callback()}.`);
}

// makeMessage(client.getFullName);
makeMessage(client.getFullName.bind(client));
