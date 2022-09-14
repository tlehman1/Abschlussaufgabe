"use strict";

// execution of functions when the DOM has loaded
window.onload = function () {

  console.log("geojson coming from the database", geojson)

  // create a variable for the map
  let mymap = L.map('myfirstmap',
    {
      center: [51.961563, 7.628202],
      zoom: 4.5
    })


  // add the base map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(mymap)

  const markerArray = []

    // Marker setzen 51.96892984006318, 7.595957198328288
    //L.marker([51.96892984006318, 7.595957198328288]).addTo(mymap)
    //.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //.openPopup();
  //showDetailsOnMap(geojson, mymap)
  showMarkers(geojson,mymap)

}

// function definition

function showMarkers(details,mymap) {
  for(var i = 0; i < details.length; i++) {
    let currentpoi = details[i]
    let [lat, long] =  currentpoi.geometry.coordinates

    var marker = L.marker([lat, long]).addTo(mymap)
    let text = currentpoi.properties;
    marker.bindPopup(text).openPopup
    markerArray.push(marker)
    tabelleErstellen(currentpoi)
  }
}


function tabelleErstellen(currentpoi) {
  const tabelle = document.getElementById("gTabelle")

  console.log(currentpoi)
  let row = tabelle.insertRow(-1)
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  let cell5 = row.insertCell(5);

  cell0.innerHTML = currentpoi._id;
  cell1.innerHTML = currentpoi.properties.name;
  cell2.innerHTML = currentpoi.properties.hoehe;
  cell3.innerHTML = currentpoi.properties.url;
  cell4.innerHTML = currentpoi.properties.description;
  cell5.innerHTML = currentpoi.geometry.coordinates;
  console.log(row)
}

