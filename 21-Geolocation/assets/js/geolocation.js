
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

//Watch version get position watch gives update based on change
navigator.geolocation.watchPosition((data) => {
  //console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
  alert('Please turn on your mobile device\'s location');
});
