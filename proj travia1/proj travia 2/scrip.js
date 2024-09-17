const questions = ["What is islam'?",  "What is Iman?"];
const choicesArray = [
  ["Way of life", "religon", "bleive in Allah", "blieve in Mohamed"],
  ["Islamic monothiesm", "Blieve in lastday", "The six pillars of iman", "remember of Allah"]
];
const correctAnswers = ["Way of life", "Islamic monothiesm" ];
let currentQuestionIndex = 0;
let score = 0;
function checkAnswer(button){

if (button.value === correctAnswers[currentQuestionIndex]) {
 
score++;
  }
  currentQuestionIndex++;
  displayQuestion();
 
}

function displayQuestion(){
  if(currentQuestionIndex < questions.length){
   const h2 = document.getElementById("question");
    h2.innerHTML = questions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  } else {
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}!`;
    document.getElementById('question').innerHTML = "";
    document.getElementById('choices').innerHTML = "";
  }
}

displayQuestion();