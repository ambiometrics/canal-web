$(function() {

  $("#advancedRunDialog").dialog({
    autoOpen: false,
    width: 400,
    modal: false,
    buttons: {
      "Run": function() {
        var init = $("#advancedRunInitText").val();
        var code = $("#advancedRunCodeText").val();
        var period = parseInt($("#advancedRunPeriodSpinBox").val());
        var iterations = parseInt($("#advancedRunIterationsSpinBox").val());
        AnimationManager.setAnimation(init, code, period, iterations)
        
      },
      "Stop": function() { AnimationManager.clearAnimation(); },
      "Close": function() { $(this).dialog("close"); }
    },
    close: function() {}
  });

  $("#advancedRunPeriodSpinBox").spinner({ min: 1, numberFormat: "d" });
  $("#advancedRunIterationsSpinBox").spinner({ min: 0, numberFormat: "d" });    
});