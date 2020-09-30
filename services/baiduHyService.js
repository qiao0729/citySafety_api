var _ = require('lodash');
var path = require("path");
var dao = require(path.join(process.cwd(), "dao/DAO"));
var baiduHyDao = require(path.join(process.cwd(), "dao/baiduHyDao"));



module.exports.getCdInData = function(cb) {
	baiduHyDao.getCdInData(function(err, result) {
		if (err) console.log(err)
		// 进行数据格式处理
    cb(null, result);
	})
}
