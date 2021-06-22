/*let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  alert('You clicked the green button');
  var onclick: (this: Window, ev: MouseEvent) => document.getElementById('mouse-click').play()
});
*/
/* Trying to add sound on click to the green button

var greenButton = document.getElementbyId("green-button");
greenButton.addEventListener('click',playSound);

var sound = new Audio ();
sound.src = "Mouse-click.mp3";
sound.oncamplaythough = function(){
     sound.readyToRock = ture;
};
sound.onerror = function (){
      console.log("Sound file Mouse-click.mp3 has failed to load")
};

var audio = new Audio("Mouse-click.mp3");
let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  audio.play();
}*/

  function noBorder(){
  var element = document.getElementById("green-button");
  element.classList.remove("border");
    }






let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  alert('You clicked the red button');
/*redButton.addEventListener('mousedown', function(){
    classList.add('light-up-red');
redButton.addEventListener('mouseup', function(){
    classList.remove('light-up-red');*/
});



let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  alert('You clicked the yellow button');
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  alert('You clicked the blue button');
});
