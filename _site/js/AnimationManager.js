function AnimationManager() {};

AnimationManager.currentAnimation = null;

AnimationManager.counter = 0;

AnimationManager.maxCounter = 0;

AnimationManager.clearAnimation = function()
{
  if ( AnimationManager.currentAnimation !== null )
  {
    clearInterval(AnimationManager.currentAnimation);
    AnimationManager.currentAnimation = null;
  }
}

AnimationManager.setAnimation = function(scriptInvariant, scriptText, scriptPeriod, maxCounter)
{
  AnimationManager.counter = 0;
  AnimationManager.maxCounter = maxCounter;
  AnimationManager.clearAnimation();
  eval(scriptInvariant);
  AnimationManager.currentAnimation = setInterval(
    function()
    {
      eval(scriptText);
      AnimationManager.counter++;
      if ( AnimationManager.counter > AnimationManager.maxCounter )
        AnimationManager.clearAnimation();
    }, scriptPeriod);
}
