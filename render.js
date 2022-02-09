import { dogs } from './dogs/dog-data.js';

export function renderDogs(dogs) {
    const div = document.createElement('div');
    div.classList.add('dog');
    div.style.top = dogs.top;
    div.style.left = dogs.left;

    div.append(dogs);
    return div;
}
