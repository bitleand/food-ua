const
  modalAttributeOpen = document.querySelectorAll('[data-modal]'),
  modalAttributeClose = document.querySelector('[data-close]'),
  modalWindow = document.querySelector('.modal');

const modalClose = () => {
  modalWindow.classList.add('hide');
  modalWindow.classList.remove('show');
  document.body.classList.remove('hidden');
}

const modalOpen = () => {
  modalWindow.classList.add('show', 'fade');
  modalWindow.classList.remove('hide');
  document.body.classList.add('hidden');

  clearInterval(modalShowTimer);
}

const modalShowTimer = () => setTimeout(modalOpen, 5000);

const modalShow = (open) => {
  open.forEach(btn => btn.addEventListener('click', modalOpen));
}

const modalHidden = (close) => {
  close.addEventListener('click', modalClose);
}

const modalHiddenBg = (modal) => {
  modal.addEventListener('click', (e) => e.target === modal ? modalClose() : false);
}

const modalHiddenEscape = (modal) => {
  document.addEventListener('keydown', (e) => {
    e.code === 'Escape' && modal.classList.contains('show') ? modalClose() : false;
  });
}

modalOpen();
modalClose();
modalShowTimer();
modalShow(modalAttributeOpen, modalWindow);
modalHidden(modalAttributeClose);
modalHiddenBg(modalWindow);
modalHiddenEscape(modalWindow);
