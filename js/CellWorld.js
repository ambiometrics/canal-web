function CellWorld()
{
  this.cellArrays = [];
  this.maxCells = 0;
}

CellWorld.prototype.addLast = function(cellArray)
{
  this.cellArrays.push(cellArray);
  if ( cellArray.cells.length > this.maxCells ) this.maxCells = cellArray.cells.length;
}

CellWorld.prototype.clear = function()
{
  if ( this.cellArrays.length > 0 ) { this.cellArrays = []; this.maxCells = 0; }
}

CellWorld.prototype.getCellArray = function(index)
{
  var normalizedIndex = this.getNormalizedIndex(index);
  if ( this.cellArrays.length <= normalizedIndex ) return new CellArray("0");
  return this.cellArrays[normalizedIndex];
}

CellWorld.prototype.getMaxCells = function() { return this.maxCells; }

CellWorld.prototype.getNormalizedIndex = function(index)
{
  var normalizedIndex = (this.cellArrays.length - 1) - index;
  if ( normalizedIndex < 0 ) normalizedIndex = 0;
  return normalizedIndex;
}

CellWorld.prototype.totalCellArrays = function() { return this.cellArrays.length; }
