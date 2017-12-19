console.log('test connection');

 const divs = document.querySelectorAll('div');
 const button = document.querySelector('button')
 function logText(e) {
   console.log(this.classList.value);
   // Event propagation - stops bubbling
   //e.stopPropagation();
   //console.log(this);
 };

//document.body.addEventListener('click', logText);
// capture runs function on down, not bottle up, one two three vs three two one

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: false //unbinds if true
}));

button.addEventListener('click', () => {
  console.log('There can be only ONE!');
}, {
  once: true
});
