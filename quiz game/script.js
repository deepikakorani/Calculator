let questions = [
{
question: "Which language is used for web pages?",
answers: ["Python","HTML","C++","Java"],
correct: 1
},
{
question: "Which company developed JavaScript?",
answers: ["Google","Microsoft","Netscape","Apple"],
correct: 2
},
{
question: "What does CSS stand for?",
answers: [
"Creative Style Sheets",
"Cascading Style Sheets",
"Computer Style Sheets",
"Colorful Style Sheets"
],
correct: 1
}
];

let currentQuestion = 0;
let score = 0;

let questionEl = document.getElementById("question");
let answerButtons = document.getElementsByClassName("btn");

function loadQuestion(){
let q = questions[currentQuestion];

questionEl.textContent = q.question;

for(let i=0;i<4;i++){
answerButtons[i].textContent = q.answers[i];
}
}

function checkAnswer(index){

if(index === questions[currentQuestion].correct){
score++;
}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < questions.length){
loadQuestion();
}
else{
document.querySelector(".quiz-container").innerHTML =
"<h2>Your Score: "+score+" / "+questions.length+"</h2>";
}

}

loadQuestion();