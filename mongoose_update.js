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



    var whereStr = {
        "name": 'tony'
    }
    var updateStr = {
        $set: { //$set   $inc   $unset
            "stuNum": '3222331'
        },
        "multi": true
    };
    var updateOption = {
        upsert: false,
        multi: true //all update
    }

    function level(callback) {
        UserModel.update(whereStr, updateStr, updateOption, function (error) {
            callback(error);
        });
    }

    level((err) => {
        db.close()
    });
    // db.close(); //want to do close, must to do callback
});