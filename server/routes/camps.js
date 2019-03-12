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

router.post('/', function(req, res){
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.imageUrl;
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

module.exports = router;
