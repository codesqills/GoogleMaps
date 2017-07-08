//Google Maps Implementation
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var maps = document.getElementById("googlemaps");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
maps.onclick = function() {
    modal.style.display = "block";
    myMap();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myMap() {
    var myCenter = new google.maps.LatLng(28.480065, -81.345241);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 5
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: "CodeSqills"
    });
    infowindow.open(map, marker);
}

//End of Google map Implementation
