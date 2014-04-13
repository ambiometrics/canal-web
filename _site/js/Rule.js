function Rule(ruleNumber)
{
  this.ruleNumber = ruleNumber;
}

Rule.prototype.getRuleString = function() { return this.ruleNumber.toString(2); }

Rule.prototype.getState = function(input)
{
  var inputMask = 1 << input;
  if ( this.ruleNumber & inputMask ) return 1;
  else return 0;
}

Rule.prototype.setRuleNumber = function(ruleNumber) { this.ruleNumber = ruleNumber; }

Rule.prototype.setRuleString = function(ruleString) { this.ruleString = parseInt(ruleString, 2); }

Rule.prototype.setState = function(input, result)
{
  var inputMask = 1 << input;
  if ( result ) this.ruleNumber |= inputMask;
  else this.ruleNumber &= (~inputMask);
}
