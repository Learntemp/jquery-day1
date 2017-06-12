// View
//
// Create an input tag to accept questions from the user. Give it an id of "question".
// Create a button tag to send the question to the Javascript code. Give it an id of "submit".
// Create a p tag to hold the answer the Magic 8 Ball sends back. Give it an id of "answer".
// Controller
//
// Create a click listener for the button tag, which opens up an alert.
// Make the click listener show what is in the input field. Use the jQuery function .val().
// Make the click listener show what's in the input field in the paragraph section. Use the jQuery function .text().
// Clear the input field after the button is clicked.
// Reuse your code from the previous Magic 8 Ball challenge to give a random answer.


var ans = ["Yup!", "Fuhgeddaboudit", "Maybe",  "What would your mother do?", "What would an Australian do", "Nope", "I really don't care."]

function eightBall() {

  document.getElementById("ques").innerHTML = "Your Question: <br/>" + document.getElementById("question").value
  document.getElementById("answer").innerHTML =  "Answer: <br/>" + ans[Math.floor((Math.random() * 7))]

}


$(document).ready(function(){
  $("#submit").click(function(){
    // eightBall()
    alert($("#question").val())
    alert($("#answer").text())
    $(document.getElementById("question").value = "")
  })

})


//---------------------------------------------------
// var ans = ["Yup!", "Fuhgeddaboudit", "Maybe",  "What would your mother do?", "What would an Australian do", "Nope", "I really don't care."]
//
// $(document).ready(function(){
//   $("#submit").click(function(){
//     // eightBall()
//     $("#question").val("")
//     $("#answer").text(
//
//     )
//
//   })
// })
//
// function eightBall() {
//
//   document.getElementById("ques").innerHTML = "Your Question: <br/>" + document.getElementById("question").value
//   document.getElementById("answer").innerHTML =  "Answer: <br/>" + ans[Math.floor((Math.random() * 7))]
//
// }
