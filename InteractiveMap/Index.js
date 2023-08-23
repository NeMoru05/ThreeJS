var map = L.map('map', {
  minZoom: 3, // Adjust this value as needed
  maxZoom: 5,  // Adjust this value as needed
  maxBoundsViscosity: 2.0,
  worldCopyJump: false, // Disable world wrapping
}).setView([0, 0], 50);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);