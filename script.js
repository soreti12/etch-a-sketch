const grid = document.getElementById('grid');
const buttonInput = document.getElementById('btn');
const inputs = document.getElementById('inputNum');
const hexa = document.getElementById('hexColor')


let cell;
let  createGrid = (rows, cols) => {
    grid.style.setProperty('--grid-rows',rows);
    grid.style.setProperty('--grid-cols',cols);
    for (i=0; i<(rows*cols); i++) {
         cell = document.createElement('div');
        grid.appendChild(cell).className = `divGrid${i}` 
    }
}
createGrid(16,16)


grid.addEventListener('click', (e) => {
    e.target.style.backgroundColor = `${hexa.value}`

})

//button event listener 
buttonInput.addEventListener('click', () => {    grid.innerHTML = ''
    let values = inputs.value;
    createGrid(values,values)
})