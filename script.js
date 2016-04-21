/**
  * Yahoo Your Google.
  */

if (Math.random() > 0.5) {
  var audio = new Audio(chrome.extension.getURL("audio/yahoo.mp3"));
  audio.play();
}
