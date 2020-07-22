/*** FIRST OPTION - FIRST BUTTON ONLY ***/

//Selects the first button on the HTML file and pass the first parameter "click" then add the second parameter (listener) "handleClick"
// document.querySelector("button").addEventListener("click", handleClick);
//
// //Do something when a button gets clicked
// function handleClick() {
//   alert("I got clicked");
// }

/*** SECOND OPTION - ALL BUTTONS WITH A LOOP ***/

//Get the number of buttons by selecting all the buttons with a class of drum and then get is length
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  //Looking throgh the document and selecting all selectors with class drum and select each element from the array and add an event listener
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clickec YEP");
  });
}