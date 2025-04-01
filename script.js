const container = document.querySelector("#container");


for (let i = 0; i < 16; i++) {
    const sketchRow = document.createElement("div");
    sketchRow.classList.add("sketchRow");
    container.appendChild(sketchRow);

    for (let j = 0; j < 16; j++) {
        const sketchColumn = document.createElement("div");
        sketchColumn.classList.add("sketchColumn");
        sketchColumn.textContent = "A";
        sketchRow.appendChild(sketchColumn);
    }
}
