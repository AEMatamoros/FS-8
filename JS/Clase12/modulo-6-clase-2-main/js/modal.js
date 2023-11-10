const modalOpenBtnEl = document.querySelector('.js-modal-open');
const modalCloseBtnEl = document.querySelector('.js-modal-close');
const backdropEl = document.querySelector('.js-backdrop');

// const toggleModal = () => {
//   backdropEl.classList.toggle('is-open');
//   if (!backdropEl.classList.contains('is-open')) {
//     document.removeEventListener('keydown', onEscBtnClick);
//   }
// };

const toggleModal = () => {
  backdropEl.classList.toggle('is-open');
};

// Cerrar el modal al presionar modalCloseBtnEl
// Cerrar el modal al presionar backdrop
// Cerrar el modal al presionar la tecla esc



