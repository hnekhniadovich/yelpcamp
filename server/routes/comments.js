var express = require('express');
var router = express.Router({mergeParams: true});
var Camp = require('../models/camp.model');
var Comment = require('../models/comment.model');

router.get('/:comment_id', function(req, res){
    Comment.findById(req.params.comment_id, function(err, comment){
        if(err) {
            console.log(err)
        } else {
            res.send(comment);
        }
    }) 
});

router.post('/', function(req, res){
    Camp.findById(req.params.id, function(err, camp){
        if(err){
            console.log(err);
        } else {
            var text = req.body.text;
            var author = req.body.author;

            var newComment = {text: text, author: author}
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

router.put("/:comment_id", function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, {new: true}, function(err, updatedComment){
       if(err){
           console.log(err);
       } else {
           return res.send(updatedComment);
       }
    });
 });

router.delete("/:comment_id", function(req, res){
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

