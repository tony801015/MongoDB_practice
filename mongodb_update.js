var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/tony';

var updateData = function (db, callback) {

	var collection = db.collection('ooses');

	var whereStr = {
		"name": 'tony'
	};
	var updateStr = {
		$set: {
			"stuNum": '098733654321'
		}
	};
	collection.update(whereStr, updateStr, function (err, result) {
		if (err) {
			// console.log('Error:'+err);
			return;
		}
		callback(result);
	});
}
MongoClient.connect(DB_CONN_STR, function (err, db) {
	console.log('success!');
	updateData(db, function (result) {
		console.log(result);
		db.close();
	});
});