var seconds;
    var temp;

    function countdown() {
        seconds = document.getElementById("countdown").innerHTML;
        seconds = parseInt(seconds, 10);

        if (seconds == 1) {
            temp = document.getElementById("countdown");
            temp.innerHTML = "Sorry, Times Up!";
            return;
        }

        seconds--;

        temp = document.getElementById("countdown");
        temp.innerHTML = seconds;
        timeoutMyOswego = setTimeout(countdown, 1000);
    }

    countdown();