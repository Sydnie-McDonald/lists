import { dogs } from './dogs/dog-data.js';

export function renderDog(dog) {
    const div = document.createElement('div');
    div.classList.add('dog');



    div.append(dogs);
    return div;
}
// finish render function and grab dog id , name, breed, color, and assign the elements