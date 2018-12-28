const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = el => {
  const linkCoords = el.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    x: linkCoords.x + window.scrollX,
    y: linkCoords.y + window.scrollY
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.x}px, ${coords.y}px)`;
};

triggers.forEach(el =>
  el.addEventListener('mouseenter', () => highlightLink(el))
);
