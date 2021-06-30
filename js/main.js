document.addEventListener('DOMContentLoaded', function () {
  const btnOpenModal = document.querySelector('#btn-open-modal');
  const btnCloseModal = document.querySelector('#btn-close-modal');
  const btnOpenMenu = document.querySelector('#btn-open-menu');
  const btnCloseMenu = document.querySelector('#btn-close-menu');

  const modalAction = (modalId, status) => {
    let modal = document.querySelector(`#${modalId}`);
    status == 'open' ? modal.classList.add('itk-js-open') : modal.classList.remove('itk-js-open');
  }

  btnOpenModal.addEventListener('click', function () {
    modalAction('modal', 'open');
  });

  btnCloseModal.addEventListener('click', function () {
    modalAction('modal', 'close');
  });

  btnOpenMenu.addEventListener('click', function () {
    modalAction('menu', 'open');
  });

  btnCloseMenu.addEventListener('click', function () {
    modalAction('menu', 'close');
  });

});