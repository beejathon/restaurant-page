import img01 from './images/01.JPG';
import img02 from './images/02.JPG';
import img03 from './images/03.JPG';
import img04 from './images/04.JPG';
import img05 from './images/05.JPG';
import img06 from './images/06.JPG';
import img07 from './images/07.JPG';
import img08 from './images/08.JPG';

let counter = 1;

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
  
  frame.style.transform = `translateX(${counter * -25}vw)`;
  
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  
  prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter--;
      frame.style.transform = `translateX(${counter * -25}vw)`;
      console.log(counter)
  });
  
  nextBtn.addEventListener('click', () => {
      if (counter >= images.length - 1) return;
      frame.style.transition = "transform 0.4s ease-in-out";
      counter++;
      frame.style.transform = `translateX(${counter * -25}vw)`;
      console.log(counter)
  });
  
  frame.addEventListener('transitionend', () => {
      if (images[counter].id ==='lastClone') {
          frame.style.transition = 'none';
          counter = images.length -2;
          frame.style.transform = `translateX(${counter * -25}vw)`;
      }
      if (images[counter].id ==='firstClone') {
          frame.style.transition = 'none';
          counter = 1;
          frame.style.transform = `translateX(${counter * -25}vw)`;
      }
  });
}

export { loadSlider, addSliderEvents };