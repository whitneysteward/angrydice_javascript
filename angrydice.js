function Dice(){
  this.value = 1;
  this.held = false;

  this.roll=function (){
  if (!this.held){
    this.value = Math.floor(Math.random()* 6) + 1;
  }
  }
  this.hold=function(isotherheld){
  if(this.value=== 6){
    $("#user").html("No! You can't do hold a six")

  } else if (!isotherheld){
    this.held = true
  }
  else {
  $("#user").html("You can only hold one die!")
  }
  }
this.dicedisplay= function (id){
$(id).html('<img src="' + this.value + '.png">');
}
}
var dice1 =new Dice()
var dice2=new Dice()
dice1.roll()
dice1.hold(dice2.hold)
dice2.roll()
dice2.hold(dice1.hold)
dice1.dicedisplay("#dice1")
dice2.dicedisplay("#dice2")

// var DiceInside  = ParseInt(1,2,3,4,5,6);
// function getDiceInside = Math.random
// return DiceInside
// function getDicePic (DiceInside){
// varDicePic = '';
// '<img src="' +'.png">'
// if (DicePic === 1) {putimgtaghere}
// else if (DicePic === 2){putimgahere}
// else if (DicePic) === 3 {putimtaghere}
// else if (DicePic) === 4 {putimgtaghere}
// else if (DicePic) === 5 {putimgtaghere}
// else (DicePic) === 6 {putimgtaghere}
// }

// function getStageone(DicePic)
// If (DiceInside === 1) $alert('Would you like to hold one?')
// HOW DO I GET USER INPUT USING JAVASCRIPT?
// if else (DiceInside === 2) $alert('Would you like to hold two?')
// HOW DO I GET USER INPUT USING JAVASCRIPT
