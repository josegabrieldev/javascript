const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        answers: [
            { text: "São Paulo", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: true },
            { text: "Salvador", correct: false },
        ]
    },
    {
        question: "Quem desenvolveu o JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Brendan Eich", correct: true },
            { text: "Elon Musk", correct: false },
            { text: "Google", correct: false },
        ]
    },
    {
        question: "Quem é o maior artilheiro da seleção Brasileira de todos os tempos?",
        answers: [
            { text: "Pelé", correct: false },
            { text: "Ronaldo Fenômeno", correct: false },
            { text: "Neymar", correct: true },
            { text: "Romário", correct: false },
        ]
    },
    {
        question: "Quem dirigiu o filme 'Titanic' (1997)?",
        answers: [
            { text: "James Cameron", correct: true },
            { text: "Steven Spielberg", correct: false },
            { text: "Martin Scorsese", correct: false },
            { text: "George Lucas", correct: false },
        ]
    },
    {
        question: "Qual é o maior país do mundo em território?",
        answers: [
            { text: "Estados Unidos", correct: false },
            { text: "China", correct: false },
            { text: "Rússia", correct: true },
            { text: "Canadá", correct: false },
        ]
    },
    {
        question: "Qual empresa criou o videogame PlayStation?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Nintendo", correct: false },
            { text: "Sony", correct: true },
            { text: "Sega", correct: false },
        ]
    },
    {
        question: "Qual planeta é conhecido como 'Planeta Vermelho'?",
        answers: [
            { text: "Vênus", correct: false },
            { text: "Marte", correct: true },
            { text: "Júpiter", correct: false },
            { text: "Saturno", correct: false },
        ]
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        answers: [
            { text: "Machado de Assis", correct: false },
            { text: "Miguel de Cervantes", correct: true },
            { text: "José de Alencar", correct: false },
            { text: "William Shakespeare", correct: false },
        ]
    },
    {
        question: "Quem é conhecido como o 'Rei do Pop'?",
        answers: [
            { text: "Elvis Presley", correct: false },
            { text: "Michael Jackson", correct: true },
            { text: "Freddie Mercury", correct: false },
            { text: "Prince", correct: false },
        ]
    },
    {
        question: "Em que ano a linguagem Python foi criada?",
        answers: [
            { text: "1989", correct: false },
            { text: "1991", correct: true },
            { text: "2000", correct: false },
            { text: "1995", correct: false },
        ]
    },
];

const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers");
const resultado = document.getElementById("resultado");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart");

let currentQuestion = 0;
let score = 0;

function mostrarPergunta() {
    resetState();

    let perguntaAtual = quizData[currentQuestion];
    questionContainer.querySelector("p").innerText = perguntaAtual.question;

    perguntaAtual.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn-resposta");

        button.addEventListener("click", () => {
            // só marca o clicado
            if (answer.correct) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("wrong");
            }

            // esperar um pouco e ir para a próxima
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < quizData.length) {
                    mostrarPergunta();
                } else {
                    mostrarResultado();
                }
            }, 1000);
        });

        answersContainer.appendChild(button);
    });
}

function resetState() {
    answersContainer.innerHTML = "";
}

function mostrarResultado() {
    questionContainer.style.display = "none";
    resultado.style.display = "block";
    scoreText.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultado.style.display = "none";
    questionContainer.style.display = "block";
    mostrarPergunta();
});

mostrarPergunta();
