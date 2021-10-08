import location from './images/location.png';

function loadContact() {
    const content = document.getElementById('main');
    content.textContent = '';

    const description = document.createElement('p');
    description.textContent = 'We are located in Long Bien near Long Bien Bridge, overlooking the Red River. Slide thru muffucker.'

    const loc = new Image();
    loc.src = location;
    loc.classList.add('loc');

    const contact = document.createElement('p');
    contact.textContent = 'Call us @ +84 01697341170'

    content.appendChild(description);
    content.appendChild(loc);
    content.appendChild(contact);
}

export default loadContact;