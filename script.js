const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'How high is Croagh Patrick, also known as Irelands Holy Mountain?',
        choice1: '764 meters',
        choice2: '814 meters',
        choice3: '904 meters',
        choice4: '1100 meters',
        answer: '1',
    }, {
        question: 'What was the most used programming language in 2019?',
        choice1: 'JavaScript',
        choice2: 'C',
        choice3: 'Python',
        choice4: 'Java',
        answer: '4',
    }, {
        question: 'Who is the current President of the United States Of America?',
        choice1: 'Barack Obama',
        choice2: 'Donald Trump',
        choice3: 'Joe Biden',
        choice4: 'Hillary Clinton',
        answer: '3'
    }, {
        question: 'In what year did Operation Barbarossa commence?',
        choice1: '1939',
        choice2: '1941',
        choice3: '1943',
        choice4: '1945',
        answer: '2',
    }, {
        question: 'In what year was the original Metal Gear Solid released?',
        choice1: '1997',
        choice2: '1998',
        choice3: '1999',
        choice4: '2001',
        answer: '1'
    }, {
        question: 'In what sport would you use a pen grip to hold your sandwich bat?',
        choice1: 'Baseball',
        choice2: 'Hurling',
        choice3: 'Table Tennis',
        choice4: 'Cricket',
        answer: '3',
    }, {
        question: 'What has Microsoft technology designed to allow an easy combination of HTML, scripts, and ActiveX?',
        choice1: 'Active Server Pages',
        choice2: '.NET Framework',
        choice3: 'Microsoft 365',
        choice4: 'Microsoft Edge',
        answer: '1',
    }, {
        question: 'Which company created the massively multiplayer online game World of WarCraft?',
        choice1: 'Bethesda',
        choice2: '343 Industries',
        choice3: 'Bungie',
        choice4: 'Blizzard Entertainment',
        answer: '4'
    }, {
        question: 'What is the mass per unit volume of material called?',
        choice1: 'Weight',
        choice2: 'Mass',
        choice3: 'Density',
        choice4: 'Size',
        answer: '3',
    }, {
        question: 'What is the speed of light in a vacuum?',
        choice1: '299792458 Meters per second',
        choice2: '357268402 Meters per second',
        choice3: '682900175 Meters per second',
        choice4: 'Light cannot travel in a vacuum',
        answer: '1'
    },

];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    });
    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
            'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
};

startGame();