let init = document.getElementById("init");
let stop = document.getElementById("stop");

// console.log(init.dataset);
let interval;
init.addEventListener("click", initInterval);

stop.addEventListener("click", stopinterval);

function initInterval(...args) {
  args[0].target.disabled = true;
  interval = setInterval(() => {
    console.log("Cambiar color de fondo");
  }, 1000);
}

function stopinterval() {
  clearInterval(interval);
}
