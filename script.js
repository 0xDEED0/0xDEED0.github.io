const images = [
  'images/1.png',
  'images/2.png',
  'images/3.png',
  // Add more image paths as needed
];

let index = 0;

function setBackground() {
  document.body.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

setBackground();
setInterval(setBackground, 5000); // Rotate every 5 seconds

