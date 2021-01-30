
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
        if (indexCurrentQuestion < (questionsArr.length)) {
            indexCurrentQuestion++;
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
        questionTitleEl.innerHTML  = "";
        choicesEl.innerHTML = "";
        highscore = document.createElement("div")
        choicesEl.appendChild(highscore)
        // High Score function to call high or call div to show highscore box

        // Clear Timer

        //Add text input box

        //store text in local storage

        // call text stored in local storage

        // appened score to text called from local storage

    }
    