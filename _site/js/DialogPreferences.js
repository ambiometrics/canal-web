$(function() {

  $("#preferencesDialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      "Apply": function() {
        var cellSize = parseInt($("#preferencesCellSizeSpinBox").val());
        caController.setCellSize(cellSize);
      },
      "Close": function() { $(this).dialog("close"); }
    },
    close: function() {}
  });

  $("#preferencesCellSizeSpinBox").spinner({ max: 50, min: 1, numberFormat: "d" }); 
});