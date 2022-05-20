// Variable declaration
const errorMessage = document.getElementById('errorMessage')
const exam_id = document.getElementById('exam_id')
const email = document.getElementById('email')
const myForm = document.getElementById('myForm')

// Add event listener
myForm.addEventListener('submit', validateForm)

// Create function
function validateForm(e){
    e.preventDefault();
    // Create an array of error
    let message = []
    // Get users data
    if(email.value === ""){
        message.push ("Please enter Email")
    }

    if(exam_id.value === ""){
        message.push ("Please enter Exam id")
    }

    if(isNaN(exam_id.value)){
        message.push ("Please enter numeric digit for Exam ID")
    }

    // if(password.value.length < 6){
    //     message.push ("Password must be at least 6 character")
    // }

    // Check if the error exist
    if(message.length > 0){
        errorMessage.innerText = message.join(', ');
    }
    else{
        window.location = 'file:///C:/Users/user/Desktop/testingQuiz/quiz.html'
    }
}