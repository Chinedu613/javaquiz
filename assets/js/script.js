
    var timerEl = document.getElementById("timer");
    var playButtonEl = document.getElementById("play");
    var questionBlockEl = document.getElementById("question-block");
    var questionTitleEl= document.getElementById("title");
    
    //CHOICES CONTAINER
    var choicesEl = document.getElementById("choices");
    // CHOICES
    var choiceButton = document.createElement("div");

        
    var acceptingAnswers = true;
    
    // Set Timer on Page 
    var timerCount = 60;
    // Set Timer on Page
    function setTimer(){
        var timerInterval = setInterval(function(){
            
            timerCount--;
            timerEl.textContent = "Timer: " + timerCount;

            if(timerCount === 0) {
                timerEl.textContent = 0;
            clearInterval(timerInterval); 
            alert("timer done")
        }
        }, 1000);
    }

    //Hiding Start Button on Page and Revealing Questions
    //Hide Play Button
    //Hide Questions
    function questionBlock(){
        var questionBlockEl = document.getElementById("question-block");
        if (questionBlockEl.style.display === "block") {
            questionBlockEl.style.display = "none";
        } else{
            questionBlockEl.style.display = "block";
        }
    }
    function hideStart(){
        var homeEl = document.getElementById("home");
        if (homeEl.style.display === "none"){
            homeEl.style.display = "block";
        } else{
            homeEl.style.display = "none";
        }
    }

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
            choices: [ "2","3","4", "5",],
            answer: "5",
        },
        {
            question: " What is 2 + 1?",
            choices: [ "2","3","4", "5",],
            answer: "3",
        },
        {
            question: " What is 2 + 0?",
            choices: [ "2","3","4", "5",],
            answer: "2",
        },
    ];
    
    
    
    ///LOOP FOR NEXT QUESTION
    var indexCurrentQuestion = 0; 

    function getQuestions(){
        

        currentQuestion = questionsArr[indexCurrentQuestion];

    //ADDING QUESTION TO QUESTION BLOCK
        questionTitleEl.textContent = currentQuestion.question;

    //ADDING CHOICES TO CHOICES CONTAINER

        for(var i = 0; i < currentQuestion.choices.length; i++){
        
            var choiceButton = document.createElement("div");

            choiceButton.setAttribute("value", currentQuestion.choices[i]);

            choiceButton.textContent = currentQuestion.choices[i];
            
            //Add logic to handle clicking the choice button
            
            choicesEl.appendChild(choiceButton);
            
            choiceButton.onclick = answerBtn();


            console.log(questionsArr[indexCurrentQuestion].answer)
        }
            console.log(choiceButton)
                
            
            
    }
    

    function answerBtn(){
        //if the value of the  (to access the answer willl be questionArr[indexCurrentQuestion].answer)
        if (choiceButton.onclick === questionsArr[indexCurrentQuestion].answer) {
            console.log(choiceButton);
            //answer is correct
            
        } else{
            timerCount-= 5;
        }
        if(currentQuestion < questionsArr.length){
            currentQuestion++;
            getQuestions();
        }
        // choice is equal to answer next question

        // if not reduce timer by 5 seconds timerCount -=5


        // indexCurrentQuestion = questionArr.length then go to  gameOver()
       // gameOver()
    }
    function gameOver(){
        // High Score function to call high or call div to show highscore box

        // Clear Timer

        //Add text input box

        //store text in local storage

        // call text stored in local storage

        // appened score to text called from local storage

    }
