function loadFormValidation() {
  const form = document.getElementsByTagName('form')[0];
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');

  name.addEventListener('focusout', function(e) {
    if (name.validity.valid) {
        nameError.textContent = '';
        nameError.className = 'error';
    } else {
        showNameError();
    }
  });

  email.addEventListener('focusout', function(e) {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
  });

  phone.addEventListener('focusout', function(e) {
    if (phone.validity.valid) {
        phoneError.textContent = '';
        phoneError.className = 'error';
    } else {
        showPhoneError();
    }
  });

  message.addEventListener('focusout', function(e) {
    if (message.validity.valid) {
        messageError.textContent = '';
        messageError.className = 'error';
    } else {
        showMessageError();
    }
  });

  form.addEventListener('submit', function(e) {
    if (!email.validity.valid) {
        showError();
        e.stopPropagation();
        e.preventDefault();
    }
  });
}

function showNameError() {
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');

  if (name.validity.valueMissing) {
    nameError.textContent = 'Enter a name ya dingus';
  }
  if (name.validity.typeMismatch) {
    nameError.textContent = 'Incorret name ya dingus';
  }
  if (name.validity.rangeOverflow) {
    nameError.textContent = 'Too long ya dingus';
  }
}

function showEmailError() {
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  if (email.validity.valueMissing) {
    emailError.textContent = 'Enter an email ya dingus';
  }
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Incorrect format ya dingus';
  }
  if (email.validity.rangeOverflow) {
    emailError.textContent = 'Too long ya dingus'
  }
}

function showPhoneError() {
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');

  if (phone.validity.valueMissing) {
    phoneError.textContent = 'Enter a phone ya dingus';
  }
  if (phone.validity.typeMismatch) {
    phoneError.textContent = 'Incorrect format ya dingus';
  }
  if (phone.validity.tooShort) {
    phoneError.textContent = 'Too $hort beeyotch';
  }
  if (phone.validity.rangeOverflow) {
    phoneError.textContent = 'Too long ya dingus';
  }
}

function showMessageError() {
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');

  if (message.validity.valueMissing) {
    messageError.textContent = 'Enter a message ya dingus';
  }
  if (message.validity.typeMismatch) {
    messageError.textContent = 'Incorrect format ya dingus';
  }
  if (message.validity.rangeOverflow) {
    messageError.textContent = 'Too long ya dingus';
  }
}

export default loadFormValidation;