/*** VARIABLES ***/

var i = 0;
var base = BinaryString.repeat("0", 500);
var over = BinaryString.repeat("1", i);
var string = BinaryString.overwriteCenter(base, over);
caController.setCellSize(1);

/*** CODE ***/

caController.setInitialState(string);
caController.run(i, 500);
i += 1;
