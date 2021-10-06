import './style.css';
import Background from './background.jpg';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('btn');
    homeBtn.setAttribute('id', 'home');
    homeBtn.textContent = 'Home';
    
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('btn');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.textContent = 'Menu';
    
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('btn');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.textContent = 'Contact';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function loadPage() {
    const content = document.getElementById('content');

    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main')

    const image = new Image();
    image.src = Background;

    content.appendChild(createNav());
    content.appendChild(main)
    content.appendChild(image);
}

function addEvents() {
    const home = document.getElementById('home');
    home.addEventListener('click', loadHome);
    
    const menu = document.getElementById('menu');
    menu.addEventListener('click', loadMenu);
    
    const contact = document.getElementById('contact');
    contact.addEventListener('click', loadContact);
};

loadPage();
loadHome();
addEvents();