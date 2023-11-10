/*
 * Propagación de eventos (inmersión, targeting, superficie)
 */

const sectionEl = document.querySelector(".js-section");
const divEl = document.querySelector(".js-div");
const textEl = document.querySelector(".js-text");


sectionEl.addEventListener("click", (e) => {
    alert("Se ejecuto el evento click del section");
    e.stopPropagation()
})

divEl.addEventListener("click", (e) => {
    alert("Se ejecuto el evento click del div");
    e.stopImmediatePropagation()
})

textEl.addEventListener("click", (e) => {
    alert("Se ejecuto el evento click del p");
    e.stopPropagation()
})
// Detener Propagacion
// stopPropagation

document.body.addEventListener("click", (e) => {
    alert("Se ejecuto el evento click del body");
})