const modal = new ItcModal({
  title: 'Заголовок',
  content: '<div>Содержимое модального окна...</div>',
  footerButtons: [
    { class: 'btn btn-close', text: 'Закрыть', action: 'close' },
  ]
});
// при клике на странице
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-toggle="modal"]')) {
    modal.show();
  }
  if (e.target.closest('[data-action="close"]')) {
    modal.hide();
  }
});