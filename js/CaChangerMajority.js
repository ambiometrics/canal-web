function CaChangerMajority(rule, cellWorld, rows, ratio)
{
  this.base = CaChanger;
  this.base(rule, cellWorld);
  this.rows = rows;
  this.ratio = ratio;
}

CaChangerMajority.prototype = new CaChanger;

CaChangerMajority.prototype.change = function()
{
  if ( this.cellWorld.totalCellArrays() == 0 ) return;
  var cellArray = this.getMajorityCellArray();
  var resultArray = new CellArray("0");
  for ( var i = 0 ; i < cellArray.cells.length ; ++i )
  {
    var index = cellArray.getVecinityDescriptorSimple(i);
    resultArray.setCell(i, this.rule.getState(index));
  }
  this.cellWorld.addLast(resultArray);
}

CaChangerMajority.prototype.getMajorityCellArray = function()
{
  var countArray = [];
  for ( var i = 0 ; i < this.rows ; ++i )
  {
    var cellArray = this.cellWorld.getCellArray(0 + i);
    for ( var j = 0 ; j < cellArray.cells.length ; ++j )
    {
      if ( countArray[j] ) countArray[j] += cellArray.getCell(j);
      else countArray[j] = cellArray.getCell(j);
    }
  }

  var cellState = "";
  var threshold = this.ratio * this.rows;
  for ( var j = 0 ; j < countArray.length ; ++j )
  {
    if ( countArray[j] >= threshold ) cellState += "1";
    else cellState += "0";
  }
  return new CellArray(cellState);
}
