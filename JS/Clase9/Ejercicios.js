//// Ejemplo 3 - Calculadora

// Crea un objeto `calculator` con tres métodos:

// - `read(a, b)` - toma dos valores y los almacena como propiedades del objeto.
// - `add()` - devuelve la suma de los valores almacenados.
// - `mult()` - multiplica los valores almacenados y devuelve el resultado.

const calculator = {
    num1: 0,
    num2: 0,
    read(num1Param, num2Param) {
        this.num1 = num1Param;
        this.num2 = num2Param;
        return `Numeros registrado N1: ${this.num1} N2: ${this.num2}`
    },
    add() {
        return "SUMA " + (this.num1 + this.num2);
    },
    mult() {
        return "Multiplicacion " + (this.num1 * this.num2);
    }
};

console.log(calculator.read(5, 7))
console.log(calculator.add())
console.log(calculator.mult())


