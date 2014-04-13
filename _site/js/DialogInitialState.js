$(function() {
  $("#initialStateText").val(BinaryString.random(250));

  $("#initialStateDialog").dialog({
    autoOpen: false,
    width: 350,
    modal: false,
    buttons: {
      "Set": function() {
        var initialState = $("#initialStateText").val();
        caController.setInitialState(initialState);
      },
      "Stats": function() {
        var initialState = $("#initialStateText").val();
        var string = CaView.getStateResume(initialState);
        $("#initialStateResumeText").text(string);
        $("#initialStateResumeDialog").dialog("open");
      },
      "Clear": function() { $("#initialStateText").val(""); },
      "Close": function() { $(this).dialog("close"); }
    },
      close: function() {}
    });

 $("#initialStateRandomApplyButton")
    .button()
    .click(function() {
      var length = parseInt($("#initialStateRandomLengthSpinBox").val());
      var newInitialState = BinaryString.random(length);
      $("#initialStateText").val(newInitialState);
    });

 $
 ("#initialStateRatioApplyButton")
    .button()
    .click(function() {
      var ratio = parseFloat($("#initialStateRatioRatioSpinBox").val());
      var length = parseInt($("#initialStateRatioLengthSpinBox").val());
      var newInitialState = BinaryString.ratio(ratio, length);
      $("#initialStateText").val(newInitialState);
    });

 $("#initialStateRepeatApplyButton")
    .button()
    .click(function() {
      var pattern = $("#initialStateText").val();
      var times = parseInt($("#initialStateRepeatTimesSpinBox").val());
      var newInitialState = BinaryString.repeat(pattern, times);
      $("#initialStateText").val(newInitialState);
    });

 $("#initialStateScaleApplyButton")
    .button()
    .click(function() {
      var pattern = $("#initialStateText").val();
      var times = parseInt($("#initialStateScaleTimesSpinBox").val());
      var newInitialState = BinaryString.scale(pattern, times);
      $("#initialStateText").val(newInitialState);
    });

  $("#initialStateOverwriteApplyButton")
    .button()
    .click(function() {
      var initialState = $("#initialStateText").val();
      var align = $("#initialStateOverwriteAlignRadio :radio:checked").attr('id');
      var newInitialState = $("#initialStateOverwriteText").val();
      if ( align == "initialStateOverwriteAlignLeft" )
        newInitialState = BinaryString.overwriteLeft(initialState, newInitialState);
      else if ( align == "initialStateOverwriteAlignCenter" )
      {
        newInitialState = BinaryString.overwriteCenter(initialState, newInitialState);
      }
      else if ( align == "initialStateOverwriteAlignRight" )
        newInitialState = BinaryString.overwriteRight(initialState, newInitialState);
      $("#initialStateText").val(newInitialState);
    });

  $("#initialStateOverwriteAlignRadio").buttonset();

  $("#initialStateRatioRatioSpinBox").spinner({ max: 1.0, min: 0.0, step: 0.01, numberFormat: "n" });  
  $("#initialStateRatioLengthSpinBox").spinner({ min: 1, numberFormat: "d" });  
  $("#initialStateRandomLengthSpinBox").spinner({ min: 1, numberFormat: "d" });  
  $("#initialStateRepeatTimesSpinBox").spinner({ max: 999, min: 1, numberFormat: "d" });
  $("#initialStateScaleTimesSpinBox").spinner({ max: 999, min: 1, numberFormat: "d" });
  
  $("#initialStateAccordion").accordion({ heightStyle: "content" });
  
  $("#initialStateResumeDialog").dialog({
    autoOpen: false,
    width: 350,
    modal: true,
    buttons: {
      "Close": function() { $(this).dialog("close"); }
    },
      close: function() {}
    });
});