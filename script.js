const keys = Array.from(document.querySelectorAll(".key"));

//Play sound - key press
document.addEventListener('keydown', playSound);

//Play sound - mouse click
keys.forEach(function(key){
    key.addEventListener("click", playSound);
});

//Play sound
function playSound(e) {
    var theKey;
    if (e.type === "click") {
        theKey = e.target.innerText.toUpperCase();
    } else {
        theKey = e.key.toUpperCase();
    }
    //Audio
    const audio = document.querySelector(`audio[data-key="${theKey}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    //Key transform
    const key = document.querySelector(`div[data-key="${theKey}"]`);
    key.classList.add("playing");
    console.log(key);
}

  //Remove transform
keys.forEach(function(key){
    key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}