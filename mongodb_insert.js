var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/tony';

var insertData = function (db, callback) {
    var collection = db.collection('user');
    var data = [{
        "name": 'tony',
        "age": 21
    }, {
        "name": 'jason',
        "age": 22
    }];
    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("success!");
    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});