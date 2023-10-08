const container = document.querySelector(".container");

function createRow(row) {
  const rowWrap = document.createElement("div");
  rowWrap.setAttribute("class", "rowWrap");
  container.appendChild(rowWrap);
  for (let i = 0; i < row; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    //disables dragging that caused some unwanted bugs
    cell.setAttribute("ondragstart", "return false");
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

let mouseDown = false;
let mouseUp = true;

document.body.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("cell")) {
    event.target.classList.add("black");
    event.target.classList.remove("white");
  }
  mouseDown = !mouseDown; // toggle mouseDown true/false;
});

document.body.addEventListener("mousemove", function (event) {
  if (event.target.classList.contains("cell")) {
    if (mouseDown) {
      event.target.classList.add("black");
      event.target.classList.remove("white");
    }
  }
});

document.body.addEventListener("mouseup", (event) => {
  mouseDown = !mouseDown; // toggle mouseDown true/false;
});

const getCells = document.querySelectorAll(".cell");

function cell() {
  for (let i = 0; i < getCells.length; i++) {
    // getCells[i].style.backgroundColor = "white";
    getCells[i].classList.add("white");
    getCells[i].classList.remove("black");
  }
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", function (event) {
  cell();
});
