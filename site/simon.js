/**
 * contains game logic and functions
 * for gameplay
 * @author Emily Greetis
 *
 */

<<<<<<< HEAD
//basic setup stuff

=======



var i = 0; //placeholder for what level the player is on
function onLoad(){
  var sequence = [];
  //active('blue');
 // randomColor();
 sequence = colorSequencer();
 activate(sequence, 0);
var updateButton = document.querySelector("button");
updateButton.addEventListener('click', (event) => {
update(sequence, i + 1, i);
i++;
});
}
>>>>>>> 3ddb5d190f236469747e0a96ef2a050ac894073b
  /**
   * Calls a random number from
   * 0 to 3
   * @return int
   */
  function randomizer(){
    return Math.floor(Math.random() * 4);
  }

  /**
   * picks a random color
   * @reutrn String
   */
  function randomColor(){
    var num = randomizer(); // int
    var color = null; //string
    console.log(num);
    if (num === 0){
      color = 'green';
    }
    if(num === 1){
      color = 'red';
    }
    if(num === 2){
      color = 'yellow';
    }
    if(num === 3){
      color = 'blue';
    }
    console.log(color);
    return color;
  }

  /**
   * colorSequencer
   * @return string array of color names
   */
  function colorSequencer(){
    var sequence = []; // where color pattern is stored
    for (let i = 0; i < 10; i++){
      sequence[i] = randomColor();
    }
    var x = sequence.toString();
    console.log(x);
    return sequence;
  }
////////////////////////////////////////// control functions
/**
 * @param String color name
 * activates specific button
 */
function active(color){
  const button = 'simon-button.';
  var colorButton = button.concat(color); //original class name
  var colorLit = color.concat('-lit'); //updated class name
  console.log(colorButton);
  console.log(colorLit);
  var currentButton = document.querySelector('.'+color);
  currentButton.classList.add(colorLit);
  }

 /**
 * @param String[] colorSequence is
 * pattern of colors created by colorSequencer
 * @param int idx is index in sequence array,
 * and what level the player is on
 *
 * activates color at specific sequence
 */
function activate(colorSequence, idx){
  var color = colorSequence[idx];
  console.log(color);
  active(color);
}

/**
 * @param String color name
 * resets css class of specified color
 */

 function reset(color){
  const button = 'simon-button.';
  var colorButton = button.concat(color); //original class name
  var colorLit = color.concat('-lit'); //updated class name
  console.log(colorButton);
  console.log(colorLit);
  var currentButton = document.querySelector('.'+color);
  currentButton.classList.replace(colorLit,colorButton);
}

/**
 * @param String[] colorSequence is
 * pattern of colors created by colorSequencer
 * @param int idx index of next element in pattern
 * @param int oldIdx index of element that is currently activated
 * updates what is currently activated
 */
function update(colorSequence, idx, oldIdx){
  if(idx >= colorSequence.length){
    return; //implement some kind of you win type thing or a boolean to save win
  }
  var oldColor = colorSequence[oldIdx];
  reset(oldColor);
  var newColor = colorSequence[idx];
  console.log(newColor);
  activate(colorSequence, idx);
}

function clearAll(){
  reset("green");
  reset("red");
  reset("yellow");
  reset("blue");
}

/**
 * @param boolean userInput
 * the last button the user hit
 * @param String[] colorSequence
 * correct sequence of colors
 * @param int level
 * @return boolean correct
 * returns true if user got
 * this level correct
 */
function compare(userInput, colorSequence, level){
  if (userInput === colorSequence[level]){
    return true;
  } else {
    return false;
  }
}

function currentButton(){
  if (redOn === true){
    return "red";
  }
  if (yellowOn === true){
    return "yellow";
  }
  if (greenOn === true){
    return "green";
  }
  if (blueOn === true){
    return "blue";
  } else {
    return null;
  }
}

/**
 * @param String[] sequence
 * @param int idx current level
 * resets previous calls
 * activates current button for 1 sec
 */
function callCurrent(sequence, idx){
  const timer = setInterval(function(){
    activate(sequence, idx++);
    clearAll();
  }, 1000);
  if (idx >= sequence.length){
    clearInterval(timer);
  }
}

/////////// gameplay

var level = 0; //placeholder for what level the player is on
var sequence = []; //placeholder for color sequence

function onLoad(){
var clicked = currentButton();
console.log(clicked);
}

function newGame(){
clearAll();
sequence = colorSequencer();
callCurrent(sequence, level);
}
