const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
//how many pixel at most should be stretched
const walk = 400; // 100px

function shadow (e){
  //get width/height of hover object
  //const width = hero.offsetWidth;
  //const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  if(this !== e.target) {
    x = x + e.target.offsetLeft; //adds distance from left window edge to current x if x is pulling from h1
    y = y + e.target.offsetTop; //adds distance from top window edge to current x if x is pulling from h1
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  console.log(x, width, walk, xWalk);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
};

hero.addEventListener('mousemove', shadow);
