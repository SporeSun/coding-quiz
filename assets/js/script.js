// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var startBut = document.querySelector("#start-button");

var countdown = 60
var memTimer = null;

var currentIndex = 0;

var introDiv = document.querySelector("#intro");
var questionsDiv = document.querySelector("#questions");
var finalScore = document.querySelector("#final-score")
var highScores = document.querySelector("#high-scores")

var questions = [
    {
        text: "Best dog?",
        choices: ["A. your dog", "B. My dog", "C. Every Dog", "D. No Dog"],
        answer: "C. Every Dog"
    },
    {
        text: "Q2",
        choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 3"
    },
    {
        text: "Q3",
        choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 4"
    },
    {
        text: "Q4",
        choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 2"
    },
    {
        text: "Q5",
        choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 1"
    },
    {
        text: "Q6",
        choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Option 3"
    }
]

function renderQuestion () {
    var questionTextDiv = document.querySelector("#question-text");

    questionTextDiv.textContent = questions[currentIndex].text

    var choice1Btn = document.querySelector("#choice1");
    choice1Btn.textContent = questions[currentIndex].choices[0];
    
    var choice2Btn = document.querySelector("#choice2");
    choice2Btn.textContent = questions[currentIndex].choices[1];

    var choice3Btn = document.querySelector("#choice3");
    choice3Btn.textContent = questions[currentIndex].choices[2];

    var choice4Btn = document.querySelector("#choice4");
    choice4Btn.textContent = questions[currentIndex].choices[3];
}
var scoreArray = []
function endGame() {
    clearInterval(memTimer);
    scoreArray = JSON.parse(localStorage.getItem('highscore')) || [];
    questionsDiv.classList.add("hidden");
    let finalScore = prompt("Here is your score " + countdown);
    finalScore = finalScore + " " + (countdown);
    scoreArray.unshift(finalScore + "\n");
    localStorage.setItem("highscore", JSON.stringify(scoreArray.sort()));
    highScores.classList.remove("hidden");
    highScores.innerText = scoreArray;


}

startBut.addEventListener("click", function(event){
    var startTimer = function(){
        memTimer = setInterval(function() {
            countdown--;
            //countdown=countdown-1;
            console.log(countdown)
            if(countdown <= 0){
                endGame();
            }
            document.querySelector(".top-right").innerText = countdown + " seconds left";
        },1000);
    }

    //$("#intro").addClass("hidden")
    introDiv.classList.add("hidden");
    
    //$("#questions").removeClass("hidden")
    questionsDiv.classList.remove("hidden");


    startTimer();
    renderQuestion();
})
// WHEN I answer a question
var choice1Btn = document.querySelector("#choice1");
var choice2Btn = document.querySelector("#choice2");
var choice3Btn = document.querySelector("#choice3");
var choice4Btn = document.querySelector("#choice4");

var messageDiv = document.querySelector("#message")

function nextQuestion(event) {
    var userAnswer = event.target.textContent;
    var correctAnswer = questions[currentIndex].answer;

    console.log(userAnswer + " vs. " + correctAnswer);

    if(userAnswer == correctAnswer) {
        messageDiv.textContent = "Correct!"
    } else {
        messageDiv.textContent = "Wrong!"
        countdown-=10;
    }

    // got to next question
    if(currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        endGame();
    }
}

choice1Btn.addEventListener("click", nextQuestion)
choice2Btn.addEventListener("click", nextQuestion)
choice3Btn.addEventListener("click", nextQuestion)
choice4Btn.addEventListener("click", nextQuestion)



// var questionSelect = document.querySelector("#questions")

// questionSelect.addEventListener("click", function(event) {
//     console.log("Hello")
// })
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score