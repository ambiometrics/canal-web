function CaChangerRange(rule, cellWorld, radius)
{
  this.base = CaChanger;
  this.base(rule, cellWorld);
  this.radius = radius;
}

CaChangerRange.prototype = new CaChanger;

CaChangerRange.prototype.change = function()
{
  if ( this.cellWorld.totalCellArrays() == 0 ) return;
  var cellArray = this.cellWorld.getCellArray(0);
  var resultArray = new CellArray("0");
  for ( var i = 0 ; i < cellArray.cells.length ; ++i )
  {
    var index = cellArray.getVecinityDescriptor(i, this.radius);
    resultArray.setCell(i, this.rule.getState(index));
  }
  this.cellWorld.addLast(resultArray);
}
