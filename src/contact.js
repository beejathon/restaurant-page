import location from './images/location.png';
import loadFormValidation from './validation.js';

function createContactForm() {
    const wrapper = document.createElement('div')
    const form = document.createElement('form');
    const name = document.createElement('input');
    const nameError = document.createElement('span');
    const email = document.createElement('input');
    const emailError = document.createElement('span');
    const phone = document.createElement('input');
    const phoneError = document.createElement('span');
    const message = document.createElement('textarea');
    const messageError = document.createElement('span');
    const button = document.createElement('button');

    wrapper.classList.add('form-wrapper')
    form.classList.add('contact-form');
    form.setAttribute('novalidate', 'true');
    name.classList.add('user-info');
    name.setAttribute('type', 'text');
    name.setAttribute('id', 'name');
    name.setAttribute('required', 'true');
    name.setAttribute('maxlength', '70');
    name.setAttribute('placeholder', 'Name');
    nameError.classList.add('error');
    nameError.setAttribute('id', 'nameError');
    email.classList.add('user-info');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    email.setAttribute('required', 'true');
    email.setAttribute('maxlength', '255');
    email.setAttribute('placeholder', 'Email')
    emailError.classList.add('error');
    emailError.setAttribute('id', 'emailError');
    phone.classList.add('user-info');
    phone.setAttribute('type', 'tel');
    phone.setAttribute('id', 'phone');
    phone.setAttribute('required', 'true');
    phone.setAttribute('minlength', '10');
    phone.setAttribute('pattern', "[0-9]{10}");
    phone.setAttribute('placeholder', 'Enter a 10-digit US phone #');
    phoneError.classList.add('error');
    phoneError.setAttribute('id', 'phoneError');
    message.classList.add('user-message');
    message.setAttribute('id', 'message');
    message.setAttribute('required', 'true');
    message.setAttribute('maxlength', '500');
    message.setAttribute('placeholder', 'Write us a message')
    messageError.classList.add('error');
    messageError.setAttribute('id', 'messageError');
    button.classList.add('submit-btn');
    button.textContent = 'Submit';

    form.appendChild(name);
    form.appendChild(nameError)
    form.appendChild(email);
    form.appendChild(emailError);
    form.appendChild(phone);
    form.appendChild(phoneError);
    form.appendChild(message);
    form.appendChild(messageError);
    form.appendChild(button);
    wrapper.appendChild(form)

    return wrapper;
}

function loadContact() {
    const footer = document.getElementById('footer');
    footer.textContent = '';

    const content = document.getElementById('main');
    content.textContent = '';

    const description = document.createElement('p');
    description.textContent = 'We are located in Long Bien District, just near the Long Bien Bridge and overlooking the Red River.'

    const loc = new Image();
    loc.src = location;
    loc.classList.add('loc');

    const contact = document.createElement('p');
    contact.textContent = 'Call us @ +84 01697341170 or send a message using the form below'

    content.appendChild(description);
    content.appendChild(loc);
    content.appendChild(contact);
    content.appendChild(createContactForm());

    loadFormValidation();
}

export default loadContact;