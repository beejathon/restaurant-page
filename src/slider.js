import img01 from './images/01.JPG';
import img02 from './images/02.JPG';
import img03 from './images/03.JPG';
import img04 from './images/04.JPG';
import img05 from './images/05.JPG';
import img06 from './images/06.JPG';
import img07 from './images/07.JPG';
import img08 from './images/08.JPG';

let counter = 1;

function createSlider() {
    const footer = document.getElementById('footer');
    const slider = document.createElement('div');
    const prevWrapper = document.createElement('div');
    const nextWrapper = document.createElement('div');
    const prevBtn = document.createElement('div');
    const nextBtn = document.createElement('div');
    const prevArr = document.createElement('div');
    const nextArr = document.createElement('div');
    const frame = document.createElement('div');

    slider.classList.add('slider');
    slider.setAttribute('id', 'slider');
    prevWrapper.classList.add('prev-wrapper');
    nextWrapper.classList.add('next-wrapper');
    prevBtn.classList.add('arr');
    prevBtn.classList.add('prev');
    prevBtn.setAttribute('id', 'prevBtn');
    nextBtn.classList.add('arr');
    nextBtn.classList.add('next');
    nextBtn.setAttribute('id', 'nextBtn')
    frame.classList.add('frame');
    frame.setAttribute('id', 'frame');

    prevBtn.appendChild(prevArr);
    nextBtn.appendChild(nextArr);
    prevWrapper.appendChild(prevBtn);
    nextWrapper.appendChild(nextBtn);
    slider.appendChild(prevWrapper);
    slider.appendChild(nextWrapper);
    slider.appendChild(frame);
    footer.appendChild(slider)
}

function loadSlider() {
  const frame = document.getElementById('frame');
  
  const lastClone = new Image();
  lastClone.src = img08;
  lastClone.setAttribute('id', 'lastClone');
  lastClone.classList.add('slideImg');
  const image01 = new Image();
  image01.src = img01;
  image01.classList.add('slideImg');
  const image02 = new Image();
  image02.src = img02;
  image02.classList.add('slideImg');
  const image03 = new Image();
  image03.src = img03;
  image03.classList.add('slideImg');
  const image04 = new Image();
  image04.src = img04;
  image04.classList.add('slideImg');
  const image05 = new Image();
  image05.src = img05;
  image05.classList.add('slideImg');
  const image06 = new Image();
  image06.src = img06;
  image06.classList.add('slideImg');
  const image07 = new Image();
  image07.src = img07;
  image07.classList.add('slideImg');
  const image08 = new Image();
  image08.src = img08;
  image08.classList.add('slideImg');
  const firstClone = new Image();
  firstClone.src = img01;
  firstClone.setAttribute('id', 'firstClone');
  firstClone.classList.add('slideImg');

  frame.appendChild(lastClone);
  frame.appendChild(image01);
  frame.appendChild(image02);
  frame.appendChild(image03);
  frame.appendChild(image04);
  frame.appendChild(image05);
  frame.appendChild(image06);
  frame.appendChild(image07);
  frame.appendChild(image08);
  frame.appendChild(firstClone);
}

function addSliderEvents() {
  const frame = document.querySelector('#frame');
  const images = document.querySelectorAll('.frame img');
  
  frame.style.transform = `translateX(${counter * -50}vw)`;
  
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  
  prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter--;
      frame.style.transform = `translateX(${counter * -50}vw)`;
      console.log(counter)
  });
  
  nextBtn.addEventListener('click', () => {
      if (counter >= images.length - 1) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter++;
      frame.style.transform = `translateX(${counter * -50}vw)`;
      console.log(counter)
  });
  
  frame.addEventListener('transitionend', () => {
      if (images[counter].id ==='lastClone') {
          frame.style.transition = 'none';
          counter = images.length -2;
          frame.style.transform = `translateX(${counter * -50}vw)`;
      }
      if (images[counter].id ==='firstClone') {
          frame.style.transition = 'none';
          counter = 1;
          frame.style.transform = `translateX(${counter * -50}vw)`;
      }
  });
}

export { createSlider, loadSlider, addSliderEvents };