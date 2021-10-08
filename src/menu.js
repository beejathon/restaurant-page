import pizza from './images/pizza.jpg';
import patatas from './images/patatas.jpg';
import sope from './images/sope.jpg';
import flautas from './images/flautas.jpg';
import ginataang from './images/ginataang.jpg';
import laing from './images/laing.jpg';
import sesame from './images/sesame_noodles.jpg';
import dumplings from './images/dumplings.jpg';
import mien from './images/mien_tron.jpg';
import goi from './images/goi_nam.jpg';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');

    const pizza_img = new Image();
    pizza_img.src = pizza;
    const patatas_img = new Image();
    patatas_img.src = patatas;
    const sope_img = new Image();
    sope_img.src = sope;
    const flautas_img = new Image();
    flautas_img.src = flautas;
    const ginataang_img = new Image();
    ginataang_img.src = ginataang;
    const laing_img = new Image();
    laing_img.src = laing;
    const sesame_img = new Image();
    sesame_img.src = sesame;
    const dumplings_img = new Image();
    dumplings_img.src = dumplings;
    const mien_img = new Image();
    mien_img.src = mien;
    const goi_img = new Image();
    goi_img.src = goi;

    const item0 = document.createElement('div');
    item0.classList.add('menu-item');
    item0.appendChild(pizza_img);
    const item1 = document.createElement('div');
    item1.classList.add('menu-item');
    item1.appendChild(patatas_img);
    const item2 = document.createElement('div');
    item2.classList.add('menu-item');
    item2.appendChild(sope_img);
    const item3 = document.createElement('div');
    item3.classList.add('menu-item');
    item3.appendChild(flautas_img);
    const item4 = document.createElement('div');
    item4.classList.add('menu-item');
    item4.appendChild(ginataang_img);
    const item5 = document.createElement('div');
    item5.classList.add('menu-item');
    item5.appendChild(laing_img);
    const item6 = document.createElement('div');
    item6.classList.add('menu-item');
    item6.appendChild(sesame_img);
    const item7 = document.createElement('div');
    item7.classList.add('menu-item');
    item7.appendChild(dumplings_img);
    const item8 = document.createElement('div');
    item8.classList.add('menu-item');
    item8.appendChild(mien_img);
    const item9 = document.createElement('div');
    item9.classList.add('menu-item');
    item9.appendChild(goi_img);

    menu.appendChild(item0);
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);
    menu.appendChild(item7);
    menu.appendChild(item8);
    menu.appendChild(item9);

    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(createMenu());
}

export default loadMenu;