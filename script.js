
const container = document.querySelector('#container');

for (let i = 0; i < 2048; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.addEventListener('mouseenter', (e) => {
        div.style.backgroundColor = 'rgb(60, 60, 60)';
    })
    container.appendChild(div);
}

const buttons = document.querySelector('#buttons');
const colorButton = document.querySelector('#color-button');
const resetButton = document.querySelector('#reset-button');
const grid = document.querySelectorAll('.grid');

resetButton.addEventListener('click', (e) => {
    grid.forEach((grid) => {
        grid.style.backgroundColor = 'rgb(202, 201, 201)';
    })
})


