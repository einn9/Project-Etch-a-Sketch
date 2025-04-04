const container = document.querySelector("#container");

// Upon clicking button, recreate grid squares based on user's number choice
const button = document.querySelector("button")
button.addEventListener("click", () => {
  container.innerHTML = "";
  let n = prompt("number of squares per side: ");
    
  // Set limit of input to a maximum of 100 to avoid performance issues
  if (n > 100) {
    const errorMessage = document.createElement("h1");
    errorMessage.textContent = "ERROR! PICK A NUMBER LOWER OR EQUAL TO 100."
    container.appendChild(errorMessage);
    return "ERROR";
  }

  container.textContent = "Etch-a-Sketch!"

  for (let i = 0; i < n; i++) {
    const sketchColumn = document.createElement("div");
    sketchColumn.classList.add("sketchColumn");
    container.appendChild(sketchColumn);
    
    for (let j = 0; j < n; j++) {
      const sketchRow = document.createElement("div");
      sketchRow.setAttribute("id", "sketchRowID");
      sketchColumn.appendChild(sketchRow);
    }
  }

  const allSketchRows = document.querySelectorAll("#sketchRowID");
  allSketchRows.forEach(sketchRow => {
    sketchRow.addEventListener('mouseover', () => {
      sketchRow.classList.add('active');
    });
  });
})

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
