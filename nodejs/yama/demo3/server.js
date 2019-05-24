var app = require('express')(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(4000, function(){
    console.log('waiting')
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client.html');
});

app.get('/socket.io.js', function(req, res) {
    res.sendFile(__dirname + '/socket.io.js');
});

io.sockets.on('connection', function(socket) {
    socket.on('my other event', function(data) {
        console.log(data);
        socket.emit('news',getResponse(data))
    });
    socket.emit('news', '欢迎欢迎!!!!!');
});

function getResponse(v){
    var d = JSON.stringify(v)
    d = d.replace('?', '!')
    d = d.replace('？', '!')
    d = d.replace('吗', '')
    return d
}


// install
/*
    1. npm install --save socket.io
    2. npm install --save socket.io-clien vue安装
    3. npm install --save express nodejs框架
*/