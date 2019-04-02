const express = require('express');
const router = express.Router({mergeParams: true});
const Camp = require('../models/camp.model');
const Comment = require('../models/comment.model');
const passport = require('passport');

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

router.post('/', passport.authenticate('jwt', {
    session: false }),
function(req, res){
    //console.log(req.user);
    Camp.findById(req.params.id, function(err, camp){
        if(err){
            console.log(err);
        } else {
            const text = req.body.text;
            const author = req.body.author;

            const newComment = {text: text, author: author}
            Comment.create(newComment, function(err, newComment){
                if(err){
                    console.log(err);
                } else {
                    //save comment
                    newComment.save();
                    camp.comments.push(newComment);
                    camp.save();
                    return res.send(newComment);
                }
            })
        }
    })
})

router.put("/:comment_id", passport.authenticate('jwt', {
    session: false }),
function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, {new: true}, function(err, updatedComment){
       if(err){
           console.log(err);
       } else {
           return res.send(updatedComment);
       }
    });
 });

router.delete("/:comment_id", passport.authenticate('jwt', {
    session: false }),
function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err, comment){
       if(err){
            console.log(err);
        } const response = {
            message: "Comment successfully deleted",
            id: comment._id
        };
            return res.status(200).send(response);
    });
});


module.exports = router;

