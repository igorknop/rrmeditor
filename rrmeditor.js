var srcElement = null;
document.addEventListener("DOMContentLoaded", function() {
  console.log("Starting...");
  console.log("Done.");
  var tilesOnPalete = document.querySelectorAll("#palete div");
  var rowsOnBand = document.querySelectorAll("#band div");
  tilesOnPalete.forEach(function(tile) {
    tile.setAttribute("draggable", true);
    tile.addEventListener("dragstart", dragTileStart, false);
    tile.addEventListener("dragend", dragTileEnd, false);
    tile.addEventListener("drop", dragDrop, false);
  });
  rowsOnBand.forEach(function(row) {
    row.setAttribute("draggable", true);
    row.addEventListener("dragenter", dragEnter, false);
    row.addEventListener("dragleave", dragLeave, false);
    row.addEventListener("dragover", dragOver, false);
    row.addEventListener("drop", dragDropInRow, false);
  });
});

function dragTileStart(e) {
  this.style.opacity = 0.4;
  srcElement = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragTileEnd(e) {
  document.querySelectorAll("#palete div").forEach(function(tile) {
    tile.style.opacity = 1;
  });
  srcElement = null;
}

function dragDrop(e) {
  console.log("Element dropped...");
  /*/if (this.stopPropagation) this.stopPropagation();
  if(srcElement !== this){
    this.innerHTML =  e.dataTransfer.getData("text/html");
  }
*/  return false;
}

function dragDropInRow(e) {
  console.log("Element dropped in row...");
  if (this.stopPropagation) this.stopPropagation();
  if(srcElement !== this){
    var n = document.createElement("div");
    n.innerHTML =  e.dataTransfer.getData("text/html");
    n.classList = srcElement.classList;
    this.appendChild(n);
  }
}

dragEnter = function(e) {
  this.classList.add('over');
}
dragLeave = function(e) {
  this.classList.remove('over');
}
dragOver = function(e) {
  if (e.preventDefault) e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}
