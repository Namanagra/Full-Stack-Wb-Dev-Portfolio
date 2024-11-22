var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
    if (!started) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (currentLevel === gamePattern.length - 1){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startOver();
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}

function startOver(){
    level =0;
    gamePattern = [];
    started = false;
}
function nextSequence(){

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumbers = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumbers];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// $(document).keypress(function(event){
//     nextSequence();
// })

