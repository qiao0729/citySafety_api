var _ = require('lodash');
var path = require("path");
var dao = require(path.join(process.cwd(), "dao/DAO"));
var linkMysqlDao = require(path.join(process.cwd(), "dao/linkMysqlDAO"));



module.exports.getTestData = function(cb) {
	linkMysqlDao.getTestData(function(err, result) {
		if (err) console.log(err)
		// 进行数据格式处理
		dpxs01DataFormat(result, cb);
	})
}

function dpxs01DataFormat(data, cb) {
	var result = {
		id: [], //站点数组
		//站点与id对应的对象
		name: [],
		//数据集对象
		flag: []
	}

	for (let item of data) {
		result.id.push(item.id);
		result.name.push(item.name);
		result.flag.push(item.flag)
	}
	cb(null, result);

}
