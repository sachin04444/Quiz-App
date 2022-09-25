const quizDB = [
    {
        question: "web technologies are standardized by",
        a: "Disabilities",
        b: "recommendation",
        c: "testing ",
        d: "cadidate reconmmendation",
        ans: "ans2"
    },
    {
        question: "the acronym w3c stands for ",
        a: "world web wide ",
        b: "wide world web",
        c: "world wide web" ,
        d: " world wide web control",
        ans: "ans3"
    }
    ,
    {
        question: "HTML is ----- language",
        a: " procedural",
        b: "markup",
        c: "object oriented",
        d: "object based",
        ans: "ans2"
    }
]
const question = document.querySelector(".question")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const answers = document.querySelectorAll(".answer")
const ResultsF=document.querySelector(".inner-div")


let index = 0;
let score = 0;

const loadquestion = () => {
    const quiz1 = quizDB[index]
    question.innerText = `No.${index+1}: ${quiz1.question}`
    option1.innerText = quiz1.a
    option2.innerText = quiz1.b
    option3.innerText = quiz1.c
    option4.innerText = quiz1.d

}
loadquestion();
const getCheckAnser = () => {
    let Fans;
    answers.forEach((currElm) => {
        if (currElm.checked) {
            Fans = currElm.id;
        }
    })
    return Fans;

}

const deseletedAll=(elm)=>{
    answers.forEach((curelem)=>{
        curelem.checked=false
    })
}


const submited = () => {
    const checkAnswer = getCheckAnser()
    console.log(checkAnswer)


    if (checkAnswer == quizDB[index].ans) {
        score++
        console.log(score);
    }

    index++;
    console.log(index)
 deseletedAll()

    if (index < quizDB.length) {
        loadquestion();
    }else{ 
        ResultsF.innerHTML=`<div class=javas > <p>Right =${score}<p>
        <p>wong =${index -score}<p>
        
        <button class="btn" onclick="location.reload()">lets play Again</button></div>
        `  
    }
}
 