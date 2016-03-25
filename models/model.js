var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    prop1: String,
    prop2: Number,
},
    //choose name of collection this schema should be stored in
    {collection:'models'},
    // Prevents mongoose from removing blank objects
    // BUT NOT types (i.e. String, Number, Bool)
    // those will still disappear if not supplied
    { minimize: false }
);

var Model = mongoose.model('Model', ModelSchema);
module.exports = Model;