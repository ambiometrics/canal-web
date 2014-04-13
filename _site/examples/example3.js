/*** VARIABLES ***/

var i = 1;
var j = 1;

/*** CODE ***/

var base = BinaryString.repeat("0", 250);
var over = BinaryString.repeat("1", i);
var string = BinaryString.overwriteCenter(base, over);
caController.setInitialState(string);
caController.run(j,100);
i += 2;
if(i >= 20)
{
  i = 1;
  j+
