const answers = ['images/ball1.png', 'images/ball2.png', 'images/ball3.png', 'images/ball4.png', 'images/ball5.png'];
let answerr = document.getElementById("answerr");

function answer(){
    rndnumber = Math.floor(Math.random() * answers.length);
    answerr.src = answers[rndnumber]
    console.log(answers[rndnumber])
}