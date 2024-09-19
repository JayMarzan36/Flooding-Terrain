

let data;

const showButton = document.getElementById("show-btn");
showButton.addEventListener("click", function() {generateGrid(data, waterLevel)});

const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", function() {generateGrid(data, 0)});


let options = document.getElementById("terrain-list");
options.addEventListener("change", function() {
    console.log(options.value);
    if (options.value !== undefined) {
        if (options.value === "test1") data = test1;
        if (options.value === "beach") data = beach;
        if (options.value === "island") data = island;
        if (options.value === "big-island") data = bigIsland;
        generateGrid(data, 0);
    }
});

const inputWaterLevel = document.getElementById("water-level");
let waterLevel = 0;
inputWaterLevel.addEventListener("change", function() {
    console.log(inputWaterLevel.value);
    waterLevel = parseInt(inputWaterLevel.value);
});


function getColor(value) {
    for (i of colorData) {
        if (i.value === value) {
            return i.color;
        }
    }
}



function colorGrid(cell, value, waterLevel) {
    if (value > waterLevel) {
        cell.style.backgroundColor = getColor(value);
    } else {
        cell.style.backgroundColor = "#0015ff";
    }
}


function generateGrid(data, waterLevel) {
    const gridElement = document.getElementById("grid");
    gridElement.innerHTML = '';
    gridElement.style.gridTemplateColumns = `repeat(${data[0].length}, 50px)`;

    for (i of data) {
        for (j of i) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            
            colorGrid(cell, j.value, waterLevel);

            cell.textContent = j.value;

            gridElement.appendChild(cell);
        }
    }
    console.log(gridElement);
}