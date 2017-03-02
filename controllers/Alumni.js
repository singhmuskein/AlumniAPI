var mongoose = require('mongoose');
var Alumnus = mongoose.model('Alumnus');

exports.findAll = function(req, res){
    Alumnus.find({},function(err, results) {
        return res.send(results);
    });
};

exports.homeData = function (req, res) {
    return res.send("HomeData");
}
exports.findById = function(req, res){
    var id = req.params.id;
    Alumnus.findOne({'id':id},function(err, result) {
        return res.send(result);
    });
};
exports.add = function(req, res) {
    Alumnus.create(req.body, function (err, alumnus) {
        if (err) return console.log(err);
        return res.send({
            id : req.body.id,
            name : req.body.name,
            status : "Accepted"
        });
    });
}
exports.update = function(req, res) {
    // var id = req.params.id;
    // var updates = req.body;
    //
    // Alumnus.update({"id":id}, updates,
    //     function (err, numberAffected) {
    //         if (err) return console.log(err);
    //         console.log('Updated %d alumni', numberAffected);
    //         return res.send(202);
    //     });
    return res.send("update");
}
exports.delete = function(req, res){
    var id = req.params.id;
    Alumnus.findOneAndRemove({'id':id},function(err, result) {
        return res.send(result);
    });
};