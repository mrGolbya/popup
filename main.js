const modal = new ItcModal();
// при клике на странице
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-toggle="modal"]');
  if (btn) {
    modal.setTitle(btn.dataset.title);
    modal.setBody(btn.dataset.content);
    modal.show();
  }
});
