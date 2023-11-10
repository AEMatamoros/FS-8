const palletItemEl = document.querySelectorAll('.js-pallet>li'); //Elementos de la paletaelement.style element.dataset
// Crear funcion que genere colores aleatorios


for (let item of palletItemEl) {
    let color = randomColor();
    item.style.backgroundColor = color;
    item.dataset.color = color;
}

function randomColor() {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
}

let palletEl = document.getElementById("pallet");
palletEl.addEventListener("click", (e) => {
    if (e.target.querySelector("span").textContent !== "...") {
        e.target.querySelector("span").textContent = "..."
    } else {
        e.target.querySelector("span").textContent = e.target.dataset.color;
    }

})