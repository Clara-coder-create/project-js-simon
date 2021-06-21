/**
 * contains game logic and functions
 * for gameplay
 * @author Emily Greetis
 *
 */

function onLoad(){
  //active('blue');
 // randomColor();
 var sequence = [];
 sequence = colorSequencer();
 activate(sequence, 0);

}


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
//////////////////////////////////////////
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
