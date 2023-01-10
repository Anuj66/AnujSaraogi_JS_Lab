let questions = [
    {
        question: 'What is 2/2 = ?',
        answers: [
            {
                option: '1',
                isAnswer: true
            },
            {
                option: '2',
                isAnswer: false
            },
            {
                option: '3',
                isAnswer: false
            },
            {
                option: '4',
                isAnswer: false
            }
        ]
    },
    {
        question: 'What is 2+2 = ?',
        answers: [
            {
                option: '1',
                isAnswer: false
            },
            {
                option: '2',
                isAnswer: false
            },
            {
                option: '3',
                isAnswer: false
            },
            {
                option: '4',
                isAnswer: true
            }
        ]
    },
    {
        question: 'What is 2*2 = ?',
        answers: [
            {
                option: '1',
                isAnswer: false
            },
            {
                option: '2',
                isAnswer: false
            },
            {
                option: '3',
                isAnswer: false
            },
            {
                option: '4',
                isAnswer: true
            }
        ]
    },
    {
        question: 'What is the total sum of angles of a triangle = ?',
        answers: [
            {
                option: '180',
                isAnswer: true
            },
            {
                option: '360',
                isAnswer: false
            },
            {
                option: '90',
                isAnswer: false
            },
            {
                option: '270',
                isAnswer: false
            }
        ]
    },
    {
        question: 'What is the unit of velocity = ?',
        answers: [
            {
                option: 'm/s^2',
                isAnswer: false
            },
            {
                option: 'm/s',
                isAnswer: true
            },
            {
                option: 'm^2/s',
                isAnswer: false
            },
            {
                option: 'm/s^3',
                isAnswer: false
            }
        ]
    },
]

let currentQuestionIndex = 0;
let currentQuestion = document.getElementById('question');
let currentQuestionLabel = document.getElementById('question-label')
let score = 0
let currentOption1label = document.getElementById('option1label')
let currentOption2label = document.getElementById('option2label')
let currentOption3label = document.getElementById('option3label')
let currentOption4label = document.getElementById('option4label')
let button = document.getElementById('btn')
let currentOption1 = document.getElementById('option1')
let currentOption2 = document.getElementById('option2')
let currentOption3 = document.getElementById('option3')
let currentOption4 = document.getElementById('option4')
let scoreSpan = document.getElementById('score')
let scoreDiv = document.getElementById('score-div')
let percentageSpan = document.getElementById('percentage')

function updateQuestion(index) {
    currentQuestionLabel.innerHTML = `Question : ${index+1} of ` + questions.length
    currentQuestion.innerHTML = 'Q. ' + questions[index].question
    currentOption1label.innerHTML = questions[index].answers[0].option
    currentOption2label.innerHTML = questions[index].answers[1].option
    currentOption3label.innerHTML = questions[index].answers[2].option
    currentOption4label.innerHTML = questions[index].answers[3].option
}

function onStart() {
    updateQuestion(0)
    if(currentQuestionIndex === questions.length-1) {
        button.innerHTML = 'Submit'
    }
    scoreDiv.style.display = 'none'
}

btn.addEventListener('click', function() {  
    let answer = null
    if(currentOption1.checked) {
        answer = currentOption1.value
        currentOption1.checked = false
    }
    if(currentOption2.checked) {
        answer = currentOption2.value
        currentOption2.checked = false
    }
    if(currentOption3.checked) {
        answer = currentOption3.value
        currentOption3.checked = false
    }
    if(currentOption4.checked) {
        answer = currentOption4.value
        currentOption4.checked = false
    }
    if(answer) {
        if(answer === 'answer1' && questions[currentQuestionIndex].answers[0].isAnswer) score++
        if(answer === 'answer2' && questions[currentQuestionIndex].answers[1].isAnswer) score++
        if(answer === 'answer3' && questions[currentQuestionIndex].answers[2].isAnswer) score++
        if(answer === 'answer4' && questions[currentQuestionIndex].answers[3].isAnswer) score++
    }
    if(button.innerHTML === 'Submit') {
        currentQuestionLabel.style.display = 'none'
        currentQuestion.style.display = 'none'
        currentOption1label.style.display = 'none'
        currentOption2label.style.display = 'none'
        currentOption3label.style.display = 'none'
        currentOption4label.style.display = 'none'
        currentOption1.style.display = 'none'
        currentOption2.style.display = 'none'
        currentOption3.style.display = 'none'
        currentOption4.style.display = 'none'
        button.style.display = 'none'
        scoreDiv.style.display = 'flex'
        scoreSpan.innerHTML = score + ' out of ' + questions.length
        percentageSpan.innerHTML = Math.floor(score*100/(questions.length))
        return
    }
    currentQuestionIndex++
    if(currentQuestionIndex === questions.length-1) {
        button.innerHTML = 'Submit'
    }
    updateQuestion(currentQuestionIndex)
})
