const calendarEl = document.querySelector('.js-calendar');

let prevEl = null;//Valor anterior

const onCalendarClick = (event) => {
  // console.log(event.target.nodeName)
  // console.log(prevEl)

  // if (event.target.nodeName === "TD") {
  //   if (!event.target.classList.contains("void")) {
  //     if (prevEl) {
  //       prevEl.classList.remove("active")
  //     }
  //     event.target.classList.add("active")
  //     prevEl = event.target;
  //   }
  // }
  if (event.target.classList.contains("void")) {
    return
  }

  if (event.target.nodeName === "TD") {
    if (prevEl) {
      prevEl.classList.remove("active")
    }
    event.target.classList.add("active")
    prevEl = event.target;
  }
  // Agregar clase active eliminar si se toca la misma seccion
  // 'active'
};
// if
// if else
// if else if 
calendarEl.addEventListener('click', onCalendarClick);
