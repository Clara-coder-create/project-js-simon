let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  alert('You clicked the green button');
});

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

function addElement () {
      var newDiv = document.createElement ("div");
      newDiv.innerHTML = "<p> How far can you go? </p>"
      var currentDiv = document.getElementById ("div1");
      document.body.insertBefore(newDiv, currentDiv);
}

function onLoad(){
  addElement();
}
