/*
 * Eventos.Métodos addEventListener() y Método removeEventListener(). Objeto del Evento
 */

/*
 ?  - mejores nombres de callback para listener
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

//  handleSwapBtnClick
// swapBtnClickHandler
//  onSwapBtnClick

const swapBtnEl = document.querySelector(".js-swap-btn");
const removeListenerBtnEl = document.querySelector(".js-remove-listener");
const imgEl = document.querySelector(".js-img");

const onSwapBtnClick = (e) => {
  console.log(e);
  imgEl.src = "https://picsum.photos/200/300";
  imgEl.alt = "random";
  e.target.style.backgroundColor = "tomato";
};

// Agregar funciones para cambiar la imagen , y para eliminar wel evento de cambiar imagen

// https://picsum.photos/200/300
