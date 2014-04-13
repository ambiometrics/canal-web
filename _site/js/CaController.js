function CaController(container, cellSize)
{
  this.cellWorld = new CellWorld();
  this.rule = new Rule();
  this.caModel = new CaModel(this.rule, this.cellWorld);
  this.caView = new CaView(container, this.cellWorld);
  
  this.caView.cellSize = cellSize;
}

CaController.prototype.setBasicChanger = function() { this.caModel.setBasicChanger(); }

CaController.prototype.setMajorityChanger = function(rows, ratio) { this.caModel.setMajorityChanger(rows, ratio); }

CaController.prototype.setRangeChanger = function(radius) { this.caModel.setRangeChanger(radius); }

CaController.prototype.setCellSize = function (cellSize) { this.caView.setCellSize(cellSize); }

CaController.prototype.setInitialState = function (cellArray)
{
  this.cellWorld.clear();
  this.cellWorld.addLast(new CellArray(cellArray));
  this.caView.clearViewport();
  this.caView.updateViewport();
}

CaController.prototype.setRuleNumber = function(ruleNumber) { this.rule.setNumber(ruleNumber); }

CaController.prototype.run = function(ruleNumber, iterations)
{
  this.rule.setRuleNumber(ruleNumber);
  this.caModel.changeManyTimes(iterations);
  this.caView.updateViewport();
}

CaController.prototype.updateViewport = function()
{
  this.caView.updateViewport();
}
