module.exports = io => {
    io.on('connection', (socket) =>{
        console.log('Usuario nuevo conectado.');
        socket.on('userCoordinates', coords => {
            console.log(coords);
            socket.broadcast.emit('newUserCoordinates',coords);
        });
    });
}