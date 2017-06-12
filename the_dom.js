// Create a click listener that takes in the user's guess from the input tag and displays it in an alert.
// Reuse the code from your previous Hi/Lo Game challenge to to match the user's guess to the correct set number.
// Make the p tag red when there are only two guesses left. Use the jQuery .addClass(..) function.
// Make the p tag contain the results of all the user's guesses. Use the jQuery functions .append(..) or .prepend(..) and .text(..).
// Hide the button and input tags when the game is over, using the jQuery .show(..) and .hide(..) functions.

var equation
function numberPick(){
  equation = (Math.floor((Math.random() * 100) + 1));
  console.log(equation);
}

  var name
  function getName() {
    name = document.getElementById("name").value
}


// var attempt = 1;
// var guessLog =[]
$(document).ready(function(){
  var attempt = 1

  $("#enter").click(function(){
    alert($("#guess2").val())
    // $("#guess2").val("")
    $("#result").text(

function userGuess(){
  var guess = $("#guess2").val()
   if (isNaN(guess)) {
       $("#guess2").val("")
       return  "Please enter a valid number."

   }

if (attempt <5){
    if (attempt<= 6){
      if (guess > equation){
      $("#guess2").val("")
      attempt++
      console.log(attempt)
      $("ul").append(guess)
      return  "Your guess was too high, try again."
  }
   else if (guess < equation){
     $("#guess2").val("")
     attempt++
     console.log(attempt)
     $("li").append(guess)
     return   "Your guess was too low, try again."
  }
  else if(guess == equation){
    // $("#guess2").val("")
    return  "Way to go, " +name  + "! Your guess was correct!!!"
  }
}
}

else if (attempt >= 5) {
     $("p").css("color", "red")


    if (attempt <= 6){
      if (guess > equation){
        $("#guess2").val("")
        attempt++
        console.log(attempt)
        $("li").append(guess)
        return  "Your guess was too high, try again."
      }
      else if (guess < equation){
        $("#guess2").val("")
        attempt++
        console.log(attempt)
        $("ul").append(guess)
        return   "Your guess was too low, try again."
      }
      else if(guess == equation){
        // $("#guess2").val("")
        $("#guess2").val("")
        return  "Way to go, " +name  + "! Your guess was correct!!!"
      }
   }
   else if(guess != equation && attempt >= 7){
     $("#guess2").val("")
     return  "You guessed too many times. Game Over!"
   }
 }

})
})
})

// document.getElementById("guess").value= ""
