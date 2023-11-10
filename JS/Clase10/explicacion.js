// Prototipos
// Object.create(obj);
// __proto__: animal //Verificar en NAV
const carr = {
    color: "red",
    mark: "Toyota",
    model: "Corola",
    wheels: 4,
};

const otherCar = Object.create(carr);
otherCar.model = "Mango";

console.log(otherCar);
// console.log(carr.isPrototypeOf(otherCar));
// console.log(otherCar.isPrototypeOf(carr));


// hasOwnProperty() //Verificar





// Clases

class Vehicle {
    #name;
    #maxSpeed;
    year;

    static model;

    constructor({ name, maxSpeed, year, model }) {
        this.name = name;
        this.#maxSpeed = maxSpeed;
        this.year = year;
        this.model = model;
    }

    iniciarMarcha() {
        console.log(`El vehiculo ha arrancado su motor ` + this.#name)
    }

    obtenerVelocidadMaxima() {
        return this.#maxSpeed;
    }

    static obtenerVelocidadMinima() {
        return 100;
    }

    obtenerVelocidades() {
        return " MIN - " + Vehicle.obtenerVelocidadMinima();
    }

    static maritimo() {
        console.log("Maritimo")
    }

    obtenerTipoTransporte() {
        Vehicle.maritimoTerrestre()
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        return this.#name = name;
    }

}

const civic = new Vehicle({
    year: 2023,
    name: "Civic",
    maxSpeed: "300",
    model: "SG"
});

const corolla = new Vehicle({
    name: "Corolla",
    year: 2023,
    maxSpeed: "150",
    model: "WE"
});

// console.log(civic)
// console.log(corolla)

// civic.iniciarMarcha()

// console.log(civic.name)

// Obteniendo la velocidad maxima
// console.log(civic.obtenerVelocidadMaxima())
// console.log(civic.model)
// civic.model = "qawdasd"
// civic.year = 1976
// console.log(civic.year)
// console.log(civic.obtenerVelocidadMinima())
// console.log(civic.obtenerVelocidades())
// console.log(civic.obtenerTipoTransporte())
// console.log(civic.obtenerNombre())
// civic.agregarNombre("Nuevo")
// console.log(civic)
// console.log(civic.obtenerNombre())
// Metodos
// Propiedades Privadas
// Propiedades Estaticas
// Metodos Estaticos
// Getters y Setters


// Herencia
class Carr extends Vehicle {
    constructor({ name, maxSpeed, year, model, wheels, color }) {
        // Llamada al constructor de la clase parental
        super({ name, maxSpeed, year, model });
        this.wheels = wheels;
        this.color = color
    }
    metod() { }
}

class Plane extends Vehicle {
    constructor({ name, maxSpeed, year, model, color, wings }) {
        // Llamada al constructor de la clase parental
        super({ name, maxSpeed, year, model });
        this.color = color
        this.wings = wings
    }

    flyingDistance() {
        return "1000 millones km"
    }
}


let bmw = new Carr({ name: "Mazda", maxSpeed: 500, year: 8, model: "ASD", wheels: 4, color: "red" })
console.log(bmw.iniciarMarcha())

let avion1 = new Plane({ name: "Avion", maxSpeed: 1500, year: 1, model: "ASD-1", wings: true, color: "red" })
console.log(bmw.iniciarMarcha())
console.log(avion1.obtenerVelocidadMaxima())
console.log(avion1.flyingDistance())
//Metodos de la clase hija
















// 1. Abstracción
// La abstracción oculta al usuario la funcionalidad interna de una aplicación.
// El usuario puede ser el cliente final u otros desarrolladores.

// 2. Herencia
// La herencia nos permite definir múltiples subclases a partir de una clase ya definida.

// 3. Polimorfismo
// El polimorfismo nos permite modificar ligeramente los métodos y atributos de las 
// subclases previamente definidas en la superclase.

// 4. Encapsulación
// La encapsulación es el proceso en el que protegemos la 
// integridad interna de los datos en una clase.


