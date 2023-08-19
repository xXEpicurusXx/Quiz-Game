const questions = [
    {
        question: "The Earth is flat.",
        answer: false,
    },
    {
        question: "Water boils at 100 degrees Celsius at sea level.",
        answer: true,
    },
    {
        question: "The sun is a planet.",
        answer: false,
    },
    {
        question: "HTML stands for Hyper Text Markup Language.",
        answer: true,
    },
    {
        question: "A slug's blood is green.",
        answer: true,
    },
    {
        question: "The loudest animal is the African Elephant.",
        answer: false,
    },
    {
        question: "Approximately one quarter of human bones are in the feet.",
        answer: true,
    },
    {
        question: "The total surface area of a human lungs is the size of a football pitch.",
        answer: true,
    },
    {
        question: "CSS stands for Cascading Style Sheets.",
        answer: true,
    },
    {
        question: "In West Virginia, USA, if you accidentally hit an animal with your car, you are free to take it home to eat.",
        answer: true,
    },
    {
        question: "In London, UK, if you happen to die in the House of Parliament, you are entitled to a state funeral.",
        answer: false,
    },
    {
        question: "It is illegal to pee in the Ocean in Portugal.",
        answer: TransformStreamDefaultController,
    },
    {
        question: "You can lead a cow down stairs but not up stairs.",
        answer: false,
    },
    {
        question: "Google was originally called 'Backrub'.",
        answer: true,
    },
    {
        question: "Buzz Aldrin's mother's maiden name was 'Moon'.",
        answer: true,
    },
    {
        question: "No piece of square dry paper can be folded in half more than 7 times.",
        answer: false,
    },
    {
        question: "A few ounces of chocolate can to kill a small dog.",
        answer: true,
    },
];

let currentQuestionIndex = 0;
let score = 0; // Initialize the score

const questionElement = document.getElementById("question");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score"); // Get the score display element

function displayQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
    resultElement.textContent = "";
    scoreElement.textContent = `Score: ${score} / 17`; // Update the score display
}

function checkAnswer(isTrue) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (isTrue === correctAnswer) {
        resultElement.textContent = "Correct!";
        score++; // Increase the score for correct answers
    } else {
        resultElement.textContent = "Incorrect!";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        resultElement.textContent = "Quiz complete! Below is your final score!";
    }
}

trueButton.addEventListener("click", () => {
    checkAnswer(true);
});

falseButton.addEventListener("click", () => {
    checkAnswer(false);
});

// Initialize the quiz
displayQuestion();