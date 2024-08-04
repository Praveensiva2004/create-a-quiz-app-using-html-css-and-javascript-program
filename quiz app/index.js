const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correct: 0
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Jupiter", "Mars", "Saturn"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
    
    document.getElementById('next-button').addEventListener('click', function() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            if (parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        } else {
            alert("Please select an answer.");
        }
    });

    document.getElementById('restart-button').addEventListener('click', function() {
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('result-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        loadQuestion();
    });
});

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-container').textContent = question.question;
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        answersContainer.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${answer}
            </label>
        `;
    });
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').textContent = score + " / " + questions.length;
}
