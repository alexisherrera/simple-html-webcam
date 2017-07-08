(function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var video = document.getElementById('video');

  //set what we want from
  var constraints = { audio: true, video: true };

  navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  })
  .catch(function(err) { console.log(err.name + ": " + err.message); });

  video.addEventListener('play', function() {
    draw(this, context, 400, 300);
  }, false);

  function draw(video, context, width, height) {
    context.drawImage(video, 0, 0, width, height);
    setTimeout(draw, 10, video, context, width, height);
  }

})();
