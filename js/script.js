function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.8691, lng: -87.66584},
      zoom: 18
  });
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    map: map,
    title: 'Pomepii and Surrounding area'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
