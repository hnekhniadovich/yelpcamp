const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const validateInput = require('../validation/valid');

const User = require('../models/user.model');

// @route   GET /test
// @route   Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Users works'}));

// @route   POST /register
// @route   Tests users route
// @access  Public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
        if(user) {
            errors.username = 'Username already exists';
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route   POST /login
// @route   Tests users route
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }).then(user => {
        if(!user) {
            errors.username = 'User not found';
            return res.status(404).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                const payload = { id: user._id, username: user.username }

                jwt.sign(
                    payload, 
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token 
                        });
                    }
                );
            } else {
                errors.password = 'Password incorrect';
                return res.status(400).json(errors);
            }
        })
    })
})


module.exports = router;
