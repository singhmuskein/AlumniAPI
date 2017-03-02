/**
 * Created by muskein.singh on 02/03/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var courseSchema = new Schema({
    courseId : { type: String, required: true, unique: true },
    name: { type: String, required: true },
    semester : {type : String, required : true},
    year : {type : String, required : true},
    tutor : {type : Array, required : true},
    assistants : {type : Array},
    strength : {type : String, required : true},
    school : { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
var Course = mongoose.model('Course', courseSchema);
module.exports = Course;