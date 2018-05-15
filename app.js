var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

http.listen(8000, function(){
    console.log('listening on *:8000');
});

module.exports = app; //app.set is not a function ���� �߻��� �߰�
