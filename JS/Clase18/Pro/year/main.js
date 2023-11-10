let temporizador;
let tiempoInicial;
let ejecutando;

function iniciarTemporizador() {
    var fechaInicial = new Date;
    fechaInicial.setFullYear(fechaInicial.getFullYear() + 1);
    fechaInicial.setMonth(0)
    fechaInicial.setDate(1)
    fechaInicial.setHours(0)
    fechaInicial.setMinutes(0)
    fechaInicial.setSeconds(0)
    temporizador = setInterval(() => {
        // console.log("otro codigo");
        actualizarTemporizador(fechaInicial);
    })
}


function actualizarTemporizador(fechaFinal) {
    let tiempoActual = Date.now();
    let tiempoRestante = fechaFinal - tiempoActual;
    // console.log(tiempoRestante)
    let segundos = Math.floor(tiempoRestante / 1000) % 60;
    let minutos = Math.floor(tiempoRestante / (1000 * 60)) % 60;
    let horas = Math.floor(tiempoRestante / (1000 * 60 * 60) % 24);
    let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));

    console.log(segundos)
    console.log(minutos)
    console.log(horas)
    console.log(dias)
    // clearInterval(temporizador)

    segundos = (segundos < 10) ? "0" + segundos : segundos;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    horas = (horas < 10) ? "0" + horas : horas;

    document.getElementById("temporizador").innerHTML = dias + "d " + horas + ":" + minutos + ":" + segundos;
}

iniciarTemporizador()

