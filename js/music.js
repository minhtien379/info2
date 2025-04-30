var myaudio = document.getElementById("audioID");

function PlayStop() { 
return myaudio.paused ? myaudio.play() : myaudio.pause();
};