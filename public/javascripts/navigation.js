//routing map
mapboxgl.accessToken = 'pk.eyJ1IjoiYndhZGFtc29uIiwiYSI6ImNqajZhNm1idDFzMjIza3A2Y3ZmdDV6YWYifQ.9NhptR7a9D0hzWXR51y_9w';
var map = new mapboxgl.Map({
  container: 'myfirstmap',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [10.274731, 51.348657],
  zoom: 4.5
});

map.on('load', function() {
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  map.addControl(directions, 'top-left');

});

// get location
let myPlaceButton = document.getElementById("myPlace");
myPlaceButton.addEventListener("click", getLocation);
var directions;
/**
  * getLocation
  * @public
  * @desc Funktion um die position des Nutzers zu erfassen und diese als Start- oder Endpunkt für die Navigation zu verwenden
  * @source https://www.w3schools.com/html/html5_geolocation.asp
  */
 function getLocation() {
  var standort = [];
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      standort.push(position.coords.latitude, position.coords.longitude);
      directions.setOrigin([standort[1], standort[0]]);
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};
