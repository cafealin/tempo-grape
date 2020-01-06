$(document).ready(function () {
    $('body').on('click', function () {
        start();
    });

    var player = new Tone.Player("./sounds/woodblock.wav").toMaster();
    Tone.Transport.bpm.value = 60;

    Tone.Buffer.onload = function() {
        // this will start the player on every noire note
        Tone.Transport.setInterval(function(time){
            player.start(time);
        }, "4n");
        // start the Transport for the events to start
        Tone.Transport.start();
    };

    function start() {
        Tone.Transport.start();
    }

    function stop() {
        Tone.Transport.stop();
    }

    function submitBPM() {
        var bpm = 60;
        Tone.Transport.bpm.value = bpm;
    }
});
