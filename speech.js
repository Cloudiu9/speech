document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);

var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';

function on_touch() {
    if (!recognition.started) {
        recognition.start();
        recognition.started = true;
    }
}

recognition.onend = function () {
    recognition.started = false;
};

recognition.onresult = function (e) {
    var transcript = e.results[0][0].transcript;
    document.getElementById("text").innerHTML = "You said: " + transcript + "<br>";
    recognition.stop();
};

recognition.onspeechend = function () {
    recognition.stop();
};

recognition.onerror = function (e) {
    console.error('Speech recognition error:', e);
};

document.getElementById("text").innerHTML = "Click to start recording...";

