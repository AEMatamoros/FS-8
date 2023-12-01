// Módulo 4. Clase 7. CallBacks.Funciones de Flecha.forEach

//// Ejemplo 1 - Funciones CallBack

// Escriba las siguientes funciones:

// - `createProduct(obj, callback)` - acepta un objeto de producto sin id, así como una CallBack.
//   La función crea un objeto de producto añadiendo un identificador único a su propiedad `id` y
//   llama al la CallBack, pasándole el objeto creado.
// - `logProduct(product)` - callback que recibe un objeto de producto y lo registra
//   en el consola
//     - `logTotalPrice(product)` - callback que recibe un objeto de producto y registra
//   el coste total del producto en la consola
let productObject = {
    name: "Producto 1",
    price: 10,
    total: 5
}

function createProductObj(obj, callback) {
    obj.id = Date.now()
    callback(obj)
}

function logProductObj(product) {
    console.log("logProductObj")
    console.log(product)
}

function logTotalPriceObj(product) {
    console.log("logTotalPriceObj")
    console.log(product.price * product.total)
}

createProductObj(productObject, logProductObj)
createProductObj(productObject, logTotalPriceObj)


// //// Ejemplo 2 - Funciones CallBack

// // Agregue un objeto `account` métodos `withdraw(amount, onSuccess, onError)` y
// //     `deposit(amount, onSuccess, onError)`, donde el primer parámetro es la suma de la 
// //  operación y el segundo y el tercero son las CallBacks.

// // El método `withdraw` devuelve onError si el monto es mayor que TRANSACTION_LIMIT o
// // this.balance, y en caso contrario onSuccess.

// // EL método `deposit` devuelve onError si el monto el mayor que TRANSACTION_LIMIT o menor
// // o igual a 0, y en caso contrario onSuccess.


// // Solución
const TRANSACTION_LIMIT = 1000;

const account = {
    username: 'Jacob',
    balance: 400,
    withdraw(amount, handleSuccess, handleError) {
        if (this.balance < amount || TRANSACTION_LIMIT < amount) {
            handleSuccess("Transacction correcta")
        }
        else {
            handleError("Transaccion Fallida")
        }
    },
    deposit(amount, handleSuccess, handleError) {
        if (amount > 0 && amount < TRANSACTION_LIMIT) {
            handleSuccess("Transacction correcta")
        } else {
            handleError("Transaccion Fallida")
        }
    },
};

function handleSuccess(message) {
    console.log(`✅ Success! ${message}`);
}
function handleError(message) {
    console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);


// //// Ejemplo 3 - Funciones CallBack

// // Escriba una función `each(array, callback)` la cual espera un array como primer
// // parámetro, y como segundo una función a aplicar a cada elemento del array. La 
// // función each debe devolver un nuevo array cuyos elementos son los resultados 
// // de llamar la función CallBack.

// // Solución
function each(array, callback) {

    let resultArray = [];
    for (let index = 0; index < array.length; index++) {

        resultArray.push(callback(array[index]))

    }

    return resultArray;
}

console.log(
    each([64, 49, 36, 25, 16], function (value) {
        return value * 2;
    }),
);
console.log(
    each([64, 49, 36, 25, 16], function (value) {
        return value - 10;
    }),
);
console.log(
    each([64, 49, 36, 25, 16], function (value) {
        return Math.sqrt(value);
    }),
);
console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
        return Math.ceil(value);
    }),
);
console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
        return Math.floor(value);
    }),
);


// //// Ejemplo 4 - Funciones de Flecha

// // Efectúe la refactorización del código utilizando las funciones de flecha.


const createProduct = (partialProduct, callback) => {
    const product = { id: Date.now(), ...partialProduct };
    callback(product);
}

// function logProduct(product) {
//     console.log(product);
// }

const logProduct = (product) => {
    console.log(product);
}

const logTotalPrice = (product) => {
    console.log(product.price * product.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);


// //// Ejemplo 5 - Funciones de Flecha

// // Efectúe la refactorización del código utilizando las funciones de flecha.


const TRANSACTION_LIMIT2 = 1000;

const account2 = {
    username: 'Jacob',
    balance: 400,
    withdraw: (amount, onSuccess, onError) => {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
        } else if (amount > this.balance) {
            onError(`Amount can't exceed account balance of ${this.balance} credits`);
        } else {
            this.balance -= amount;
            onSuccess(`Account balance: ${this.balance}`);
        }
    },
    deposit: (amount, onSuccess, onError) => {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
        } else if (amount <= 0) {
            onError(`Amount must be more than 0 credits`);
        } else {
            this.balance += amount;
            onSuccess(`Account balance: ${this.balance}`);
        }
    },
};

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);


// //// Ejemplo 6 - Funciones de Flecha en línea

// // Efectúe la refactorización del código utilizando las funciones de flecha.


const each2 = (array, callback) => {
    const newArr = [];
    for (const el of array) {
        newArr.push(callback(el));
    }
    return newArr;
}

console.log(
    each2([64, 49, 36, 25, 16], (value) => {
        return value * 2;
    }),
);
console.log(
    each2([64, 49, 36, 25, 16], (value) => {
        return value - 10;
    }),
);
console.log(
    each2([64, 49, 36, 25, 16], (value) => {
        return Math.sqrt(value);
    }),
);
console.log(
    each2([1.5, 2.1, 16.4, 9.7, 11.3], (value) => {
        return Math.ceil(value);
    }),
);
console.log(
    each2([1.5, 2.1, 16.4, 9.7, 11.3], (value) => {
        return Math.floor(value);
    }),
);


// //// Ejemplo 7 - Método forEach

// // Efectúe la refactorización del código utilizando el método `forEach` y Funciones Flecha.


const logItems = (items) => {
    console.log(items);
    // for (let i = 0; i < items.length; i += 1) {
    //     console.log(`${i + 1} - ${items[i]}`);
    // }
    items.forEach(value => {
        console.log(value)
    })
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


// //// Ejemplo 8 - Método forEach

// // Efectúe la refactorización del código utilizando el método `forEach` Funciones Flecha.

const printContactsInfo = ({ names, phones }) => {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    // for (let i = 0; i < nameList.length; i += 1) {
    //     console.log(`${nameList[i]}: ${phoneList[i]}`);
    // }
    nameList.forEach((value, index) => {
        console.log(`${value}: ${phoneList[index]}`);
    })
}

function printContactsInfo ({ names, phones }){
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    for (let i = 0; i < nameList.length; i += 1) {
        console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
    
}

printContactsInfo({
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
});

// //// Ejemplo 9 - Método forEach

// // Efectúe la refactorización del código utilizando el método `forEach` Funciones Flecha.

const calсulateAverage = (...args) => {
    let total = 0;
    // for (let i = 0; i < args.length; i++) {
    //     total += args[i];
    // }
    args.forEach(value => {
        total += value
    })
    return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

