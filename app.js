const quizData = [{
    question: 'Which of the following is a Markup language?',
    a: 'HTML',
    b: 'CSS',
    c: 'JavaScript',
    d: 'PHP',
    correct: "a",
},

{
question: 'What year was JavaScript launched?',
a: '1996',
b: '1994',
c: '1995',
d: 'none of the above',
correct: "b",
},
{
question : 'What does CSS stand for?',
a: 'HyperText Markup Language',
b: 'Jason object notation',
c: 'cascading Style sheet',
d: 'helicopter terminals motorboats',
correct: "c",
},

];
let index = 0;
let correct = 0,
incorrect =0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadquestion = () => {
if (total === index){
    return quizEnd()
}
reset()

const data = quizData[index]
questionBox.innerHTML = `${index+1} ) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if(ans === data.correct){
        correct++;
    }
    else{
        incorrect++;
    }
    index++
    loadquestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputE1) => {
        if(inputE1.checked){
            ans = inputE1.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputE1) => {
        inputE1.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
<dic class="col">
<h3 class="w-100"> Hey, You've scored ${correct}/${total} </h3>
</div>
`
}
loadquestion(index);