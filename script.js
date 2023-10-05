const container = document.querySelector(".container");

// function createRow(input) {
//   const rowWrap = document.createElement("div");
//   rowWrap.setAttribute("class", "rowWrap");
//   container.appendChild(rowWrap);
//   for (let i = 0; i < input; i++) {
//     const cell = document.createElement("div");
//     cell.setAttribute("id", "cell");
//     rowWrap.appendChild(cell);
//   }
// }
function createRow(row) {
  const rowWrap = document.createElement("div");
  rowWrap.setAttribute("class", "rowWrap");
  container.appendChild(rowWrap);
  for (let i = 0; i < row; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("id", "cell");
    rowWrap.appendChild(cell);
  }
}

function createColumn(column) {
  for (let i = 1; i < column; i++) {
    createRow(16);
  }
}

createRow(16);
createColumn(16);
