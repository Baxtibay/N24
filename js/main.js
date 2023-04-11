const elModal = document.querySelector('.modal'),
  elModalClose = elModal.querySelector('.js-modal-close');

elModalClose.addEventListener('click', () => {
  elModal.classList.remove('modal-open')
})

setTimeout(() => {
  elModal.classList.add('modal-open')
}, 30000)