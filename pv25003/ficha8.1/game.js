let {questions, currQuestion} = getData();
render();

function getData() {
    return {questions: getQuestions(), currQuestion: 0}
}

function getQuestions() {
    const questionsLocal = localStorage.getItem("questions");
    return questionsLocal? questionsLocal : [
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
}

function guess(guess){
    if(questions[currQuestion].guess != undefined) return;
    questions[currQuestion].guess = guess;
    RightOrWrong();
}

function render() {
    document.getElementById("pergunta").innerHTML = questions[currQuestion].question;

    document.getElementById("respostas").remove();
    const respostas = document.createElement("div");
    respostas.setAttribute("id", "respostas");

    questions[currQuestion].answers.forEach((value, index) => {
        const resposta = document.createElement("div");
        resposta.classList.add("resposta");
        resposta.setAttribute("id", index);
        resposta.innerHTML = value;
        resposta.addEventListener("click", () => {
            guess(resposta.innerHTML);
        })
        respostas.appendChild(resposta);
    });

    document.getElementById("quiz-section").insertAdjacentElement("beforeend", respostas);
}

function RightOrWrong() {
    if(questions[currQuestion].guess == undefined){ 
        document.getElementById("notification").innerHTML = "";
        return;
    }

    questions[currQuestion].answers.forEach((value, index) => {
        if(questions[currQuestion].guess == questions[currQuestion].correctAnswer){ 
            document.getElementById("notification").innerHTML = "Resposta certa!";
            document.getElementById("notification").style.color = "#2db300";
            points += 5;
        }
        else { 
            document.getElementById("notification").innerHTML = "Resposta Errada!";
            document.getElementById("notification").style.color = "#b30000";
            points = Math.max([0, points-2]);
        }

        if(value != questions[currQuestion].correctAnswer && questions[currQuestion].guess == value) // if this is my guess and its wrong paint red
            document.getElementById(index).classList.add("wrong");
        else if(value == questions[currQuestion].correctAnswer) document.getElementById(index).classList.add("right");
    });
}

function nextQuestion(){
    if(currQuestion + 1 >= questions.length) finishGame();
    else currQuestion++;
    render();
    RightOrWrong();
}
document.getElementById("rightArrow").addEventListener("click", () => {
    nextQuestion();
})

function prevQuestion(){
    if(currQuestion - 1 < 0) return;
    else currQuestion--;
    render();
    RightOrWrong();
}
document.getElementById("leftArrow").addEventListener("click", () => {
    prevQuestion();
})
