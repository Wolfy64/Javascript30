const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const title = document.querySelector('.title');
let lastHole;
let timeUp;
let score = 0;

const randTime = (min, max) => Math.round(Math.random() * (max - min) + min);
const randomHole = holes => {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) return randomHole(holes);

  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
};

const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  title.textContent = 'Whack-a-mole!';
  peep();
  setTimeout(
    () => (timeUp = true) && (title.textContent = 'Finished !'),
    10000
  );
};

function bonk(e) {
  if (!e.isTrusted) return; // cheater
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(el => el.addEventListener('click', bonk));
