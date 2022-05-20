// Create an array of questions, options and correct answers
const questionsArray = [
    {
        question: '1)  Who is the father of computers?',
        a: 'Charles Babbage',
        b: 'Blaise Pascal',
        c: 'Bill Gates',
        d: 'Herman Hollerith',
        correct_answer: 'Charles Babbage'
    },
    {
        question: '2)  What is the capital of France?',
        a: 'London',
        b: 'Paris',
        c: 'Madrid',
        d: 'Rome',
        correct_answer: 'Paris'
    },
    {
        question: '3)  Who is the president of Nigeria?',
        a: 'Goodluck Jonathan',
        b: 'Bola Tinubu',
        c: 'Mohammadu Buhari',
        d: 'Olusegun Obasanjo',
        correct_answer: 'Mohammadu Buhari'
    },

]

// Declaration of variables
const questionContainer = document.getElementById('questionContainer');
const optionsContainer = document.getElementById('optionsContainer');
const btnContainer = document.getElementById('btnContainer');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const timeUp = document.getElementById('timeUp')
const scoreContainer = document.getElementById('scoreContainer')

// Hide the submit button
btn2.style.display = 'none'

// Hide the timeUp button
timeUp.style.display = 'none'

// Hide the print button
btn3.style.display = 'none'

// Initial variable myQuiz to zero
let myQuiz = 0;

// Initialize variable score to zero
let score = 0

// Populate the screen with questions and options
function loadQuiz(){
    let myQuest = questionsArray[myQuiz]
    // Access the question property
    let myQuestion = myQuest.question
    questionContainer.textContent = myQuestion
    // console.log(myQuestion);
    // Access the options property
    let myOptions = `
        <input type = 'radio' name = 'option' value = '${myQuest.a}'/>&nbsp;&nbsp;${myQuest.a} <br/><br/>
        <input type = 'radio' name = 'option' value = '${myQuest.b}'/>&nbsp;&nbsp;${myQuest.b} <br/><br/>
        <input type = 'radio' name = 'option' value = '${myQuest.c}'/>&nbsp;&nbsp;${myQuest.c} <br/><br/>
        <input type = 'radio' name = 'option' value = '${myQuest.d}'/>&nbsp;&nbsp;${myQuest.d} <br/><br/>
    `
    optionsContainer.innerHTML = myOptions

    // btnGoto.addEventListener('click', btnGoto3)

    // function btnGoto3(){
    //     window.location = '/testing.html'
    // }
}
loadQuiz()

// Validate form when users click option - eventlistener
btn.addEventListener('click', valBtn)

// Create a function that will check if the user did not click the option
function valBtn(){
    const radioCheck = document.querySelector('input[type = radio]:checked')
    // console.log('You clicked the option');
    // If statement
    if(!radioCheck){
        alert('Please select an option')
    }
    else{
        //Score of student
        if(radioCheck.value === questionsArray[myQuiz].correct_answer){
            score +=5
            alert(`You score ${score}`)
        }
        // Equate the next button to submit
        if(myQuiz === questionsArray.length - 1){
            btn.style.display = 'none'
            btn2.style.display = 'block'          
        }
        myQuiz++
        loadQuiz()
    }
}

// Add an event listener to the submit button
btn2.addEventListener('click', displayScore)

// Create a function
function displayScore(){
    questionContainer.style.display = 'none'
    optionsContainer.style.display = 'none'
    btn2.style.display = 'none'
    scoreContainer.textContent= `You score ${score} / ${questionsArray.length * 5}`
    scoreContainer.style.fontSize = '40px'
    scoreContainer.style.paddingTop = '100px'
    scoreContainer.style.textAlign = 'center'
    btn3.style.display = 'block'
}

// Timer functionality

let totalTime = 180;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval(myTimer, 1000)

function myTimer(){
    counter++;
    min = Math.floor((totalTime - counter)/60)
    sec = totalTime - min * 60 - counter
    // console.log(sec);

    
// const timerBox = document.getElementById('timerBox')
const timeLeft = document.getElementById('timeLeft')
timeLeft.textContent = min + " : " + sec  
timeLeft.style.fontSize = '1.5rem'
// timerBox.appendChild(timeLeft)

if(counter === totalTime){
    clearInterval(timer)
    timeUp.style.display = 'block'
    questionContainer.style.display = 'none'
    optionsContainer.style.display = 'none'
    btn2.style.display = 'none'
    btn.style.display = 'none'
    scoreContainer.textContent= `You score ${score} / ${questionsArray.length * 5}`
    scoreContainer.style.fontSize = '40px'
    scoreContainer.style.paddingTop = '100px'
    scoreContainer.style.textAlign = 'center'
    btn3.style.display = 'block'
}
}



// const btnGoto = document.getElementById('btnGoto')

// btnGoto.addEventListener('click', btnGoto)

// function btnGoto(){
//     window.location = '/testing.html'
// }
