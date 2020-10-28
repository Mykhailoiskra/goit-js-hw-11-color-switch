const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#a7e740',
  '#4091e7'
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const endBtn = document.querySelector('button[data-action="stop"]');
let timerId = null;


startBtn.addEventListener('click', () => {
  timerId = setInterval(bodyColorChange, 1000);
  startBtn.setAttribute('disabled', 'true');
});
endBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
});


function bodyColorChange() {
  const i = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = `${colors[i]}`;
}
