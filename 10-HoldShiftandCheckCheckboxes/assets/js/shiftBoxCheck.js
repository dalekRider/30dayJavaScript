const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e){
  //check if thaty had the shift key down
  // check if they are checking it
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    //go ahead and do what we need
    //loop over ever single checkboxes
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('First and Last, and all those between');
      }
      if(inBetween) {
        console.log('The inbetweeners');
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
