var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tony');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Database Connected.");
    var UserSchema = new mongoose.Schema({
        name: String,
        stuNum: Number
    }, {
        versionKey: false
    });
    var UserModel = db.model('ooses', UserSchema);
    var stuEntiy = {
        name: 'tony'
    };

    function level(callback) {
        UserModel.find(stuEntiy, function (err, result) {
            console.log('success!!' + result);
            callback(err);
        });
    };
    level((err) => {
        db.close() // db.close(); //want to do close, must to do callback
    });
});