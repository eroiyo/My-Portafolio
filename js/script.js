const nav2 = document.querySelector('.secondary-nav');
const screenSize = window.matchMedia('(min-width: 1024px)');
const logo = document.querySelector('.logo');
const modal = document.querySelector('.modal-background')
const bt = document.querySelector('.modal-buttons')

function clickFunction() {
  const para = document.getElementById('toggle-icon');
  para.classList.toggle('rotate-icon');
  if (nav2.style.display !== 'flex') {
    nav2.style.display = 'flex';
    logo.classList.remove('not-hidden');
    logo.classList.add('hidden');
  } else {
    nav2.style.display = 'none';
    logo.classList.add('not-hidden');
    logo.classList.remove('hidden');
  }
}

function phone(screenSize) {
  if (screenSize.matches) {
    if (nav2.style.display === 'flex') {
      clickFunction();
    }
  }
}

function close_modal() {
  bt.style.display = 'none'
  modal.style.visibility = 'hidden';
}

phone(screenSize);
screenSize.addListener(phone);