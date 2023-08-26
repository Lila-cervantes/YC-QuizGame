//decrlared variables
var callButton = document.querySelector('#start-button');
var question = document.querySelector('#question-text');
var timeBox = document.querySelector("#time-box");
var starter = document.querySelector('#starter');
var responses = document.querySelector('#responses');

//time varibale
var currentTime = 40;
var dockedTime = 10;

timeBox.innerText = currentTime;

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
var selectedOption = null;
function updateResponse(e) {
    selectedOption = e.target.value;
    for (var option of questions[0].options){
        if (e.target.value === selectedOption) {
            choices += "<li class=option><input id=option-"+val+" type=radio selected value=" + option + "/>"+option+"</li>"
        } else {
            choices += "<li class=option><input id=option-"+val+" type=radio value=" + option + "/>"+option+"</li>"
        }
        responses.innerHTML = choices
    }
}
function startQuiz() {
    question.innerText = questions [0].problem
    var val = 1;
    var choices = "";
    for (var option of questions[0].options){
        choices += "<li class=option><input id=option-"+val+" type=radio value=" + option + "/>"+option+"</li>"
    }
    responses.innerHTML = choices
    var option1 = document.getElementById("option-1")
    var option2 = document.getElementById("option-2")
    var option3 = document.getElementById("option-3")
    option1.addEventListener("click", function(e){
        updateResponse(e)
    })
}
var score = 0;
var questionIndex = 0;
function clearTimer() {
    clearInterval(countDownTime)
}
var countDownTime = null
// this will start the timmer on the button
callButton.addEventListener('click', function() {
    startQuiz()
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

function render(questionIndex) {
    starter.innerHTML = "";
}