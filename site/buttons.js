let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  alert('You clicked the green button');
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  alert('You clicked the red button');
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
      const newDiv = document.createElement ("div");
      const newContent = document.createTextNode ("How far can you go?");
      newDiv.appendChild(newContent);
      const currentDiv = document.getElementById ("div1");
      document.body.insertBefore(newDiv, currentDiv);
}
