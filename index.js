var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


$(".btn").on("click", handler);

    function handler(){
        
        animatePress.call(this);

        var userChosenColour = $(this).attr('id'); 
        var audio = new Audio("sounds/" + userChosenColour + ".mp3");
        audio.play();       
        userClickedPattern.push(userChosenColour);
    }

    function animatePress(){
        
        $(this).addClass("pressed");
        var $this = $(this);
        setTimeout(function(){
            $this.removeClass("pressed");
       },100);
    }


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}



