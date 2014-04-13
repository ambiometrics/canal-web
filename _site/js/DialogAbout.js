$(function() {

  $("#aboutDialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      "Ok": function() { $(this).dialog("close"); }
    },
      close: function() {}
    });
});