const map = L.map('map-template').setView([-12.333056000000001,-76.81474560000001], 13);

const socket = io();

const tileURL = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';

L.tileLayer(tileURL).addTo(map);

map.locate({enableHightAccuracy: true});

map.on('locationfound', e => {
        console.log('Locationfound: '+e.latlng.lng);
        const coords = [e.latlng.lat,e.latlng.lng];
        const marker = L.marker(coords);
        marker.bindPopup('AQUI');
        map.addLayer(marker);
        socket.emit('userCoordinates',e.latlng);
});

socket.on('newUserCoordinates', (coords) => {
        console.log('new user is connected');
        const marker = L.marker([coords.lat, coords.lng]);
        marker.bindPopup('wi');
        map.addLayer(marker);
});

//const marker = L.marker([51.505, -0.09]);
//marker.bindPopup('Hello There!');
//map.addLayer(marker);