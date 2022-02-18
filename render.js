import { dogs } from './dogs/dog-data.js';
import { cars } from './cars/cars-data.js';

export function renderDog(dog) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const weightEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const colorAndweightEl = document.createElement('div');

    div.classList.add('lists-container');

    nameEl.textContent = dog.name;
    nameEl.classList.add('name');

    breedEl.textContent = dog.breed;
    breedEl.classList.add('breed');

    weightEl.textContent = dog.weight;
    weightEl.classList.add('weight');

    colorEl.textContent = dog.color;
    colorEl.classList.add('color');

    colorAndweightEl.classList.add('color-and-weight');

    colorAndweightEl.append(colorEl, weightEl);


    div.append(nameEl, breedEl, colorAndweightEl);

    return div;
}
// finish render function and grab dog id , name, breed, color, and assign the elements
export function renderCars(car) {
    const div = document.createElement('div');
    const brandEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const colorAndyearEl = document.createElement('div');

    div.classList.add('car-lists-container');

    brandEl.textContent = car.brand;
    brandEl.classList.add('brand');

    modelEl.textContent = car.model;
    modelEl.classList.add('model');

    yearEl.textContent = car.year;
    yearEl.classList.add('year');

    colorEl.textContent = car.color;
    colorEl.classList.add('color');

    colorAndyearEl.classList.add('color-and-year');

    colorAndyearEl.append(colorEl, yearEl);


    div.append(brandEl, modelEl, colorAndyearEl);

    return div;
}