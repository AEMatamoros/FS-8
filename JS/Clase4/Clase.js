function hello(userName) {
    return `Welcome ${userName}`;
}

let userName = 'Alexis';

// console.log(hello(userName))

function sum() {
    // console.log(arguments[0])
    // console.log(arguments)
    let args = Array.from(arguments)
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total

}

function sum2(...args) {
    // console.log(args)
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total
}

// console.log(sum(1, 2, 4, 5, 6, 7, 8, 9, 10));
// console.log(sum2(1, 2));


// function mult(number1 = 1, number2 = 2, number3) {
//     return number1 * number2 * number3
// }

function mult(number1, number2 = 2) {
    let multResult = number1 * number2
    return multResult;
}

// console.log(multResult)

console.log("mult(1)");
console.log(mult(1));
console.log("mult(2)");
console.log(mult(2));
console.log("mult(3)");
console.log(mult(3));
console.log("mult(4, 5)");
console.log(mult(4, 5));



const a = 20; //Global;
function foo() {
    const a = 20; //Bloque;
    console.log(a); // 20
    for (let i = 0; i < 5; i++) {
        console.log(a); // 20

        if (i === 2) {
            console.log(a); // 20
        }
    }
}

foo()

function auth(isAuth) {
    let responseMessage = ''
    if (isAuth === true) {
        responseMessage = 'Esta autenticado'
    } else {
        responseMessage = 'No Esta autenticado'
    }
    console.log("Final")
    return responseMessage

}

// function auth(isAuth) {

//     if (isAuth === true) {
//         return 'Esta autenticado'
//     }
//     return 'No Esta autenticado'

// }

console.log(auth(true))


function withdraw(amount, balance) {
    if (amount === 0) {
        console.log("Introduzca un importe superior a cero para realizar la operación");
    } else if (amount > balance) {
        console.log("Insuficiencia de fondos en la cuenta");
    } else {
        console.log("La operación de retirada se ha realizado con éxito");
    }
}

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Introduzca un importe superior a cero para realizar la operación");
//         return;
//     }
//     if (amount > balance) {
//         console.log("Insuficiencia de fondos en la cuenta");
//         return;
//     }
//     console.log("Operación de retirada realizada");
// }


withdraw(0, 300);
// withdraw(500, 300); // "Insuficiencia de fondos en la cuenta"
// withdraw(100, 300); 

const multiply = function (number1, number2 = 2) {
    let multResult = number1 * number2
    return multResult;
}
const multiply2 = (number1, number2 = 2) => {
    let multResult = number1 * number2
    return multResult;
}

console.log("Resultado de la multiplicacion");
console.log(multiply(7));
console.log(multiply2(7));