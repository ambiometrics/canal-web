function CaView(container, cellWorld)
{
  this.container = container;
  this.cellSize = 3;
  this.cellWorld = cellWorld;
  this.drawnRows = 0;
}

CaView.prototype.clearViewport = function()
{
  while ( this.container.firstChild )
    this.container.removeChild(this.container.firstChild);
  this.drawnRows = 0;
}

CaView.prototype.drawCellArray = function(x, y, cellArray, fillColor, context)
{
  var posX = x;
  var posY = y;

  for ( var i = 0 ; i < cellArray.cells.length ; ++i )
  {
    if ( cellArray.cells[i] ) context.fillStyle = fillColor;
    else context.fillStyle = "white";
    context.fillRect(posX, posY, this.cellSize, this.cellSize);
    posX += this.cellSize;
  }
}

CaView.getStateResume = function(state)
{
  var cellArray = new CellArray(state);
  var report = cellArray.getReport();
  var reportString = "";
  reportString += "Ones  : [" + report.ones  + "] ";
  reportString += "Zeros : [" + report.zeros + "] ";
  reportString += "Length: [" + report.total + "] ";
  for ( var i = 0 ; i < 8 ; ++i )
    reportString += (i + 1) + ": [" +  report.descriptors[i] + "] ";
  return reportString;
}

CaView.prototype.setCellSize = function(cellSize)
{
  this.cellSize = cellSize;
  this.clearViewport();
  this.updateViewport();
}

CaView.prototype.updateViewport = function()
{
  var canvas = document.createElement('canvas');
  canvas.className  = "canvasScene";
  canvas.width  = this.cellWorld.getMaxCells() * this.cellSize;
  canvas.height = (this.cellWorld.totalCellArrays() - this.drawnRows) * this.cellSize;
  
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  var posY = 0;
  for ( var currentRow = this.drawnRows ; currentRow < this.cellWorld.cellArrays.length ; ++currentRow )
  {
    this.drawCellArray(0, posY, this.cellWorld.cellArrays[currentRow], "black", context);
    posY += this.cellSize;
  }
  
  this.drawnRows = this.cellWorld.cellArrays.length;
  this.container.appendChild(canvas);
  this.container.appendChild(document.createElement("br"));
  this.container.scrollTop = this.container.scrollHeight;
}
