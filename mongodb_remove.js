var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/tony';

var delData = function (db, callback) {
	var collection = db.collection('user');
	var whereStr = {
		"name": 'tony'
	};
	collection.remove(whereStr, function (err, result) {
		if (err) {
			console.log('Error:' + err);
			return;
		}
		callback(result);
	});
}


MongoClient.connect(DB_CONN_STR, function (err, db) {
	console.log("success!");
	delData(db, function (result) {
		console.log(result);
		db.close();
	});
});