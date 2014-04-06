function CaModel(rule, cellWorld)
{
  this.rule = rule;
  this.cellWorld = cellWorld;
  this.changer = null;
  this.setBasicChanger();
}

CaModel.prototype.changeManyTimes = function(times)
{
  for ( var i = 0 ; i < times ; ++i )
    this.changer.change();
}

CaModel.prototype.setBasicChanger = function() { this.changer = new CaChangerBasic(this.rule, this.cellWorld); }

CaModel.prototype.setMajorityChanger = function(rows, ratio) { this.changer = new CaChangerMajority(this.rule, this.cellWorld, rows, ratio); }

CaModel.prototype.setRangeChanger = function(radius) { this.changer = new CaChangerRange(this.rule, this.cellWorld, radius); }