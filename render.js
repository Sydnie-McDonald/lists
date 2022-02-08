import { dogs } from './dogs/dog-data.js';

export function renderCat(dogs) {
    const dogEl = document.createElement('div');
    const nameEl = document.createElement('nameEl');
    nameEl.textContent = dogs.name;


    dogEl.classList.add('cat-box');

    dogEl.append(nameEl);

    return dogEl;
}
