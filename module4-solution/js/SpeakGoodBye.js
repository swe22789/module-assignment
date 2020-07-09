(function (window) {
  var byeSpeaker = {};
  var speakerWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}
