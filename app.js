var choice, computer_play, tie = 0, win = 0, loss = 0, result_picture

//start the game on document load and every screen except the welcome screen
$(document).ready(function(){
  initializeScore();
  initializeCharacters();
  $('#choosechar_screen').hide()
  $('#opponent_screen').hide()
  $('#selection_screen ').hide()
  $('#result_screen').hide()

})
// set the value for the computer player
var playComputer = function(){
    var computer_play= Math.random()*10
      if (computer_play < 3.5) {
        return "rock"
      } else if (computer_play < 6.5) {
        return "paper"
      } else {
        return "scissors"
      }
}

// // set the value for the computer player
var ranPic = function(){
    var ran= Math.random()*10
      if (ran < 3.5) {
        return 0
      } else if (ran < 6.5) {
        return 1
      } else {
        return 2
      }
}
// compare the player's choice vs. the computer's choice, return the result and add to the win, loss, tie count
var result = function(choice,computer_play){
   var result=""
   var result_p=""
   if (computer_play === choice ) {
     result_p ="tie"
     result = "<div class='row'><div class='col-md-2'></div><img class='col-md-3 img-responsive center-block' src='images/" + choice + "_btn.png'><img class='col-md-2 img-responsive center-block' src='images/vs.png'><img class='col-md-3 img-responsive center-block' src='images/" + computer_play + "_btn.png'><div class='col-md-2'></div></div><div class='row'><div class='col-md-3'></div><img class='center-block col-md-6 img-responsive' src='images/tie_result.png'><div class='col-md-3'></div></div>"
     updateScore("tie")
   } else if ((computer_play === "rock" && choice === "scissors") || (computer_play === "scissors" && choice === "paper") ||(computer_play === "paper" && choice === "rock")) {
     result_p ="loss"
     result= "<div class='row'><div class='col-md-2'></div><img class='col-md-3 img-responsive center-block' src='images/"+choice+ "_btn.png'><img class='col-md-2 img-responsive center-block' src='images/vs.png'><img class='col-md-3 img-responsive center-block' src='images/" + computer_play + "_btn.png'><div class='col-md-2'></div></div><div class='row'><div class='col-md-3'></div><img class='center-block col-md-6 img-responsive' src='images/loss_result.png'><div class='col-md-3'></div></div>"
     updateScore("loss")
   } else {
     result_p ="win"
     result = "<div class='row'><div class='col-md-2'></div><img class='col-md-3 img-responsive center-block' src='images/"+choice+ "_btn.png'><img class='col-md-2 img-responsive center-block' src='images/vs.png'><img class='col-md-3 img-responsive center-block' src='images/" + computer_play + "_btn.png'><div class='col-md-2'></div></div><div class='row'><div class='col-md-3'></div><img class='center-block col-md-6 img-responsive' src='images/win_result.png'><div class='col-md-3'></div></div>"
     updateScore("win")
   }

   resultPic(result_p)
    $('.result').html(result+'<div class="result_pic center-block"><img id="result_pic" class="img-rounded" src="'+result_picture+'"></div>')
 }

//loop through each character in the array
//if the character is selected, check if the variable passed is a win,loss or tie
//set the value of the variable result picture to a random gif stored in the character's win, loss or tie array of gif at random
var resultPic = function(result_str){
  players.forEach(function(character){
    if (character.user_selected && result_str === "win"){
      result_picture = character.win[ranPic()]
    } else if (character.user_selected && result_str === "loss"){
      result_picture = character.loss[ranPic()]
    } else if (character.user_selected && result_str === "tie"){
      result_picture = character.tie[ranPic()]
    }
  })
}

// update scoreboard
// update win, loss or tie count based on results
// update win, loss, tie counts in html by referencing ids 
var updateScore = function(result){
  if (result === "win"){
    win++
  } else if (result === "loss"){
    loss++
  } else {
    tie++
  }
  $('#win').html('<h2 class ="center-block">' + win + '</h2>')
  $('#loss').html('<h2 class ="center-block">' + loss + '</h2>')
  $('#tie').html('<h2 class ="center-block">' + tie + '</h2>')
}

//(re)set the values of win, loss and tie counts to 0
// update win, loss, tie counts in html by referencing ids 
var initializeScore = function(){
  win=0
  loss=0
  tie=0

  $('#win').html('<h2 class ="center-block">' + win + '</h2>')
  $('#loss').html('<h2 class ="center-block">' + loss + '</h2>')
  $('#tie').html('<h2 class ="center-block">' + tie + '</h2>')
}

