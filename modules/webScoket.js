//为与客户端一致,后端引入ws模块,构建服务器,监听对应事件
/* var ws = require("ws"); // 加载ws模块; 导入webscoket模块

function initWebscoket(){
	// 启动websocket服务器  引用server类启动webscoket服务器
	var wsServer = new ws.Server({
	    host: "127.0.0.1",
	    port: 8888,
	});
	console.log('WebSocket sever is listening at port localhost:8888');
	return wsServer;
}

//将其导出,然后在不同模块需要进行实时数据推送的可以实例一个webscoket
module.exports.initWebscoket = initWebscoket; */

/*总结 
wsObj:是前端创建的webscoket对象
1.ws.Server启动服务器 
2.on('connection') 建立连接
3.on('message') 向前端推送消息
4.on('close') 关闭连接
5.on('error') 监听错误发生
6.send发送消息,前后端都是用send来进行发送
*/