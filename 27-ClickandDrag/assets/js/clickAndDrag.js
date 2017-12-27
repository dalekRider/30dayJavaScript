//console.log('All your javascripts are belong to us!');

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
 isDown = false;
 slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; //stop fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //multiply increase scroll move to mouse move ratio (more scroll less move)
  slider.scrollLeft = scrollLeft - walk;
});