// load all of the character objects in players array
var initializeCharacters = function(){
  var num = 1
  players.forEach(function(character){
    var divid = "#play"+num
    var btnid = "playBtn"+num
    var spanClass = 'playName'+num
    var spanDot = '.playName'+num
    $(divid).html('<img class="center-block img-circle" src="' + character.picture + '"><div class="row"><a href=# id="'+ btnid +'" class="char_select_btn col-md-12"><img class="center-block" src="images/'+character.name_pic+'"></a></div>')
    character.char_id = btnid
    num++
  })
}

// if the character wasn't selected by the user on the character selection screen, show them as an opponent option
var initializeOpponents = function(){
  var num = 1
  players.forEach(function(character){
    var divid = "#opponent"+num
    var btnid = "oppBtn"+num
    var spanClass = 'oppName'+num
    var spanDot = '.oppName'+num
    if(!character.user_selected){
      $(divid).html('<img class="center-block img-circle" src="' + character.picture + '"><div class="row"><a href=# id="'+ btnid +'" class="opp_select_btn col-md-12"><img class="center-block" src="images/'+character.name_pic+'"></a></div>')
      character.opp_id = btnid
    } else if (character.user_selected){
       num--
    }
    num++
  })
}

//Run through the array of players and if the character was selected by the user as their player or the opponent 
//load their picture and name in the html of the divs with ids playVS and oppVS
var initializeVS = function(){
  players.forEach(function(character){
    if (character.user_selected)
      {
        $('#playVS').html('<img class="center-block img-circle" src="'+character.picture+'"><div class="row"><div class="col-md-4"></div><img class="col-md-4 center-block" src="images/'+character.name_pic+'"><div class="col-md-4"></div></div>')
      }
    else if (character.opp_selected)
      {
        $('#oppVS').html('<img class="center-block img-circle" src="'+character.picture+'"><div class="row"><div class="col-md-4"></div><img class="col-md-4 center-block" src="images/'+character.name_pic+'"><div class="col-md-4"></div></div>')
      }
  })
}

// EVENT HANDLERS

// registers a player's personal character selection on click
// initialize opponents based on the characters who were not selected
// hide the character selection screen and shows opponent selection screen div
$('body').on('click', '.char_select_btn', function(){
  var clickid = this.id
  players.forEach(function(character){
    for(var trait in character){
      if(character.char_id === clickid){
          character.user_selected = true
      }
    }
  })
  initializeOpponents()
  $('#choosechar_screen').hide()
  $('#opponent_screen').show()
})

// registers a player's opponent selection on click
// initialize vs screen based on the characters that were selected
// hides opponent selection screen div and shows the rock paper scissors selection screen div
$('body').on('click', '.opp_select_btn', function(){
  var clickid = this.id
  players.forEach(function(character){
      if(character.opp_id === clickid){
          character.opp_selected = true
      }
  })
  initializeVS()
  $('#opponent_screen').hide()
  $('#selection_screen ').show()
})

// registers player's choice of rock based on button click
// hides selection screen div and shows the results screen div
 $('#rockBtn').on('click', function(){
   choice="rock"
   computer_play = playComputer()
   result(choice,computer_play)
   $('#selection_screen ').hide()
   $('#result_screen').show()

 })
 
 // registers player's choice of paper based on button click
 // hides selection screen div and shows the results screen div
 $('#paperBtn').on('click', function(){
   choice="paper"
   computer_play = playComputer()
   result(choice,computer_play)
   $('#selection_screen ').hide()
   $('#result_screen').show()
 })
 
 // registers player's choice of scissors based on button click
 // hides selection screen div and shows the results screen div
 $('#scissorsBtn').on('click', function(){
   choice="scissors"
   computer_play = playComputer()
   result(choice,computer_play)
   $('#selection_screen ').hide()
   $('#result_screen').show()
 })

// on click the reset button resets all of the characters to false and all of the counts to zero
// it hides the results screen div and shows the choose character screen div
 $('#resetBtn').on('click', function(){
   choice=""
   tie = 0
   win = 0
   loss = 0
   players.forEach(function(character){
     character.user_selected= false
     character.opp_selected= false
     character.char_id= 0
     character.opp_id= 0
   })
   $('.result').html('<h1 class="resultTXT center-block"></h1>')
   $('#win').html('<h2 class ="center-block">' + win + '</h2>')
   $('#loss').html('<h2 class ="center-block">' + loss + '</h2>')
   $('#tie').html('<h2 class ="center-block">' + tie + '</h2>')
   initializeCharacters()
   $('#result_screen').hide()
   $('#choosechar_screen').show()
 })

// on click the play again button will hide the results screen and show the selection screen
 $('#playAgainBtn').on('click', function(){
   $('#result_screen').hide()
   $('#selection_screen ').show()
 })

// on click the start button will hide the welcome screen and show the character selection screen div
 $('#startBtn').on('click', function(){
   $('#welcome_screen').hide()
   $('#choosechar_screen').show()
 })
