/**
 * contains game logic and functions
 * for gameplay
 * @author Emily Greetis
 *
 */

function onLoad(){
  active('blue');
  randomColor();
}

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
   * Calls a random number from
   * 0 to 3
   * @return int
   */
  function randomizer(){
    return Math.floor(Math.random() * 4);
  }

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
  }
