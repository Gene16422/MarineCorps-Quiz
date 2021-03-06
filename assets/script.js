var question = [{
        question: "When is the Marine Corps birthday?", 
        answer:{
            a: "November 10, 1775",
            b: "October 25, 1762",
            c: "July 26, 1787",
            d: "August 3, 1789", 
        },
        correctAnswer: "November 10, 1775"
    },

    {
        question: "What is the name of the Marine Corps bulldog mascot?",
        answer: {
            a: "Killer",
            b: "Chesty",
            c: "Mac",
            d: "Bullet",
        },

        correctAnswer: "Chesty"
    },

    {
        question: "What is the name of the Officer's sword in the Marines?",
        answer: {
            a: "Mameluke",
            b: "American Samurai",
            c: "Cavalry",
            d: "Sousa",
        },

        correctAnswer: "Mameluke"
    },
    
    {            
        question: "Marines are also called...",
        answer: {
            a: "Jar Heads",
            b: "Leather Necks",
            c: "Devil Dogs",
            d: "All the above",
        },

        correctAnswer: "All the above"
    },
    
    {
        question: "Marines guard all US Embassies because of their action in what conflict?",
        answer: {
            a: "Revoluionary War",
            b: "Banana Wars",
            c: "WW1",
            d: "Boxer Rebellion",
        },

        correctAnswer:  "Boxer Rebellion"
    },
    
];
var currentIndex = 0
//var correctAnswers = document.querySelector("");
//var incorrectAnswers = document.querySelector("");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreContainer = document.querySelector(".score");
var score = 0;
var isWin = false;
var timer;
var timerCount;
var userInitials = "";
var answerButtons = document.querySelectorAll(".answerButton");

//Create the questions and add them to the page

function displayQuestion(){

 if(
   currentIndex>4
 ){
   alert("GameOver");
   recordScore();
   recordUserInitials();
   return
 };
    var questionEl = document.getElementById("question");
    questionEl.textContent = question[currentIndex].question;

    var answer1 = document.getElementById("answer1");
    answer1.textContent = question[currentIndex].answer.a;

    var answer2 = document.getElementById("answer2");
    answer2.textContent = question[currentIndex].answer.b;

    var answer3 = document.getElementById("answer3");
    answer3.textContent = question[currentIndex].answer.c;

    var answer4 = document.getElementById("answer4");
    answer4.textContent = question[currentIndex].answer.d;
  
}
//Play the game

function playgame() {
    alert("working");
    isWin = false;
    timerCount = 30;
    startButton.disabled = true;
    //renderCorrectAnswers()
   // renderIncorrectAnswers()
    startTimer()
    displayQuestion();
} 

//Start the timer

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}

//track and record score (timerCount)

function recordScore() {
    var displayScoreEl = document.createElement("h2");
    displayScoreEl.textContent = `correct answers: ${score}`;
    scoreContainer.appendChild(displayScoreEl);
    localStorage.setItem("scoreCount", score);
  }
  
  // Updates userInitials on screen and sets userInitials to local storage
  function recordUserInitials() {
    var formEl = document.createElement("form");
    var userInitialsEl = document.createElement("h2");  
    userInitialsEl.innerHTML = "Enter Your Initials: <input name='initials' type='text'/>";
    formEl.appendChild(userInitialsEl);
    var submitEl = document.createElement("div");
    submitEl.innerHTML = "<button type='submit'>submit</button>";
    formEl.appendChild(submitEl);
    scoreContainer.appendChild(formEl);
    submitEl.addEventListener("click", 
      submitInitials
    )
    
}
function submitInitials() {
event.preventDefault();
var initialsInput = document.querySelector("input[name='initials']").value;
console.log(initialsInput);
localStorage.setItem("userInitials", initialsInput);
}
startButton.addEventListener("click", function (){
    playgame()

})
//answerButton.addEventListener("click", function (){
    //compare()
//})
answerButtons.forEach(function (ansBtn) {
    ansBtn.addEventListener("click", function (event) {
      var userGuess = event.target.textContent
      console.log(userGuess);
      console.log(question[currentIndex].correctAnswer);
      if (userGuess === question[currentIndex].correctAnswer) {
        console.log("You got it right")
        currentIndex++
        displayQuestion()
        score++
      } else {
        console.log("WRONG")
        currentIndex++
        displayQuestion()
      }
    })
  })
  
 