let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const timer = seconds => {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = seconds => {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${
    reminderSeconds < 10 ? `0${reminderSeconds}` : reminderSeconds
  }`;
  document.title = `⏰ ${display}`;
  timerDisplay.textContent = display;
};

const displayEndTime = timestamp => {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  const americanHours = hours > 12 ? hours - 12 : hours;
  endTime.textContent = `Back to work at ${americanHours}:${minutes}`;
};

function startTimer() {
  const seconds = this.dataset.time;
  timer(seconds);
}

buttons.forEach(el => el.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
