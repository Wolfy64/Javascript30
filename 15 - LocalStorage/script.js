const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const btnCheckAll = document.querySelector('.check');
const btnClearAll = document.querySelector('.clear');
const btnRemoveAll = document.querySelector('.remove');

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList( plates = [], platesList ) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${ plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this ! unless is an input
  const el = e.target;
  const index = el.dataset.index;
  
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAll() {
  const inputs = itemsList.querySelectorAll('input');
  
  inputs.forEach(input => {
    input.setAttribute('checked', true);
  });

  items.forEach(item => {
    if (item.done) return;
    item.done = !item.done;
  });
  localStorage.setItem('items', JSON.stringify(items));
}

function btnClear() {
  const inputs = itemsList.querySelectorAll('input');

  inputs.forEach(input => {
    input.removeAttribute('checked');
  });

  items.forEach(item => {
    if (!item.done) return;
    item.done = !item.done;
  });
  localStorage.setItem('items', JSON.stringify(items));
}

function btnRemove(e) {
  window.location.reload(true);
  localStorage.removeItem('items');
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
btnCheckAll.addEventListener('click', checkAll)
btnClearAll.addEventListener('click', btnClear)
btnRemoveAll.addEventListener('click', btnRemove)
populateList(items, itemsList);