// Google map
function initMap() {
    // Location of the map/marker
    var location = {lat: 57.35825839999999, lng: -3.3102515000000494};

    // Create a Google map object and specify the DOM element for display
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 10,
        center: location,
        disableDefaultUI: false,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false
    });

    // Create a marker object to display location on the map
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: false
    });
}