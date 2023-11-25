document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);

var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';

function on_touch() {
    if (recognition.start) {
        recognition.start();
        recognition.started = true;
    }
}

function onend() {
    recognition.stop();
    recognition.started = false;
}

recognition.onend = onend;
recognition.onspeechend = onend;
recognition.onresult = on_results;

function on_results(e) {
    document.getElementById("text").innerHTML += "You said:  " + e.results[0][0].transcript + ", accuracy: " + e.results[0][0].confidence + "<br>";
}
