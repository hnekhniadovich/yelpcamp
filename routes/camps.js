const express = require('express');
const router = express.Router();
const Camp = require('../models/camp.model');
const User = require('../models/user.model');
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
    Camp.findById(id).exec(function(err, camp) {
        if(err){
            console.log(err);
            res.redirect('/');
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
    const author = req.user.id;
    const username = req.user.username;

    const newCamp = {name: name, image: image, price: price, description: description, author: author, username: username};

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

 /////////////////////////////////////////////////
//  app.use('/camps', campRoutes);

router.get('/:comment_id', passport.authenticate('jwt', {
    session: false }),
function(req, res){
    Comment.findById(req.params.comment_id, function(err, comment){
        if(err) {
            console.log(err)
        } else {
            res.send(comment);
        }
    }) 
});

router.post('/:id/comment', passport.authenticate('jwt', {
    session: false }),
function(req, res){
    //console.log(req.user);
    Camp.findById(req.params.id, function(err, camp){
        if(err){
            console.log(err);
        } else {
            const text = req.body.text;
            const author = req.user.id;
            const username = req.user.username;

            const newComment = {text: text, author: author, username: username}
            
            camp.comments.unshift(newComment);

            camp.save().then(camp => res.json(camp));
        }
    })
})


router.delete("/:id/comment/:comment_id", passport.authenticate('jwt', {
    session: false }),
function(req, res){
    Camp.findById(req.params.id, function(err, camp){
        if(err) {
            console.log(err);
        } else {
            if(camp.comments.filter(
                comment => comment._id.toString() === req.params.comment_id
              ).length === 0
            )
            return res.status(404).json({
                commentnotexist: 'Comment does not exist'
            });
        }

        const removeIndex = camp.comments
            .map(item => item._id.toString())
            .indexOf(req.params.comment_id);

        camp.comments.splice(removeIndex, 1);

        camp.save().then(camp => res.json(camp));
    });
});

module.exports = router;
