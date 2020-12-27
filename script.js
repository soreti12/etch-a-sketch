const grid = document.getElementById('grid');
const buttonInput = document.getElementById('btn');
const inputs = document.getElementById('inputNum');
const hexa = document.getElementById('hexColor')

//creates grids
function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rows',rows);
    grid.style.setProperty('--grid-cols',cols);
    for (i=0; i<(rows*cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'divGrid'
        
    }
}
createGrid(16,16)


//button event listener 
buttonInput.addEventListener('click', () => {
    grid.innerHTML = ''
    let values = inputs.value;
    createGrid(values,values)
})



function iterate() {
    const c = Array.from(document.getElementById('grid').childNodes);
    let p = 0
    var g  = [...c]
    if (g) {
        for(let i=0; i<=g.length-1; i++) {
            g[i].addEventListener('mouseover', () => {
                p+=1;
                console.log(p);
                
            })
        }
    }
    
}
iterate()