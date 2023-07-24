// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var startBut = document.querySelector("#start-button");

var countdown = 60
var memTimer = null;

startBut.addEventListener("click", function(event){
    var startTimer = function(){
        memTimer = setInterval(function() {
            countdown--;
            //countdown=countdown-1;
            console.log(countdown)
            // TODO Affect the DOM innerText
            document.querySelector(".top-right").innerText = countdown + " seconds left";
        },1000);
    }

    var introDiv = document.querySelector("#intro");
    var questionsDiv = document.querySelector("#questions");

    //$("#intro").addClass("hidden")
    introDiv.classList.add("hidden")
    
    //$("#questions").removeClass("hidden")
    questionsDiv.classList.remove("hidden")


    startTimer();

})
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score