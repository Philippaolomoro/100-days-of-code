let clickButton = document.querySelector('#button');
var body = document.querySelector('body');
let color = generateRandomColors(256);

clickButton.addEventListener('click', () => {
  const colorChange = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorChange];
});

function randomColors() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColors());
  }
  return arr;
}
