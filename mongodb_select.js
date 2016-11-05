var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/tony';

var selectData = function(db,callback){
		var collection = db.collection('user');

		//var whereStr = {"name":'tony'};
		var whereStr ={};
		collection.find(whereStr).toArray(function(err,result){
			if(err){
				console.log('Error:'+ err);
				return;
			}
			callback(result);
		});
}
MongoClient.connect(DB_CONN_STR,function(err,db){
		console.log("connection success!");
		selectData(db,function(result){
				console.log(result);
				db.close();
		});
});
