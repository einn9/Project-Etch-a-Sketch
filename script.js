const container = document.querySelector("#container");

// Create sixteen columns, and for each column, create sixteen rows inside it
for (let i = 0; i < 16; i++) {
    const sketchColumn = document.createElement("div");
    sketchColumn.classList.add("sketchColumn");
    container.appendChild(sketchColumn);

    for (let j = 0; j < 16; j++) {
        const sketchRow = document.createElement("div");
        sketchRow.setAttribute("id", "sketchRowID");
        sketchColumn.appendChild(sketchRow);
    }
}

// Add a class when hovering over a grid item
const allSketchRows = document.querySelectorAll("#sketchRowID");
allSketchRows.forEach(sketchRow => {
  sketchRow.addEventListener('mouseover', () => {
    sketchRow.classList.add('active');
  });
});