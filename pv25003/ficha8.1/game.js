const questions = localStorage.getItem("questions") || [
    {
        question: "Pergunta 1?",
        answers: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"],
        correctAnswer: "Resposta 2",
        guess: undefined
    },
    {
        question: "Pergunta 2?",
        answers: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"],
        correctAnswer: "Resposta 1",
        guess: undefined
    }, 
    {
        question: "Pergunta 3?",
        answers: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"],
        correctAnswer: "Resposta 3",
        guess: undefined
    }, 
    {
        question: "Pergunta 4?",
        answers: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"],
        correctAnswer: "Resposta 4",
        guess: undefined
    },
    {
        question: "Pergunta 5?",
        answers: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"],
        correctAnswer: "Resposta 1",
        guess: undefined
    },
];

let currQuestion = 0;

function guess(guess){
    if(questions[currQuestion].guess == undefined) {
        questions[currQuestion].guess = guess;
        paint();
        return true;
    }    
    return false;
}

function render() {
    document.getElementById("pergunta").innerHTML = questions[currQuestion].question;
    questions[currQuestion].answers.forEach((value, index) => {
        const resposta = document.createElement("div");
        resposta.classList.add("resposta");
        resposta.setAttribute("id", index);
        resposta.innerHTML = value;
    });
}

function RightOrWrong() {
    if(questions[currQuestion].guess == undefined) return;

    questions[currQuestion].answers.forEach((value, index) => {
        if(questions[currQuestion].guess == questions[currQuestion].correctAnswer){ 
            points += 5;
            // TODO: Write Resposta certa na navbar-middle
            document.getElementById("notification");
        }
        else { 
            // TODO: Write Resposta errada na navbar-middle
            document.getElementById("notification");
            points = Math.max([0, points-2]);
        }

        if(value != questions[currQuestion].correctAnswer && questions[currQuestion].guess == value) // if this is my guess and its wrong paint red
            document.getElementById(index).classList.add("wrong");
        else if(value == questions[currQuestion].correctAnswer) document.getElementById(index).classList.add("right");
    });
}

function nextQuestion(){
    currQuestion++;
}
