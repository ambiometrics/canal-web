/*** VARIABLES ***/

var i = 1;
var base = BinaryString.repeat("0", 250);

/*** CODE ***/

var over = BinaryString.repeat("1", i);
var string = BinaryString.overwriteCenter(base, over);
caController.setInitialState(string);
caController.run(90,100);
i += 2;