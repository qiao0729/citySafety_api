//根据百度慧眼进行的相关的分析
var express = require('express');
var router = express.Router();
var path = require("path");

//测试能否连接mysql
// 通过验证模块获取人事分析模块
var baiduHyService = require(path.join(process.cwd(),"/services/baiduHyService"));


router.get("/cdIn",
	function(req,res,next) {
		
		baiduHyService.getCdInData(function(err,result) {
			if(err) return res.sendResult(null,400,err);
           return res.sendResult(result,200,"获取数据成功");
		});
	}
);


module.exports = router;
