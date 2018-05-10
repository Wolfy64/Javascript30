const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e) {
  // Check if the shift key is down
  // AND check that they are checking it
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // go ahead
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('starting to check in between');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
      
    })
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastChecked; 

