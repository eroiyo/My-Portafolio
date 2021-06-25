function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    let x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

function Formobj(name, last, email, message) {
  this.name = name;
  this.last = last;
  this.email = email;
  this.message = message;
}

function success(input, small) {
  input.classList.add('success');
  input.classList.remove('error');
  small.textContent = '';
}

function successb(input) {
  input.classList.add('success');
  input.classList.remove('error');
}

function error(input, small, message) {
  input.classList.add('error');
  input.classList.remove('success');
  small.textContent = message;
}

function errorb(input) {
  input.classList.add('error');
  input.classList.remove('success');
}

function isEmpty(input, small, message) {
  if (input.value.trim() === '') {
    error(input, small, message);
    return false;
  }
  success(input, small);
  return true;
}

function shouldBeLowercase(input, small, message) {
  const should = (input.value).toLowerCase();
  if (input.value !== should) {
    message += should;
    error(input, small, message);
    return false;
  }
  success(input, small);
  return true;
}

function areaCharacterLimit(input, small, message) {
  if (input.value.length > 500) {
    error(input, small, message);
    return false;
  }
  success(input, small);
  return true;
}
const form = document.getElementById('contact-form');
const sname = document.querySelector('.small-name');
const nameInput = document.getElementById('name');
const nameL = document.getElementById('last');
const semail = document.querySelector('.small-email');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const stextarea = document.querySelector('.small-textarea');
let formobj = 0;
const standart = new Formobj('', '', '', '');

if (storageAvailable('localStorage')) {
  formobj = JSON.parse(localStorage.getItem('formobj'));
  if (formobj === null) {
    formobj = standart;
  }
  nameInput.value = formobj.name;
  nameL.value = formobj.last;
  email.value = formobj.email;
  textarea.value = formobj.message;
}

form.addEventListener('reset', () => {
  localStorage.setItem('formobj', JSON.stringify(standart));
});

form.addEventListener('submit', (event) => {
  let preventOrNot = false;
  if (isEmpty(nameInput, sname, 'Name is required') === false) {
    preventOrNot = true;
    errorb(nameL);
  } else {
    successb(nameL);
  }
  if (isEmpty(email, semail, 'Email is required') === false) {
    preventOrNot = true;
  } else if (shouldBeLowercase(email, semail, 'Email should be lowercase, you can try ') === false) {
    preventOrNot = true;
  }
  if (isEmpty(textarea, stextarea, 'Message is required') === false) {
    preventOrNot = true;
  } else if (areaCharacterLimit(textarea, stextarea, 'The character should not exceed 500') === false) {
    preventOrNot = true;
  }

  formobj.name = nameInput.value;
  formobj.last = nameL.value;
  formobj.email = email.value;
  formobj.message = textarea.value;
  localStorage.setItem('formobj', JSON.stringify(formobj));

  if (preventOrNot) {
    event.preventDefault();
  }
});
