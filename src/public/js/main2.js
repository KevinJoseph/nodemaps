const map = L.map('map-template2').setView([-12.333056000000001,-76.81474560000001], 13);

const socket = io();

const tileURL = '';

L.tileLayer(tileURL).addTo(map);

map.locate({enableHightAccuracy: true});

map.on('locationfound', e => {
        console.log('Locationfound: '+e.latlng.lng);
        const coords = [e.latlng.lat,e.latlng.lng];
});

socket.on('newUserCoordinates', (coords) => {
        console.log('new user is connected');

});

//const marker = L.marker([51.505, -0.09]);
//marker.bindPopup('Hello There!');
//map.addLayer(marker);