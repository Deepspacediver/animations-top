// const heading = document.getElementById('watchme');
//
// function listener(event) {
//     const li = document.createElement('li');
//     switch (event.type) {
//         case 'animationstart': {
//             li.textContent = `Started: elapsed time is ${event.elapsedTime}`;
//             break;
//         }
//         case 'animationend': {
//             li.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
//             break;
//         }
//
//         case 'animationiteration' : {
//             li.textContent = `New loop start at time ${event.elapsedTime}`;
//             break;
//         }
//     }
//     document.getElementById('output').appendChild(li);
// }
//
// heading.addEventListener('animationstart', listener, false);
// heading.addEventListener('animationend', listener, false);
// heading.addEventListener('animationiteration', listener, false);
//
// heading.className = 'heading-move';
const divElement = document.querySelector('div');


function clickEvent() {
    console.log(divElement.classList);
    if (divElement.classList.contains('fade-in')) {
        divElement.classList.remove('fade-in');
        divElement.classList.add('fade-out');
        return;
    }
    divElement.classList.remove('fade-out');
    divElement.classList.add('fade-in');
}

document.querySelector('html').addEventListener('click', clickEvent);
