function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.8691, lng: -87.66584},
      zoom: 18
  });
  var pompeiiPosition= {lat: 41.869183,lng: -87.66584};
  	var marker = new google.maps.Marker({
  			position: pompeiiPosition,
  			map: map,
  			title: 'Pompeii'
  			});
}
