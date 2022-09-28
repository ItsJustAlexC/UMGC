const gameContainer = document.getElementById("game");
let count = 0;
let pair = [];
let match = false;
let clickDisabled = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  //checks to see if the clicking is disabled (disabled when two cards are flipped over)
  if(clickDisabled){
    return;
  } 
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  event.target.style.backgroundColor = event.target.className;

  //pushes the target of the click event into a pair array for comparing
  pair.push(event.target);

  if(pair.length === 2 ){
    //disables clicking when two cards are flipped
    clickDisabled = true; 
    //checks if the two elements in the pair are referring to the same object(user can't click on same card and get a "match")
    if(pair[0] === pair[1]){
      match = false;
    } else if (pair[0].className === pair[1].className){ //checks if the two pairs gave the same color
      match = true;
    } else {
      match = false;
    }

    if(match){
      clickDisabled = false;
      console.log('Match');
      pair = [];
    } else { 
      setTimeout(() => { //resets the colored pairs is they don't match after 1 second
        pair[0].style.backgroundColor = '';
        pair[1].style.backgroundColor = '';
        pair = []
        clickDisabled = false;
      }, 1000)
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors)