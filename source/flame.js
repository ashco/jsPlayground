const hero = document.querySelector('.hero');
const flame = document.querySelector('h1');
const targets = Array.from(document.querySelectorAll('.target a'));

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.querySelector('.wrapper').appendChild(highlight);

const walk = 10;

let xFlicker;
let yFlicker;

function shadow(xFlicker, yFlicker) {
  flame.style.textShadow = `
    ${xFlicker}px ${yFlicker}px 0 rgba(236, 51, 36, .7),
    ${xFlicker * -1}px ${yFlicker}px 0 rgba(234, 139, 37, 0.7),
    ${yFlicker}px ${yFlicker * -1}px 0 rgba(255, 135, 37, 0.7),
    ${yFlicker * -1}px ${yFlicker}px 0 rgba(252, 214, 63, 0.7)
  `;
}

function flicker() {
  setInterval(() => {
    xFlicker = Math.random() * walk - walk / 2;
    yFlicker = Math.random() * walk - walk / 2;
    shadow(xFlicker, yFlicker);
  }, 100);
}

function selector() {}

function targetClick(e) {
  e.preventDefault();
  this.textContent = '⚫️';
}

function targetHighlight() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width * 1,
    height: linkCoords.height * 1,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

flame.addEventListener('onclick', selector);
targets.forEach(target => target.addEventListener('mouseenter', targetHighlight));
targets.forEach(target => target.addEventListener('click', targetClick));

flicker();
