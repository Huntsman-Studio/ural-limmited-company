$(document).ready(function() {
    var lightgrey = "#b0b0b0";
    var grey = "#b9b9b9";
    var trans = "transparent";

    // On click agriexport
    $("#agriexport-btn").click( function() {
        $("#gb").hide();
        $("#agriexport").show();
    });

    // Gearboxes
    $("#gb-btn").click( function() {
        $("#gb").show();
        $("#agriexport").hide();
    });
});