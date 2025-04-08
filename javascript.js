grid= [];

const gridSize = 16;

const gridContainer = document.getElementById("grid-container");

for (let y = 0; y < gridSize; y++) {
    grid[y] = [];
    for (let x = 0; x < gridSize; x++) {   
        grid[y][x] = document.createElement("div");
        //grid[y][x].classList.add('grid-square');
        
        grid[y][x].textContent = `${y*gridSize+x}`;
        gridContainer.appendChild(grid[y][x]);
        gridContainer.lastChild.setAttribute("class", "grid-square")
    }
}