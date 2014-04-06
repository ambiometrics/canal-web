/*** VARIABLES ***/

var i = 1;
var flag = true;
var base = BinaryString.repeat("0", 500);
caController.setCellSize(1);

/*** CODE ***/

var over = BinaryString.repeat("1", i);
var string = BinaryString.overwriteCenter(base, over);
caController.setInitialState(string);
for ( var s = 0 ; s < 500 ; ++s )
{
  if ( flag ) caController.run(110 ,1);
  else caController.run(90, 1);
  flag = !flag;
}
i += 2;