const backdrop = document.querySelector('.backdrop');
const planButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
// console.dir(negativeButton)
// console.dir(backdrop);
// console.log(planButtons)

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener('click', showModal);
}
function showModal() {
  // backdrop.style.display = 'block';
  // modal.style.display = 'block';
  modal.classList.add('open');
  backdrop.classList.add('open');
}
backdrop.addEventListener('click', closeModal);
if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}
toggleButton.addEventListener('click', showSideBar);
mobileNav.addEventListener('click', hideSideBar);

function showSideBar() {
  // mobileNav.style.display = 'block';
  mobileNav.classList.add('open');
}
function hideSideBar() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
}

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}
