// // 实例化时绑定
// let httpServer = require('http').Server();
// let io = require('socket.io')(httpServer);
// httpServer.listen(3000);

// //通过listen或attach绑定
// let httpServer = require('http').Server();
// let io = require('socket.io')();
// io.listen(httpServer);
// // io.attach(httpServer);
// httpServer.listen(3000);

/*服务端*/
// 服务端绑定HTTP服务器实例
let httpServer = require('http').Server();
let io = require('socket.io')(httpServer);
httpServer.listen(3000);

// 服务端监听连接状态：io的connection事件表示客户端与服务端成功建立连接，它接收一个回调函数，回调函数会接收一个socket参数。
io.on('connection',  (socket)=>{
  console.log('client connect server, ok!');

  // io.emit()方法用于向服务端发送消息，参数1表示自定义的数据名，参数2表示需要配合事件传入的参数
  io.emmit('server message', {msg:'client connect server success'});

  // socket.broadcast.emmit()表示向除了自己以外的客户端发送消息
  socket.broadcast.emmit('server message', {msg:'broadcast'});

  // 监听断开连接状态：socket的disconnect事件表示客户端与服务端断开连接
  socket.on('disconnect', ()=>{
    console.log('connect disconnect');
  });
  
  // 与客户端对应的接收指定的消息
  socket.on('client message', (data)=>{
    cosnole.log(data);// hi server
  });

  socket.disconnect();
});