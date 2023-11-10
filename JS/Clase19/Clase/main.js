// Las promesas en JavaScript son objetos que representan la eventual finalización (o falla)
// de una operación asincrónica y permiten trabajar con el resultado de dicha operación de una manera más cómoda 
// y estructurada.

// Una promesa puede tener uno de los tres estados posibles:

// Pendiente (pending): Estado inicial de la promesa, es decir, la operación asincrónica aún no ha sido completada ni ha fallado.
// Cumplida (fulfilled): La operación asincrónica se ha completado satisfactoriamente y la promesa tiene un valor asociado.
// Rechazada (rejected): La operación asincrónica ha fallado y la promesa tiene un motivo o error asociado.
let promiseResult = document.getElementById("result")
let isPastel = true;
let loading = true;

function callPromise(e) {
    const horneoElPastel = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPastel) {
                return resolve("Se realizo el pastel");
            }
            return reject("No horneo el pastel");
        }, 3000)

    });

    horneoElPastel
        .then(resultado => {
            // .
            // .
            // .
            // La variable resultado solo se puede usar en ambito de bloque
            console.log(resultado);
            promiseResult.textContent = resultado;
            return resultado + "/ Esta es la data que estamos pasando al segundo then"
        })
        .then(resultado2 => {
            console.log(resultado2)
        })
        .catch(error => {
            console.log(error)
            promiseResult.textContent = error;
        })
        .finally(() => {
            console.log("Un codigo que yo quiere se ejecute independientemente de si mi promesa fallo o no");
            document.getElementById("loading").textContent = "";
            loading = false;
            e.target.disabled = false;
        })
    // console.log("Este log esta abajo de la promesa")
}


document.getElementById("callPromise").addEventListener("click", (e) => {
    callPromise(e);
    e.target.disabled = true;
})




//Sintaxis 2
const makeGreeting = guestName => {
    if (guestName === "" || guestName === undefined) {
        return Promise.reject("Guest name must not be empty");
    }

    return Promise.resolve(`Welcome ${guestName}`);
};

// makeGreeting("Mango")
//     .then(greeting => console.log(greeting))
//     .catch(error => console.error(error));

// Ejecucion de multiples promesas

const makePromise = (text, delay) => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => reject(text), delay);
        setTimeout(() => resolve(text), delay);
    });
};

const promiseA = makePromise("promiseA value", 100);
const promiseB = makePromise("promiseB value", 3000);
const promiseC = makePromise("promiseC value", 500);
const promiseD = makePromise("promiseD value", 5000);


// Promise.all([promiseA, promiseB, promiseC, promiseD])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));

Promise.race([promiseA, promiseB, promiseC, promiseD])
    .then(value => console.log(value))
    .catch(error => console.log(error));


























// El Event Loop(bucle de eventos) es un concepto fundamental en JavaScript que controla cómo 
// se gestionan y ejecutan las tareas en un entorno de ejecución de JavaScript, como un navegador o
// Node.js.Es una parte integral del modelo de concurrencia no bloqueante de JavaScript.

// En JavaScript, el Event Loop se encarga de administrar el ciclo de vida de las tareas,
//     incluyendo las operaciones asíncronas y las interacciones con eventos.Su propósito principal 
// es garantizar que las tareas se ejecuten de manera ordenada y eficiente, evitando bloqueos y manteniendo la capacidad de respuesta del programa.

// El Event Loop funciona en un bucle continuo, monitoreando constantemente la pila de tareas
//     (task queue) y la pila de ejecución(execution stack).Aquí hay una descripción general de cómo funciona:

// Cuando el motor de JavaScript encuentra una tarea asíncrona(como una solicitud de red, una 
//     operación de archivo o un temporizador), no espera a que se complete.En su lugar, se delega 
//     a un sistema subyacente, como el motor del navegador o el sistema operativo.

// Mientras tanto, el Event Loop continúa ejecutando el código sincrónico presente en la pila de ejecución. 
// Esto incluye cualquier función o código que esté siendo ejecutado en ese momento.

// Una vez que una tarea asíncrona se completa, se coloca en la pila de tareas(task queue) como una tarea pendiente.

// El Event Loop verifica regularmente si la pila de ejecución está vacía.Si es así,
//     toma la primera tarea de la pila de tareas y la coloca en la pila de ejecución para ser ejecutada.

// El código de la tarea asíncrona se ejecuta en la pila de ejecución.Si hay tareas 
// adicionales que se desencadenan a partir de esta ejecución, también se agregan a la pila de tareas.

// Este proceso se repite continuamente, lo que permite que las tareas asíncronas se 
// ejecuten de manera no bloqueante sin interrumpir la ejecución del código sincrónico.Esto es fundamental 
// para mantener la capacidad de respuesta de una aplicación y evitar que se bloqueen debido a operaciones lentas o bloqueantes.

// En resumen, el Event Loop es el mecanismo que permite la ejecución asíncrona y no 
// bloqueante en JavaScript, asegurando que las tareas se manejen de manera ordenada y eficiente.