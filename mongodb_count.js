var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/tony';

var invokeProcData = function(db, callback) {
    db.eval('db.user.count()', function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("success!");
    invokeProcData(db, function(result) {
        console.log(result);
        db.close();
    });
});
