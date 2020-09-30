var path = require("path");
daoModule = require("./DAO");
databaseModule = require(path.join(process.cwd(),"modules/database"));
//wsServerModule = require(path.join(process.cwd(),"modules/webScoket"));


module.exports.getTestData = function(cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT * FROM test1";
	database.driver.execQuery(
			sql,function(err,result){
			if(err) return cb("查询执行出错");
			cb(null,result);
		});
		
	/* var wsServer = wsServerModule.initWebscoket();//创建了一个webscoket服务
	// 建立连接，监听客户端请求，绑定对应事件;
	function on_server_client_comming (wsObj) {
	    websocket_add_listener(wsObj);//进行消息推送的事件逻辑处理
	}
	
	wsServer.on("connection", on_server_client_comming);
	//connection 建立连接  如果有webscoket请求接入,可以响应connection事件来处理这个webscoket,回调函数中会传入一个webScoket实例
	
	// 各事件处理逻辑
	function websocket_add_listener(wsObj) {
	    wsObj.on("message", function(data) {
	        console.log("request data:"+data);//data为客户端传递过来的数据
	        setTimeout(()=>{ //收到请求，回复
	            wsObj.send("1秒延时，收到了，正在处理");
	        },1000);
	        /*****
	         * 处理业务逻辑
	     /*    */
	        /* setTimeout(()=>{ //完成请求，回复
	            wsObj.send("3秒延时，返回数据，关闭连接");
	            wsObj.close()
	        },3000);
	    });
	
	    wsObj.on("close", function() {
	        console.log("request close");
	    });
	
	    wsObj.on("error", function(err) {
	        console.log("request error", err);
	    });
	} */
	
}