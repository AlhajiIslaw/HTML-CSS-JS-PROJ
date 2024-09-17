const question = "What planet is known as the 'Red Planet'?";
const choices = ["Earth", "Mars", "Jupiter", "Saturn"];
const correctAnswer = "Mars";

function checkAnswer(button){
  if (button.value == correctAnswer) {
    document.getElementById("result").innerHTML ="Correct!";
    
  }else{
    document.getElementById("result").innerHTML ="Wrong!";
  }

  for(let i = 1; i<= 4; i++){
    document.getElementById('choice' + i).disabled = true;
  }
}


function displayQestion(){
    const h2 = document.getElementById("question");
    h2.innerHTML = question;
   for(let i = 0; i < 4; i++){
    const btn = document.getElementById('choice'.concat (i + 1));
    btn.innerHTML = choices[i];
    btn.value = choices[i];

   }
    
}

displayQestion();