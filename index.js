/*** FIRST OPTION - FIRST BUTTON ONLY ***/

//Selects the first button on the HTML file and pass the first parameter "click" then add the second parameter (listener) "handleClick"
// document.querySelector("button").addEventListener("click", handleClick);
//
// //Do something when a button gets clicked
// function handleClick() {
//   alert("I got clicked");
// }

/*** SECOND OPTION - ALL BUTTONS WITH A LOOP ***/

//Decting Buttons Pressed
//Get the number of buttons by selecting all the buttons with a class of drum and then get is length
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  //Looking throgh the document and selecting all selectors with class drum and select each element from the array and add an event listener
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //THIS used to identify the identy of the button clicked
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  });
}



//Decting Keyboard Keys Pressed
//Keyboard Event Listener
document.addEventListener("keydown", function(event) {

  makeSound(event.key);


});

function makeSound(key) {

  switch (key) {
    case "w":
      //Play sound
      //Creates audio var and then Audio object and then specifies the name of the sound file
      var tom1 = new Audio("sounds/tom-1.mp3");
      //Calls play method to play the sound
      tom1.play();
      break;

    case "a":
      //Play sound
      //Creates audio var and then Audio object and then specifies the name of the sound file
      var tom2 = new Audio("sounds/tom-2.mp3");
      //Calls play method to play the sound
      tom2.play();
      break;

    case "s":
      //Play sound
      //Creates audio var and then Audio object and then specifies the name of the sound file
      var tom3 = new Audio("sounds/tom-3.mp3");
      //Calls play method to play the sound
      tom3.play();
      break;

    case "d":
      //Play sound
      //Creates audio var and then Audio object and then specifies the name of the sound file
      var tom4 = new Audio("sounds/tom-4.mp3");
      //Calls play method to play the sound
      tom4.play();
      break;

    case "j":
      //Play sound
      //Creates audio var and then Audio object and then specifies the name of the sound file
      var snare = new Audio("sounds/snare.mp3");
      //Calls play method to play the sound
      snare.play();
      break;

    case "k":
      //Play sound
      //Creates audio var and then Audio object and then specifies the name of the sound file
      var crash = new Audio("sounds/crash.mp3");
      //Calls play method to play the sound
      crash.play();
      break;

    case "l":
      //Play sound
      //Creates audio var and then Audio object and then specifies the name of the sound file
      var kick = new Audio("sounds/kick-bass.mp3");
      //Calls play method to play the sound
      kick.play();
      break;

      //It is similar to else - it cover all the other scenarios not specified
    default:
      console.log(buttonInnerHTML);
  }

}