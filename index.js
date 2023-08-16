var callButton = document.querySelector('#start-button');
var question = document.querySelector('#main');
var timeBox = document.querySelector("#time-box");
var currentTime = 60
timeBox.innerText = currentTime;

var questions = ["How many words are in the document?", "What is the color of the sky?"];
var answer = ["20", "30", '200', '5', "blue", 'yellow', 'purple', 'green'];



callButton.addEventListener('click', function() {
    setInterval(function(){
        currentTime -= 1
        timeBox.innerText = currentTime
    },1000) 
    callButton.classList.add('hidden')
    question.appendChild('<div>' + questions[0] + '</div>')
})