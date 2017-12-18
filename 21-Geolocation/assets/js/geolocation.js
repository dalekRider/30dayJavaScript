
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const long = document.querySelector('.long-value');
const lat = document.querySelector('.lat-value');

//Watch version get position watch gives update based on change
navigator.geolocation.getCurrentPosition((data) => {
  console.log(data);
  console.log(data.coords.speed);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  long.textContent = data.coords.longitude;
  lat.textContent = data.coords.latitude;
}, (err) => {
  console.err(err);
  alert('Please turn on your location');
});
