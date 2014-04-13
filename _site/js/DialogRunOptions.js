$(function() {

  $("#runOptionsDialog").dialog({
    autoOpen: false,
    width: 320,
    modal: false,
    buttons: {
      "Close": function() { $(this).dialog("close"); }
    },
      close: function() {}
    });

 $("#runOptionsBasicRunnerApplyButton")
    .button()
    .click(function() {
      caController.setBasicChanger();
    });

 $("#runOptionsMemoryMajorityRunnerApplyButton")
    .button()
    .click(function() {
      var ratio = parseFloat($("#runOptionsMemoryMajorityRunnerRatioSpinBox").val());
      var rows = parseInt($("#runOptionsMemoryMajorityRunnerRowsSpinBox").val());
      caController.setMajorityChanger(rows, ratio);
    });

  $("#runOptionsMemoryMajorityRunnerRatioSpinBox").spinner({ max: 1.0, min: 0.0, step: 0.01, numberFormat: "n" });   
  $("#runOptionsMemoryMajorityRunnerRowsSpinBox").spinner({ max: 50, min: 1, numberFormat: "d" });

 $("#runOptionsRangeRunnerApplyButton")
    .button()
    .click(function() {
      var radius = parseFloat($("#runOptionsRangeRunnerRangeSpinBox").val());
      caController.setRangeChanger(radius);
    });
  
  $("#runOptionsRangeRunnerRangeSpinBox").spinner({ max: 50, min: 1, numberFormat: "d" });

  $("#runOptionsAccordion").accordion({ heightStyle: "content" });
});