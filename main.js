function initGrid() {
    // get grid and clear it
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    console.log("test")

    for (var i = 0; i < 20; i++) {
        // create a column [div] for storing cells
        var column = document.createElement("div");
        column.className = "column";

        // fill column with cells
        for (var j = 0; j < 20; j++) {
            var cell = document.createElement("div");

            // set colors for each cell
            if( (i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0) ) cell.className = 'cell';
            else if( (i % 2 == 0 && j % 2 != 0) || (i % 2 != 0 && j % 2 == 0) ) cell.className = 'cell cell-light';

            // add cell to column
            column.appendChild(cell);
        }
        grid.appendChild(column);
    }
}