var express = require('express');
var router = express.Router();
var Camp = require('../models/camp.model');

// INDEX - show all campgrounds
router.get('/', function(req, res) {
    Camp.find({}, function(err, camps){
        if(err){
            console.log(err);
        } else {
            res.json(camps);
        }
    });
});

// SHOW - show more info about one campground
router.get('/:id', function(req, res) {
    let id = req.params.id;
    console.log(id);
    Camp.findById(id, function(err, camp) {
        if(err){
            console.log(err);
        } else {
            res.json(camp);
        }
    });     
});

module.exports = router;
