// import functions and grab DOM elements
import { dogs } from './dogs/dog-data.js';
import { renderDogs } from './render.js';

const main = document.querySelector('main');

for (let animal of animals) {
    const animalDiv = renderListItem(animal);
    main.append(animalDiv);
}


// let state
let list = [];

// set event listeners

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
