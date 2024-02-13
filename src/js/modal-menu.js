document.addEventListener('DOMContentLoaded', function () {
  const headerMenuToggle = document.querySelector('.button-header');
  const menuModal = document.querySelector('.backdrop-menu-modal');
  const menuModalCloseButton = document.querySelector(
    '.menu-modal-close-button'
  );

  // Відкриття модального вікна
  headerMenuToggle.addEventListener('click', function () {
    menuModal.classList.remove('is-hidden');
  });

  // Закриття модального вікна
  menuModalCloseButton.addEventListener('click', function () {
    menuModal.classList.add('is-hidden');
  });
});
