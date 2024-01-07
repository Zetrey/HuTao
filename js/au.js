
function bf() {
    var audio = document.getElementById('bgm');
    var bt = document.getElementById('playbt');

    if (audio !== null) {
        if (audio.paused) {
            audio.play();
            bt.innerText = "ÔÝÍ£";
        } else {
            audio.pause();
            bt.innerText = "²¥·Å";
        }
    }
}