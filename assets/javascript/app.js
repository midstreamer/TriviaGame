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
        timeoutMyOswego = setTimeout(countdown, 1000);
    }

    countdown();


    //$(".btn-sm").on("click", function(){
        //console.log("working");
    $(".btn-sm").on("click", function(){
        if(document.getElementById("correctAnswer").checked) {
            correctAnswers++;
            $("#correct").text(correctAnswers);
        }

          
    });