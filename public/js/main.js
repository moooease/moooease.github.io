
setTimeout(function(){
    if ($('#dot').length > 0) {
      $('#dot').remove();
    }
  }, 3000)

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("name").classList.remove('animated');
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

window.addEventListener('mousedown', function (e) {
    if ($('#dot').length > 0) {
        $('#dot').remove();
        $('body').append('<div class="dot" id="dot" style="top:' + e.pageY + 'px; left:' + e.pageX + 'px;"></div>');
      } else {
        $('body').append('<div class="dot" id="dot" style="top:' + e.pageY + 'px; left:' + e.pageX + 'px;"></div>');
      }
});

window.addEventListener('touchstart', function (e) {
    if ($('#dot').length > 0) {
        $('#dot').remove();
        $('body').append('<div class="dot" id="dot" style="top:' + e.pageY + 'px; left:' + e.pageX + 'px;"></div>');
      } else {
        $('body').append('<div class="dot" id="dot" style="top:' + e.pageY + 'px; left:' + e.pageX + 'px;"></div>');
      }
});