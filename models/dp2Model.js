//参加大屏2界面数据模型
module.exports = function(db,callback){
	// 用户模型
	db.define("Dp2Model",{
		hkze : String,
		zfze : String,
		yszkye : String,
		yfzkye : String,
        zjzk : String,
        mlqk : String,
        yjsfqk : String,
        yjsf : String
	},{
		table : "jyjg_dp2"
	});
	return callback();
}
// module.exports = function(db,callback){
// 	// 用户模型
// 	db.define("Dp2Model",{
// 		role_id : {type: 'serial', key: true},
// 		role_name : String,
// 		ps_ids : String,
// 		ps_ca : String,
// 		role_desc : String
// 	},{
// 		table : "sp_role"
// 	});
// 	return callback();
// }