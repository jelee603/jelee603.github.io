import getColors from './utils/getColors.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const btnYellow = document.getElementById('btn_yellow');
const btnGreen = document.getElementById('btn_green');
const btnBlack = document.getElementById('btn_black');
const btnPink = document.getElementById('btn_pink');
const btnBlue = document.getElementById('btn_blue');
const btnSave = document.getElementById('btn_save');
const inputText = document.getElementById('input_text');
let text = inputText.value;

inputText.addEventListener('input', (e) => {
  text = e.target.value;
  draw();
});

btnYellow.addEventListener('click', () => {
  changeColor('yellow');
});
btnGreen.addEventListener('click', () => {
  changeColor('green');
});
btnBlack.addEventListener('click', () => {
  changeColor('black');
});
btnPink.addEventListener('click', () => {
  changeColor('pink');
});
btnBlue.addEventListener('click', () => {
  changeColor('blue');
});
btnSave.addEventListener('click', () => onSave());

draw();

function draw(colorName = 'yellow') {
  const [bgColor, fontColor] = getColors(colorName);
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 300, 150);

  ctx.fillStyle = fontColor;
  ctx.font = '48px roboto';
  ctx.textAlign = 'center';
  ctx.fillText(text, canvas.clientWidth / 2, 90);
}

function changeColor(colorName) {
  draw(colorName);
}

function onSave() {
  const dataURL = canvas.toDataURL('image/png');
  let link = document.createElement('a');
  link.download = 'capture';
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link = null;
}
