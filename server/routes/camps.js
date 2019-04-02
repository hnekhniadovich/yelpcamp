const express = require('express');
const router = express.Router();
const Camp = require('../models/camp.model');
const passport = require('passport');

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
router.get('/:id', passport.authenticate('jwt', {
    session: false }),
function(req, res) {
    let id = req.params.id;
    Camp.findById(id).populate('comments').exec(function(err, camp) {
        if(err){
            console.log(err);
        } else {
            res.json(camp);
        }
    });     
});

//NEW - show form to create new campground
router.post('/', passport.authenticate('jwt', {
    session: false }),
function(req, res){
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;

    const newCamp = {name: name, image: image, price: price, description: description};

    Camp.create(newCamp, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            return res.send(newlyCreated);
        }
    })
})

//UPDATE CAMPGROUND ROUTE
router.put('/:id', passport.authenticate('jwt', {
    session: false }),
function(req, res) {
    Camp.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedCamp){
        if(err){
            console.log(err);
        } else {
            return res.send(updatedCamp);
        }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", passport.authenticate('jwt', {
    session: false }),
function(req, res){
    Camp.findByIdAndRemove(req.params.id, function(err, camp){
       if(err){
           console.log(err);
       }
        const response = {
        message: "Camp successfully deleted",
        id: camp._id
    };
        return res.status(200).send(response);
    });
 });

module.exports = router;
