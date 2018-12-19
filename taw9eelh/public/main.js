$(document).ready( function () {
    
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "Longitude: " + position.coords.longitude; 
      }

    $('#table_id').DataTable();
    $('#table_id2').DataTable();
    $('#date').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $("#fromCheckbox").click(function () {
        if ($(this).prop("checked")) {
            $("#from").val("jQuery");
        }
        else {
            $("#from").val("");
        }
    });
    $("#toCheckbox").click(function () {
        if ($(this).prop("checked")) {
            $("#to").val(navigator.geolocation.getCurrentPosition(showPosition));
        }
        else {
            $("#to").val("");
        }
    });
} );

