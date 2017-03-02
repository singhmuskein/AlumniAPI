var express = require('express');
var mongoose = require('mongoose');
var app = express();
//var cool = require('cool-ascii-faces');
var Alumnus = require('./models/Alumnus');
var Course = require('./models/Course');
var Alumni = require('./controllers/Alumni');
var Courses = require('./controllers/Courses');
var constants = require('./constants/AppConstants');

mongoose.connect(constants.MONGO_DB_URL);

app.configure(function(){
    app.use(express.bodyParser());
});
// app.get('/cool', function(request, response) {
//     response.send(cool());
// });
//Alumni Url Divert
app.get('/', Alumni.homeData);
app.get('/allAlumni', Alumni.findAll);
app.get('/alumni/:id', Alumni.findById);
app.post('/alumni', Alumni.add);
app.put('/alumni/:id', Alumni.update);
app.delete('/alumni/:id', Alumni.delete);

//Courses Url Divert
app.get('/allCourses', Courses.findAll);
app.get('/courses/:id', Courses.findById);
app.post('/courses', Courses.add);
app.put('/courses/:id', Courses.update);
app.delete('/courses/:id', Courses.delete);

app.listen(3000);
console.log("Express server listening on port 3000");