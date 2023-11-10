var temporizador;
var tiempoInicial;
var ejecutando = false;

function iniciarTemporizador() {
    if (!ejecutando) {
        var fechaFinal = new Date();
        fechaFinal.setFullYear(fechaFinal.getFullYear() + 1);
        fechaFinal.setMonth(0);
        fechaFinal.setDate(1);
        fechaFinal.setHours(0);
        fechaFinal.setMinutes(0);
        fechaFinal.setSeconds(0);
        tiempoInicial = Date.now();
        ejecutando = true;
        temporizador = setInterval(function () {
            actualizarTemporizador(fechaFinal);
        }, 1000);
    }
}


function actualizarTemporizador(fechaFinal) {
    var tiempoActual = Date.now();
    var tiempoRestante = fechaFinal - tiempoActual;

    if (tiempoRestante <= 0) {
        clearInterval(temporizador);
        ejecutando = false;
        document.getElementById("temporizador").innerHTML = "¡Feliz Año Nuevo!";
    } else {
        var segundos = Math.floor(tiempoRestante / 1000) % 60;
        var minutos = Math.floor(tiempoRestante / (1000 * 60)) % 60;
        var horas = Math.floor(tiempoRestante / (1000 * 60 * 60)) % 24;
        var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));

        segundos = (segundos < 10) ? "0" + segundos : segundos;
        minutos = (minutos < 10) ? "0" + minutos : minutos;
        horas = (horas < 10) ? "0" + horas : horas;

        document.getElementById("temporizador").innerHTML = dias + "d " + horas + ":" + minutos + ":" + segundos;
    }
}

iniciarTemporizador()