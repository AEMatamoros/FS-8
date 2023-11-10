const messagesListEl = document.querySelector('.js-messages-wrapper');

const onCloseBtnClick = (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  const { target } = event;
  // target.nodeName ???
  // target.closest ???
};

messagesListEl.addEventListener('click', onCloseBtnClick);
