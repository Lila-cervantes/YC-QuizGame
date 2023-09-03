// Copy and paste your work, or start typing.//decrlared variables
var callButton = document.querySelector('#start-button');
var question = document.querySelector('#question-text');
var timeBox = document.querySelector("#time-box");
var starter = document.querySelector('#starter');
var responses = document.querySelector('#responses');
var option1 = document.getElementById("option-1")
var option2 = document.getElementById("option-2")
var option3 = document.getElementById("option-3")
var submitAnswer = document.querySelector("#submit-btn")

//time varibale
var currentTime = 40;
var dockedTime = 10;
var currentQuestion = -1
var score = 0;
var questionIndex = 0;
var selectedOption = null;

//Questions that will be asked with answers.
var questions = [
    {
        problem: "What can NOT be stored in an Array?",
        options: ['strings', 'more arrays', 'if else statements'],
        answer: 'if else statements'
    },
    {
        problem: "What are string values enclosed with?",
        options: ['brackets', 'semicolon', 'quotation marks'],
        answer: 'quotation marks',
    }
];

function addOptionEvents(){    
    option1 = document.getElementById("option-1")
    option2 = document.getElementById("option-2")
    option3 = document.getElementById("option-3")
    console.log('ran ',option1)
    if(option1 !== null){
        option1.addEventListener("click", function(e){
            updateResponse(e)
        })
        option2.addEventListener("click", function(e){
            updateResponse(e)
        })
        option3.addEventListener("click", function(e){
            updateResponse(e)
        })
    }
}

timeBox.innerText = currentTime;


function updateResponse(e) {
    console.log('ran')
    selectedOption = e.target.id;
    console.log(selectedOption)
    var choices = ''
    var val = 1
    for (var option of questions[currentQuestion].options){
        if ('option-'+val === selectedOption) {
            choices += "<li class=option><input id=option-"+val+" type=radio checked value=" + option + " /><span>"+option+"</span></li>"
        } else {
            choices += "<li class=option><input id=option-"+val+" type=radio value=" + option + " /><span>"+option+"</span></li>"
        }
        responses.innerHTML = choices
        val+=1
    }
    option1 = document.getElementById("option-1")
    option2 = document.getElementById("option-2")
    option3 = document.getElementById("option-3")
    addOptionEvents()
}
function startQuizOrNext() {
    currentQuestion += 1
    question.innerText = questions [currentQuestion].problem
    var val = 1;
    var choices = "";
    for (var option of questions[currentQuestion].options){
        choices += "<li class=option><input id=option-"+val+" type=radio value=" + option + " /><span>"+option+"</span></li>"
        val +=1
    }
    responses.innerHTML = choices
    addOptionEvents()
    submitAnswer.classList.remove('hidden')
}

function checkResponse() {
    var options = questions[currentQuestion].options
    var answer = questions[currentQuestion].answer
    var lastIndex = selectedOption.length-1
    console.log(options, answer, selectedOption.substring(-1), options.indexOf(answer))
    if(selectedOption[lastIndex] != options.indexOf(answer)+1){
        currentTime -= 10
    } else score+=1
    console.log(score)
}

function clearTimer() {
    clearInterval(countDownTime)
}
function endQuiz() {
    window.location.href='./highscore.html'
}
submitAnswer.addEventListener('click',function(){
    checkResponse()
    if (currentQuestion+1 >= questions.length) {
        endQuiz()
    }
    else startQuizOrNext()
})
var countDownTime = null
// this will start the timmer on the button
callButton.addEventListener('click', function() {
    startQuizOrNext()
    countDownTime = setInterval(function(){ 
        if (currentTime === 0) {
            clearTimer()
        } else {
            currentTime -= 1
            timeBox.innerText = currentTime;
        }
    },1000) 
    callButton.classList.add('hidden');

})