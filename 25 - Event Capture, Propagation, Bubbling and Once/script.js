const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event) {
  console.log(this.classList.value);
  event.stopPropagation(); // stop bubbling!
}

divs.forEach(el =>
  el.addEventListener('click', logText, {
    capture: false,
    once: true
  })
);

button.addEventListener('click', () => console.log('click!!!'), {
  once: true
});
