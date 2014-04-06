function CaChangerBasic(rule, cellWorld)
{
  this.base = CaChanger;
  this.base(rule, cellWorld);
}

CaChangerBasic.prototype = new CaChanger;

CaChangerBasic.prototype.change = function()
{
  if ( this.cellWorld.totalCellArrays() == 0 ) return;
  var cellArray = this.cellWorld.getCellArray(0);
  var resultArray = new CellArray("0");
  for ( var i = 0 ; i < cellArray.cells.length ; ++i )
  {
    var index = cellArray.getVecinityDescriptorSimple(i);
    resultArray.setCell(i, this.rule.getState(index));
  }
  this.cellWorld.addLast(resultArray);
}
