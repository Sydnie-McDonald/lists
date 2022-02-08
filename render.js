import { dogs } from './dogs/dog-data.js';

export function renderDogs(dogs) {
    const div = document.createElement('div');
    div.classList.add('dog');
    div.style.top = dogs.top;
    div.style.left = dogs.left;

    const breedSpan = document.createElement('span');
    breedSpan.textContent = dogs.breed;
    breedSpan.classList.add('breed');

    a.append(breedSpan, span);
    div.append(a);
    return div;
}
