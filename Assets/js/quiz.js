
let currentQuestion = 0;
let currentScore = 0;
let gameTime = 45;
let timer;


let highScores = [];
const questionsArr = [
    {
        question: 'Which one of these is a coding language?',
        options: ["PigeonUX", "mudworx", "javascript", "ScoobyDB"],
        correctAnswer: "javascript"
    },
    {
        question: 'Which one of these means NOT equal to?',
        options: ["-=", "===", "!==",  "+="],
        correctAnswer: "!=="
    },
    {
        question: 'Which one of these allows you to iterate through an array?',
        options: ["loop", "forEvery", "for",  "eachAndEvery"],
        correctAnswer: "for"
    },
    {
        question: 'Which one of these DOESN\'T definea  variable?',
        options: ["const", "means", "var",  "let"],
        correctAnswer: "means"
    },
    {
        question: 'Is a class better than and ID to identify one element?',
        options: ["Yes", "No"],
        correctAnswer: "No"
    }    
]

const questionContainer = document.getElementById('quiz');
const timerBox = document.getElementById('timer');
const startButton = document.getElementById('btn');

const startGame = function() {
    
    const startButton = document.getElementById('btn');
    questionContainer.removeChild(startButton);
    timer = setInterval(timeKeep, 1000);
    
    timerBox.textContent = 'Time left: ' + gameTime;

    askQuestion();
}

const askQuestion = function() {

    // const questionDisplayed = questionsArr[currentQuestion];
    const score = document.getElementById('highScores');
    score.textContent = 'Score: ' + currentScore;
    const questionTitle = document.getElementById('showQ');
    const optionsContainer = document.getElementById('options');
    // console.log(questionTitle.textContent)
    const thisQuestion = questionsArr[currentQuestion];

    questionTitle.innerHTML = thisQuestion.question;
    optionsContainer.innerHTML = "";
    thisQuestion.options.forEach((option) => {
        const choice = document.createElement('button');
        choice.setAttribute('value', option);

        choice.textContent = option;

        choice.onclick = checkAnwser;

        optionsContainer.appendChild(choice);
    });



};

const checkAnwser = function() {
    
    if(this.value === questionsArr[currentQuestion].correctAnswer) {
        currentScore++;
    }
    else{
        window.alert('Wrong!');
        gameTime -= 10;
    }
    currentQuestion++;
    if(currentQuestion === questionsArr.length) {
            gameOver();
    }
    else {
            askQuestion();
    }
}

const timeKeep = function() {
    gameTime--;

    timerBox.textContent = 'Time Left: ' + gameTime;

    if(gameTime === 0) {
        gameOver();
    }
}
const gameOver = function() {
    currentQuestion = 0;
    
    

    const startOver = document.createElement('button');
    startOver.textContent = 'Play Again'
    startOver.setAttribute('id', 'btn');
    startOver.addEventListener('click', startGame);

    questionContainer.appendChild(startOver);
    clearInterval(timer);

    const endTitle = document.getElementById('showQ');
    const options = document.getElementById('options');
    options.innerHTML = "";
    endTitle.textContent = "Game over! You ended with a score of " + currentScore + '/5 and ' + gameTime + ' seconds left!';

    currentScore = 0;
    gameTime = 45;
}
startButton.addEventListener('click', startGame);

