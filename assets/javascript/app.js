var correctAnswers = 0;
var incorrectAnswers = 0;
var seconds;
    var temp;
$("#correct").text(correctAnswers); //this returns the text wins for the element win in the html doc
$("#incorrect").text(incorrectAnswers); //this returns the text losses for the element loss in the html doc
    
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
        timeout = setTimeout(countdown, 1000);
    }

    countdown();

    function countdownStop(){
        clearTimeout(timeout);
    }


    $(".btn-sm").on("click", function(){
        if(document.getElementById("correctAnswer1").checked) {
            correctAnswers++;
            $("#correct").text(correctAnswers);
        }
        if(document.getElementById("correctAnswer2").checked) {
            correctAnswers++;
            $("#correct").text(correctAnswers);
        }
        if(document.getElementById("correctAnswer3").checked) {
            correctAnswers++;
            $("#correct").text(correctAnswers);
        }
        countdownStop();


    });