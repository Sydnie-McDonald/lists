// import functions and grab DOM elements
import { dogs } from './dogs/dog-data.js';
import { renderDogs } from './render.js';

const renderListButton = document.getElementById('list-button');
// let state
let list = document.getElementById("lists");

// set event listeners
renderListButton.addEventListener('click', () => {
  for (let dog of dogs) {
    const dogsDiv = renderDogs(dogs);
    list.append(dogsDiv);
}
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

