
    var button = document.getElementById('play_Vid');
    var video = document.getElementById('myVideo');

    function PFunction(){
        if (video.paused) {
            video.play();
            button.innerHTML = "Pause";
          } else {
            video.pause();
            button.innerHTML = "Play";
          }
    }
