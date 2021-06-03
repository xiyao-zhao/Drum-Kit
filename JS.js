window.addEventListener("keydown", playing);

function playing (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    
    if(!key) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
} 

window.onload = function () {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", remove))

    function remove (e) {
        this.classList.remove("playing");
    }
}