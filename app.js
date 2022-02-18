// import functions and grab DOM elements
import { dogs } from './dogs/dog-data.js';
import { cars } from './cars/cars-data.js';

import {
    renderDog,
    renderCars,
} from './render.js';

const renderDogListButton = document.getElementById('dog-list-button');
const listsContainer = document.getElementById('dog-lists-container');

const renderCarListButton = document.getElementById('car-list-button');
const carListsContainer = document.getElementById('cars-lists-container');


// set event listeners
renderDogListButton.addEventListener('click', () => {
    for (let dog of dogs) {
        const dogsDiv = renderDog(dog);
        listsContainer.append(dogsDiv);
    }
});
// get user input
// use user input to update state 
// update DOM to reflect the new state
renderCarListButton.addEventListener('click', () => {
    for (let car of cars) {
        const carsDiv = renderCars(car);
        carListsContainer.append(carsDiv);
    }
});

