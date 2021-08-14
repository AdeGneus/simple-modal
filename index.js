'use strict';

// UI variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModalBtns.length; i++) {
  // Listen for a click on each button
  openModalBtns[i].addEventListener('click', openModal);
}

// listen for a click to close the modal
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// listen for escape keypress
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});