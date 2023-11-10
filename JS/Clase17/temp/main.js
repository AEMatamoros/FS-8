var temporizador;
var tiempoInicial;
var ejecutando = false;

function iniciarTemporizador() {
    if (!ejecutando) {
        tiempoInicial = Date.now();
        ejecutando = true;
        temporizador = setInterval(actualizarTemporizador, 1000);
    }
}

function pausarTemporizador() {
    if (ejecutando) {
        clearInterval(temporizador);
        ejecutando = false;
    }
}

function reiniciarTemporizador() {
    clearInterval(temporizador);
    ejecutando = false;
    document.getElementById("temporizador").innerHTML = "00:00:00";
}

function actualizarTemporizador() {
    var tiempoActual = Date.now();
    var tiempoTranscurrido = tiempoActual - tiempoInicial;

    var segundos = Math.floor(tiempoTranscurrido / 1000) % 60;
    var minutos = Math.floor(tiempoTranscurrido / (1000 * 60)) % 60;
    var horas = Math.floor(tiempoTranscurrido / (1000 * 60 * 60));

    segundos = (segundos < 10) ? "0" + segundos : segundos;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    horas = (horas < 10) ? "0" + horas : horas;

    document.getElementById("temporizador").innerHTML = horas + ":" + minutos + ":" + segundos;
}
