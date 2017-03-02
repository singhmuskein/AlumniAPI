var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var alumnusSchema = new Schema({
    id : { type: String, required: true, unique: true },
    name: { type: String, required: true },
    gender : {type : String, required : true},
    mothersName : {type : String, required : true},
    fathersName : {type : String, required : true},
    courses : {type : Array, required : true},
    username: { type: String, required: true },
    password: { type: String, required: true },
    location: String,
    batchId : { type: String, required: true },
    batch : { type: String, required: true },
    school : { type: String, required: true },
    contact : { type : String, required : true },
    personalMail : {type : String, required : true },
    meta: {
        website: String,
        admin: Boolean,
        dob : { type: Date, default: Date.now, required : true },
    },
    currentStatus : { type: String, required: true},
    workProfile : {type : String},
    company : {type : String},
    workingSince : {type: Date, default: Date.now},
    salaryCurrency : {type : String},
    salary : {type : String},
    mastersUni : {type : String},
    married : Boolean,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
var Alumnus = mongoose.model('Alumnus', alumnusSchema);
module.exports = Alumnus;