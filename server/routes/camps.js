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
    Camp.findById(id, function(err, camp) {
        if(err){
            console.log(err);
        } else {
            res.json(camp);
        }
    });     
});

//NEW - show form to create new campground
router.post('/', function(req, res){
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var description = req.body.description;

    var newCamp = {name: name, image: image, price: price, description: description};

    Camp.create(newCamp, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
        }
    })
})

//UPDATE CAMPGROUND ROUTE
router.put('/:id', function(req, res) {
    console.log(req.body);
    Camp.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedCamp){
        if(err){
            console.log(err);
        } else {
            console.log(updatedCamp);
        }
    });
});

module.exports = router;
