
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

    function hideQuestions(){
        var questionBlockEl = document.getElementById("question-block");
        if (questionBlockEl.style.display === "none") {
            questionBlockEl.style.display = "block";
        } else{
            questionBlockEl.style.display = "none";
        }
    }
    
    //Hide Play Button
    //Hide Questions


 //PLAY BUTTON

    function startQuiz(){
        hideStart();
        questionBlock();
        setTimer();
        getQuestions();
    }
    
    //PLAY BUTTON

playButtonEl.onclick = startQuiz;
    




//QUESTIONS ARRAY

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
    
    
    
    ///LOOP FOR NEXT QUESTION
    
    var indexCurrentQuestion = 0; 

    function getQuestions(){
        
        //Clears  Questions at the end
        questionTitleEl.innerHTML  = "";
        //Clears Choices for new choices
        choicesEl.innerHTML = "";

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
            //choicesEl.removeChild(choiceButton);
            
        }
        
    }

    function answerBtn(){
        
        console.log(this)

       /*  var clickedBtn = this.getAttribute("value"); */

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
        }console.log(gameOver)
        // choice is equal to answer next question
        
        // if not reduce timer by 5 seconds timerCount -=5


        // indexCurrentQuestion = questionArr.length then go to  gameOver()
       // gameOver()
    }
    function gameOver(){
        //stops timer
        clearInterval(timerCount);
        // Saves timer to local storage
        localStorage.setItem("timer", timerCount);
        // Hides Questions
        hideQuestions()
        // Show Highscore Input Name block
        setScore()
        // Gets span to display score
        time = document.querySelector("#count");
        // Get timer from local storage
        scoreTime =localStorage.getItem("timer");
        // Set time to span
        time.textContent = scoreTime
        console.log(time)
        // High Score function to call high or call div to show highscore box

        // Clear Timer

        //Add text input box

        //store text in local storage

        // call text stored in local storage

        // appened score to text called from local storage

    }
    