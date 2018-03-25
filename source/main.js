const panels = document.querySelectorAll('.panel');

// function toggleOpen() {
//   this.classList.toggle("open");
// }

// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes("flex")) {
//     //set up because safari uses flex, others use flex-grow
//     this.classList.toggle("open-active");
//   }
// }

// panels.forEach(panel => panel.addEventListener("click", toggleOpen));
// panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

function panelOpen() {
  panels.forEach(panel => panel.classList.remove('open'));
  this.classList.add('open');
}

function panelActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    // set up because safari uses flex, others use flex-grow
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', panelOpen));
panels.forEach(panel => panel.addEventListener('transitionend', panelActive));
