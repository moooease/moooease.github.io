var boop = new Audio();
boop.src = "/public/audio/67088__sunnysidesound__pop-2.mp3";

window.addEventListener('mousedown', function (e) {
    $('body').append('<div class="dot" style="top:' + e.pageY + 'px; left:' + e.pageX + 'px;"></div>');
    // boop.play();
});


window.addEventListener('touchstart', function (e) {
    $('body').append('<div class="dot" style="top:' + e.pageY + 'px; left:' + e.pageX + 'px;"></div>');
    // boop.play();
});

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("name").classList.remove('animated');
}

function off() {
    document.getElementById("overlay").style.display = "none";
}