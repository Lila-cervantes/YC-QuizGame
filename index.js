//decrlared variables
var callButton = document.querySelector('#start-button');
var question = document.querySelector('#main');
var timeBox = document.querySelector("#time-box");
var currentTime = 60
timeBox.innerText = currentTime;

var questions = [
    {
        problem: "What can NOT be stored in an Array?",
        options: ['strings', 'more arrays', 'if else statements'],
        answer: 'if else statements'
    }
    {
        problem: "What are string values enclosed with?",
        options: ['brackets', 'semicolon', 'quotation marks'],
        answer: 'quotation marks',
    }
]


callButton.addEventListener('click', function() {
    setInterval(function(){
        currentTime -= 1
        timeBox.innerText = currentTime
    },1000) 
    callButton.classList.add('hidden')
    question.appendChild('<div>' + questions[0] + '</div>')
})
/*

*/