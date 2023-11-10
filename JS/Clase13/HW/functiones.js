function suma(num1, num2) {
    // Cuerpo de la funcion
    let total = num1 + num2;
    return total;
}


let resultadoSuma = suma(1, 2)
// console.log(resultadoSuma);

const suma2 = (num1, num2) => {
    // return 5; //No ejecuta el codigo consecuente
    let total = num1 + num2;

    if (total > 0) {
        return total;
    } else {
        return 0
    }

}

let resultadoSuma2 = suma2(-1, -2)
// console.log(resultadoSuma2);





const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

function makeMessage(callback) {
    console.log(callback) //es una llamada al método getFullName sin un objeto
    // console.log(`Tramitamos la solicitud de ${callback()}.`);
}

function makeMessage2(callback) {
    console.log(callback()) //es una llamada al método getFullName sin un objeto
    // console.log(`Tramitamos la solicitud de ${callback()}.`);
}

makeMessage(customer.getFullName.call(customer)); //Apply, call --> Se ejcutan al paasar los parametros

makeMessage2(customer.getFullName.bind(customer)); //Bind no ejecuta la funcion


