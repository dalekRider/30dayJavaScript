const inputs = document.querySelectorAll('.control input');


function handleUpdate() {
  //console.log(this.value);
  const suffix = this.dataset.sizing || '';
  //select whole document
  console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
