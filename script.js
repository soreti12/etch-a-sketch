const grid = document.getElementById('grid');
const buttonInput = document.getElementById('btn');
const inputs = document.getElementById('inputNum');


function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rows',rows);
    grid.style.setProperty('--grid-cols',cols);
    for (i=0; i<(rows*cols); i++) {
        let cell = document.createElement('div');
        // cell.innerText = "a"
        grid.appendChild(cell).className = 'divGrid'
    }
}
createGrid(16,16)
buttonInput.addEventListener('click', () => {
    grid.innerHTML = ''
    let values = inputs.value;
    createGrid(values,values)
})

