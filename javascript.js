let grid = [];
let gridSize = 16;
const maxWidthHeight = 600

let mouseDown = false;

const gridContainer = document.getElementById("grid-container");

gridContainer.addEventListener("mousedown", () => mouseDown = true);
gridContainer.addEventListener("mouseup", () => mouseDown = false);



function changeGridSquareColor(event){
    if(mouseDown){
        gridToChange = event.target.classList[1];
        console.log(gridToChange);
        
        let y = Math.floor(gridToChange / gridSize);
        let x = gridToChange - y * gridSize ;
    
        grid[y][x].style.setProperty("background", "black");
    }

}

function createGrid(gridSize){
    gridContainer.textContent = '';
    gridContainer.style.setProperty("width", `${maxWidthHeight}px`)

    for (let y = 0; y < gridSize; y++) {
        grid[y] = [];
        for (let x = 0; x < gridSize; x++) {   
            grid[y][x] = document.createElement("div");        
            //grid[y][x].textContent = `${y*gridSize+x}`;
            grid[y][x].classList.add("grid-square")
            grid[y][x].classList.add(y*gridSize+x)

            grid[y][x].style.setProperty("min-height", `${maxWidthHeight/gridSize}px`)
            grid[y][x].style.setProperty("min-width", `${maxWidthHeight/gridSize}px`)

            grid[y][x].addEventListener('mousemove', changeGridSquareColor )

            gridContainer.appendChild(grid[y][x]);
        }
    }
}

createGrid(16);

const setupGridButton = document.getElementById("setup-grid-button");

setupGridButton.addEventListener("click", openSetupPopup);

const clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click", () => createGrid(gridSize));

function openSetupPopup(){
    
    let tempGridSize = Number(window.prompt("Enter grid size", gridSize));

    //CHECK IF VALID (1-32);
    if(tempGridSize <= 64 && tempGridSize > 0){
        gridSize = tempGridSize;
        createGrid(gridSize);
    }
    //REprompt user
}

