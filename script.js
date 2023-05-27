//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  var app = document.getElementById('app');
  var video = document.getElementById('video');
  var audio = document.getElementById('audio');
  var sound1 = document.getElementById('sound1');
  var sound2 = document.getElementById('sound2');
  var smallerMins = document.getElementById('smaller-mins');
  var mediumMins = document.getElementById('medium-mins');
  var longMins = document.getElementById('long-mins');
  var timeDisplay = document.querySelector('.time-display');
  var playButton = document.querySelector('.play');
  
  sound1.addEventListener('click', function() {
    audio.src = 'sounds/beach.mp3';
    video.src = 'video/beach.mp4';
  });
  
  sound2.addEventListener('click', function() {
    audio.src = 'sounds/rain.mp3';
    video.src = 'video/rain.mp4';
  });
  
  smallerMins.addEventListener('click', function() {
    setTime(2);
  });
  
  mediumMins.addEventListener('click', function() {
    setTime(5);
  });
  
  longMins.addEventListener('click', function() {
    setTime(10);
  });
  
  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      audio.play();
      playButton.style.backgroundImage = 'url(pause.png)';
    } else {
      video.pause();
      audio.pause();
      playButton.style.backgroundImage = 'url(play.png)';
    }
  });
  
  function setTime(minutes) {
    var seconds = minutes * 60;
    var displayMinutes = Math.floor(seconds / 60);
    var displaySeconds = seconds % 60;
    timeDisplay.textContent = displayMinutes + ':' + (displaySeconds < 10 ? '0' : '') + displaySeconds;
  }
});