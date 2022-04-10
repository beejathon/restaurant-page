import { createSlider, loadSlider, addSliderEvents} from './slider';

function loadHome() {
    const main = document.getElementById('main');
    main.innerHTML = `
    <h2>Welcome to my Twisted Restaurant</h2>
    <p>We have been expecting you... *mwahahaha*</p>
    <p>We're just a couple former English teachers that want to make bomb ass vegan pizza for the comrades.</p>
    <p>Our dishes come from all our favorite places around the world but are made from locally sourced ingredients whenever possible.</p>
    <p>Come and enjoy a meal by the Red River with us. Best meal with a view in town, ask anyone! ;)</p>
    `;

    createSlider();
    loadSlider();
    addSliderEvents();
}

export default loadHome;