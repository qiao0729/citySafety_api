var path = require("path");
daoModule = require("./DAO");
databaseModule = require(path.join(process.cwd(),"modules/database"));


module.exports.getCdInData = function(cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT * FROM cdin";
	database.driver.execQuery(
			sql,function(err,result){
			if(err) return cb("查询执行出错");
			cb(null,result);
		});
}