function CellArray(cellsString)
{
  this.cells = [];
  this.setCells(cellsString);
}

CellArray.prototype.clear = function() { if ( this.cells.length > 0 ) this.cells = []; }

CellArray.prototype.getCell = function(position)
{
  var normalizedPosition = this.getNormalizedPosition(position);
  return this.cells[normalizedPosition];
}

CellArray.prototype.getNormalizedPosition = function(position)
{
  var normalizedPosition = position % this.cells.length;
  if ( normalizedPosition < 0 ) normalizedPosition = this.cells.length + normalizedPosition;
  return normalizedPosition;
}

CellArray.prototype.getReport = function()
{
  var report =  new Object();
  report.ones = 0;
  report.zeros = 0;
  report.total = this.cells.length;
  report.descriptors = [0, 0, 0, 0, 0, 0 ,0 ,0];
  for ( var i = 0 ; i < this.cells.length ; ++i )
  {
    if ( this.cells[i] == '0' ) report.zeros++;
    else report.ones++;
    report.descriptors[this.getVecinityDescriptorSimple(i)]++;
  }
  return report;
}

CellArray.prototype.getVecinityDescriptor = function(position, range)
{
  var descriptor = 0;
  var shift = range * 2 + 1;
  for ( var i = -range ; i <= range ; ++i , --shift )
    descriptor += this.getCell(position + i) * (1 << shift);
  return descriptor;
}

CellArray.prototype.getVecinityDescriptorSimple = function(position)
{
  var descriptor = 0;
  descriptor += this.getCell(position - 1) * (1 << 2);
  descriptor += this.getCell(position    ) * (1 << 1);
  descriptor += this.getCell(position + 1) * (1 << 0);
  return descriptor;
}

CellArray.prototype.setCell = function(position, cellState) { return this.cells[position] = cellState; }

CellArray.prototype.setCells = function(cellsString)
{
  for ( var i = 0 ; i < cellsString.length ; ++i )
    this.cells[i] = (cellsString.charAt(i) == '1') ? 1 : 0;
}