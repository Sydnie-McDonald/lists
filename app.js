// import functions and grab DOM elements
import { dogs } from './dogs/dog-data.js';
import { renderDog } from './render.js';

const renderListButton = document.getElementById('list-button');
const listsContainer = document.getElementById('lists-container');

// set event listeners
renderListButton.addEventListener('click', () => {
  
  for (let dog of dogs) {
    const dogsDiv = renderDog(dog);
    listsContainer.append(dogsDiv);
}
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

