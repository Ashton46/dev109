
const audio = new Audio('audio/audio.mp3');


const audioBtn = document.getElementById('audio-btn');


function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioBtn.textContent = 'Pause Audio';
    } else {
        audio.pause();
        audioBtn.textContent = 'Play Audio';
    }
}


audioBtn.addEventListener('click', toggleAudio);

