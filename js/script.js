const nav2 = document.querySelector('.secondary-nav');
const screenSize = window.matchMedia('(min-width: 1024px)');
const logo = document.querySelector('.logo');
const modal = document.querySelector('.modal-background');
const bt = document.querySelector('.modal-buttons');

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

function closeModal() {
  bt.style.display = 'none';
  modal.style.visibility = 'hidden';
}

function isEmpty(input, small, message) {
  if (input.value.trim() === '') {
    error(input, small, message);
    return false
  } else {
    success(input, small);
    return true;
  }
}

function success(input, small) {
  input.classList.add('success')
  input.classList.remove('error')
  small.textContent = '';
}

function successb(input) {
  input.classList.add('success')
  input.classList.remove('error')
}

function error(input, small, message) {
  input.classList.add('error')
  input.classList.remove('success')
  small.textContent = message;
}

function errorb(input) {
  input.classList.add('error')
  input.classList.remove('success')
}

function shouldBeLowercase(input, small, message) {
  const should = (email.value).toLowerCase();
  if (email.value !== should) {
    small.textContent = message + should;
    error(input, small, message);
    return false;
  } else {
    success(input, small);
  }
}

function areaCharacterLimit(textarea, stextarea, message) {
  stextarea.textContent = message;
  return textarea.value.length > 500;
}


phone(screenSize);
screenSize.addListener(phone);
closeModal();
///form proccess
const form = document.getElementById('contact-form');
const sname = document.querySelector('.small-name');
const nameInput = document.getElementById('name');
const nameL = document.getElementById('last')
const semail = document.querySelector('.small-email');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const stextarea = document.querySelector('.small-textarea');

form.addEventListener('submit', (event) => {
  let preventOrNot = false;
  if (isEmpty(nameInput, sname, 'Name is required') === false) {
    preventOrNot = true;
    errorb(nameL)
  } else {
    successb(nameL)
  }

  if (isEmpty(textarea, stextarea, 'Message is required') === false) {
    preventOrNot = true;
  }

  if (isEmpty(email, semail, 'Email is required') === false) {
    preventOrNot = true;
  } else {
    if (shouldBeLowercase(email, semail, 'Email should be lowercase, you can try ') === false) {
      preventOrNot = true;
    }
  }

  if (areaCharacterLimit(textarea, stextarea, 'The character should not exceed 500'))
    event.preventDefault();

  if (preventOrNot) {
    event.preventDefault();
  }
});