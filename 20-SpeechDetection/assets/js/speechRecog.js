window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.iterimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  //console.log(e.results);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

    p.textContent = transcript;
    //console.log(transcript);
    if(e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }

    if(transcript.includes('galaxy')) {
      window.alert('🌌🌌🌌🌌🌌 SECRET WORD 🌌🌌🌌🌌🌌')
    }
});

recognition.addEventListener('end', recognition.start);
recognition.start();
