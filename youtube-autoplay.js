(function () {
  var playerElement = document.getElementById("venue-video-player");
  if (!playerElement) return;

  window.onYouTubeIframeAPIReady = function () {
    new YT.Player("venue-video-player", {
      events: {
        onReady: function (event) {
          event.target.setVolume(50);
          event.target.unMute();
          event.target.playVideo();
        }
      }
    });
  };

  var script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(script);
})();
