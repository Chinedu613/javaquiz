
    var timerEl = document.getElementById("timer");
    var playButtonEl = document.getElementById("play");
    var questionTitleEl= document.getElementById("title");
    
    //CHOICES CONTAINER
    var choicesEl = document.getElementById("choices");
    // CHOICES
    var choiceButton = document.createElement("div");
    
    // Set Timer on Page 
    var timerCount = 120;
    // Set Timer on Page
    function setTimer(){
        setInterval(function(){
            
            if(timerCount <= 0) {
                clearInterval(timerCount = 0);
            }
            timerEl.textContent = "Timer: " + timerCount;

            timerCount--;
        }, 1000);
    
    }
//Shows Questions
    function questionBlock(){
        var questionBlockEl = document.getElementById("question-block");
        if (questionBlockEl.style.display === "block") {
            questionBlockEl.style.display = "none";
        } else{
            questionBlockEl.style.display = "block";
        }
    }
// Hide Questions Block
function hideQuestions(){
    var questionBlockEl = document.getElementById("question-block");
    if (questionBlockEl.style.display === "none") {
        questionBlockEl.style.display = "block";
    } else{
        questionBlockEl.style.display = "none";
    }
}
//Hide Start Button
    function hideStart(){
        var homeEl = document.getElementById("home");
        if (homeEl.style.display === "none"){
            homeEl.style.display = "block";
        } else{
            homeEl.style.display = "none";
        }
    }
//Shows Highscore Input Container
    function setScore(){
        var setScoreEl = document.getElementById("setScore");
        if (setScoreEl.style.display === "block") {
            setScoreEl.style.display = "none";
        } else{
            setScoreEl.style.display = "block";
        }
    }
    //Hide Highscore Input Container
    function hideSetScore(){
        var setScoreEl = document.getElementById("setScore");
        if (setScoreEl.style.display === "none"){
            setScoreEl.style.display = "block";
        } else{
            setScoreEl.style.display = "none";
        }
    }
    //Shows Highscore List Container
    function showScores(){
        var showScoresEl = document.getElementById("scoreBox");
        if (showScoresEl.style.display === "block") {
            showScoresEl.style.display = "none";
        } else{
            showScoresEl.style.display = "block";
        }
    }
    ////// Start FUNCTION///////////////////
    function startQuiz(){
        hideStart();
        questionBlock();
        setTimer();
        getQuestions();
    }
    //PLAY BUTTON/////////////////////////
playButtonEl.onclick = startQuiz;

//QUESTIONS ARRAY////////////////////////

    var questionsArr = [
        {
            question: " What is 2 + 2?",
            choices: [ "2","3","4", "5",],
            answer:"4"
        },
        {
            question: " What is 2 + 3?",
            choices: [ "z","6","90", "5",],
            answer: "5",
        },
        {
            question: " What is 2 + 1?",
            choices: [ "a","3","c", "f",],
            answer: "3",
        },
        {
            question: " What is 2 + 0?",
            choices: [ "2","1","y", "o",],
            answer: "2",
        },
    ];
    
    ///LOOP FOR NEXT QUESTION//////////////////////////
    var indexCurrentQuestion = 0;

    function getQuestions(){
        //Clears  Questions at the end
        questionTitleEl.innerHTML  = "";
        //Clears Choices for new choices
        choicesEl.innerHTML = "";
        //Get Current Question
        currentQuestion = questionsArr[indexCurrentQuestion];
        //ADDING QUESTION TO QUESTION BLOCK
        questionTitleEl.textContent = currentQuestion.question;
        //ADDING CHOICES TO CHOICES CONTAINER
        for(var i = 0; i < currentQuestion.choices.length; i++){
            //Create Choices Element
            var choiceButton = document.createElement("div");
            //Adds value to the choices
            choiceButton.setAttribute("value", currentQuestion.choices[i]);
            //Sets the choices to the questions
            choiceButton.textContent = currentQuestion.choices[i];
            //Appends Choice Buttons to Choice Containers
            choicesEl.appendChild(choiceButton);
            //Add logic to handle clicking the choice button
            choiceButton.onclick = answerBtn;
        }
    }
////// What happens when you choose an answer///////////
    function answerBtn(){
        if(this.value === currentQuestion.answer){
        }
        else {
            timerCount -= 5;
        }
        indexCurrentQuestion++;
        if (indexCurrentQuestion < (questionsArr.length)) {
            
            getQuestions();
        }
        else {
            gameOver()
        }
    }
    
/// What Happens on Enter Name part///////////////////////////////////
var submitBtn = document.querySelector("#nameInput")
var playerInput = document.querySelector("#highScoreName")
var highScoreList = document.querySelector("ol");
var lastScore = localStorage.getItem("player");

    function gameOver(){
        almost()
        
    

        //Submit Button function
        submitBtn.addEventListener("click", function(event){
            event.preventDefault();
            
            //Saves players name and timer as an object
            saveScore()
            //Hides the Highscore input box and adds highscore list
            hideSetScore()
            showScores()
            //Shows History of players Scores
            playerHistory()
            renderPlayers()
            //Appends name and score to list
        })
    }

/// Stop time and hide questions and enter name section also save timer to storage//////////
    function almost(){
        //stops timer
        clearInterval(timerCount);
        // Saves timer to local storage
        localStorage.setItem("timer", timerCount);
        // Hides Questions
        hideQuestions()
        setScore()
        // Gets span to display score
        time = document.querySelector("#count");
        // Get timer from local storage
        scoreTime =localStorage.getItem("timer");
        // Set time to span
        time.textContent = scoreTime
        console.log(time)
        }

///// (saveScore) Save Scores into objects and then push to Array///////////////////
    //var allPlayers = []

    function saveScore(){
        var allPlayers = JSON.parse(localStorage.getItem("player")) || []

        var player = {
            playerName: playerInput.value.trim(),
            playerScore: timerCount
        };
        allPlayers.push(player)
        
        localStorage.setItem("player", JSON.stringify(allPlayers))
    }
    
////// (renderPlayers) Show's player names on Highscore List Section/////////////
    function renderPlayers(){
        var allPlayers = JSON.parse(localStorage.getItem("player")) || []

        for(var i = 0; i < allPlayers.length; i++){
            onePlayer = allPlayers[i];
            

            var yourScore = document.createElement("li");
        
            yourScore.textContent = onePlayer.playerName + " " + onePlayer.playerScore;
            
            highScoreList.appendChild(yourScore);
        }
    }
//// Should Show player History//////////////////////////////////////
    function playerHistory(allPlayers){
        //Get player history
        var allPlayers = JSON.parse(localStorage.getItem("player"));
   

        if(allPlayers !== null){
            renderPlayers()
            }else return 
        }
    