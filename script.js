const map = L.map('map').setView([1.3521, 103.8198], 11);

L.tileLayer('https://www.onemap.gov.sg/maps/tiles/Default/{z}/{x}/{y}.png', {
  attribution: '© OneMap',
}).addTo(map);

map.on('click', function(e) {
  L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
});