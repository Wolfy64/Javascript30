const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string', '🐙');

// Styled
console.log('%c I am some great text', 'font-size:20px; color:red');

// warning!
console.warn('Hooo, nooo');

// Error :|
console.error('Hooo, shit!');

// Info
console.info('crocodile eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(false, 'Tell if it is wrong');
console.assert(p.classList.contains('ouch'), 'It is Wrong by exemple');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`); 
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`); 
})

// counting
console.count('Dave');
console.count('Dave');
console.count('Wes');
console.count('Dave');
console.count('Dave');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/Wolfy64')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

  // table
console.table(dogs);
