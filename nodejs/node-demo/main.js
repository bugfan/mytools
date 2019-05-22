//告诉Node.js引入http模块给该服务器应用使用
var http = require('http');

var fs = require('fs');

//引入url模块解析url字符串
var url = require('url');

//引入querystring模块处理query字符串
var querystring = require('querystring');

//创建新的HTTP服务器
var server = http.createServer();

let io = require('socket.io')(server);

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

//通过request事件来响应request请求
server.on('request', function (req, res) {
    var urlPath = url.parse(req.url).pathname;
    var qs = querystring.parse(req.url.split('?')[1]);
    if (urlPath === '/jsonp' && qs.callback) {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
        var data = {
            "name": "Monkey"
        };
        data = JSON.stringify(data);
        var callback = qs.callback + '(' + data + ');';
        res.end(callback);
    }else if (urlPath=='/socket.io.js'){
        sendFile(res,'/../static/socket.io.js')
    }else if (urlPath == '/page'){
        sendFile(res,'/../socket.io-client.html')        
    }else {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end('Hell World\n');
    }
});

function sendFile(res,path){
    var path = process.cwd()+path;
    console.log(path);
    var exName = path.substr(path.lastIndexOf('.'),path.length);
    console.log(exName);
    var type = 'html';
    switch (exName){
        case '.js': type = 'application/javascript';break;
        case '.html': type = 'text/html; charset=utf-8';break;
        default:
    }
	fs.readFile(path,function(err,stdout,stderr){
		if(!err){
			var data = stdout;
			res.writeHead(200,{'Content-type':type});	//在这里设置文件类型，告诉浏览器解析方式
			res.write(data);
		}
		res.end();
	})
}

//监听8080端口
server.listen('8082');
//用于提示我们服务器启动成功
console.log('Server running!');
