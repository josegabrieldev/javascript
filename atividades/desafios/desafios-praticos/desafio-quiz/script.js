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
        question: "Quem desenvolveu o JavaScript",
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
        question: "Qual empresa criou o videoGame PlayStation?",
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
]

const questionE1 = document.querySelector('#question')
const answersE1 = document.querySelector('#answers')
const containerE1 = document.querySelector('#question-container')
const resultadoE1 = document.querySelector('#resultado')
const scoreE1 = document.querySelector('#score')
const restartBtn = document.querySelector('#restart')

let currentIndex = 0
let score = 0

function startQuiz() {
    currentIndex = 0
    score = 0
    resultadoE1.style.display = 'none'
    containerE1.style.display = 'block'
    renderQuestion()
}
startQuiz()

function renderQuestion() {
    const q = quizData[currentIndex]
    questionE1.textContent = q.question

    answersE1.innerHTML = ''

    q.answers.forEach((ans) => {
        const btn = document.createElement('button')
        btn.textContent = ans.text
        btn.addEventListener('click', () => handleAnswer(ans.correct, btn))
        answersE1.appendChild(btn)
    })
}

function handleAnswer(iscorrect, buttonE1) {
    if(iscorrect)
        currentIndex++

    if(currentIndex >= quizData.length) {
        showResult()
    } else {
        renderQuestion()
    }
}

function showResult() {
    containerE1.style.display = 'none'
    resultadoE1.style.display = 'block'
    scoreE1.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`
}

restartBtn.addEventListener('click', startQuiz)