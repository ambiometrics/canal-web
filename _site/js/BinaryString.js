function BinaryString() {}

BinaryString.overwriteCenter = function(string, overwriteString)
{
  var lengthHalf = string.length / 2;
  var lengthHalfString = overwriteString.length / 2;
  return string.substring(0, lengthHalf - lengthHalfString) + overwriteString + string.substring(lengthHalf + lengthHalfString, string.length);
}

BinaryString.overwriteLeft = function(string, overwriteString)
{
  return overwriteString + string.substring(overwriteString.length, string.length);
}

BinaryString.overwriteRight = function(string, overwriteString)
{
  return string.substring(0, string.length - overwriteString.length) + overwriteString;
}

BinaryString.random = function(length)
{
  var newString = "";
  for ( var i = 0 ; i < length ; i++ )
    newString += Math.round(Math.random());
  return newString;
}

BinaryString.ratio = function(ratio, length)
{
  var ones = ratio * length;
  var zeros = length - ones;

  var newString = "";
  for ( var i = 0 ; i < length ; i++ )
  {
    if ( ((zeros > 0) && (Math.random() > ratio)) || (ones == 0) )
    {
      newString += "0";
      --zeros;
    }
    else
    {
      newString += "1";
      --ones;
    }
  }
  return newString;
}

BinaryString.repeat = function(string, times)
{
  var newString = "";
  for ( var i = 0 ; i < times ; i++ ) newString += string;
  return newString;
}

BinaryString.replace = function(string, patternZero, patternOne)
{
  var newString = "";
  for ( var i = 0 ; i < string.length ; ++i )
    newString += (string.charAt(i) == '0') ? patternZero : patternOne;
  return newString;
}

BinaryString.scale = function(string, times)
{
  var patternZero = "";
  var patternOne = "";
  for ( var i = 0 ; i < times ; i++ )
  {
    patternZero += '0';
    patternOne  += '1';
  }
  return BinaryString.replace(string, patternZero, patternOne);
}
