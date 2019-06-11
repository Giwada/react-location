var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

const User = require('./../models/User')
//const Host = require('./../models/Host')
const secretKey = 'something'

//var adminAuth = require('./../auth/adminAuth')

// GET ALL USERS
router.get('/', (req, res) => {
  User.find()
  .then(data => res.json(data))
  .catch(err => res.status(400).send({err: 'Could not get all users'}))
});

// CREATE USER
router.post('/register', (req, res) => {

  User.findOne({ email: req.body.email }).then(userData => {
    if (userData) {
      return res.status(400).json({err: 'Email exists'});
    }else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      //hash password before saving in the db
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

// GET SINGLE USER
router.get('/:userId', (req, res) => {
  let userId = req.params.userId

  User.findById(userId)
  .then(userData => res.send(userData))
  .catch(() => res.status(400).json({err: 'User does not exist'}))

});

// SINGLE LOGIN
router.post('/login', (req, res) => {

  let { email, password } = req.body

  User.findOne({email: email}).then(userData => {
    if (userData == null) {
      res.status(400).json({err: 'Email does not exist'});
    }else {
      let dbPassword = userData.password
      let {_id, name, email} = userData

      bcrypt.compare(password, dbPassword)
        .then(result => {
            if (result === false) {
              return res.status(400).json({err: 'This is the wrong password'});
            }

            let jwtData = {};
            jwtData._id = _id
            jwtData.name = name
            jwtData.email = email

            let token = jwt.sign(jwtData, secretKey)
            res.json({
              success:true,
              token
            })

      })
    }
  })

});

// DELETE USER
router.delete('/:userId', (req, res) => {

  let userId = req.params.userId;

  Host.find().then(HostData => {
    HostData.forEach(val => {
      if (val.members.length > 0) {
            val.members.forEach(memberVal => {
                if (memberVal.userId == userId) {
                  Host.findByIdAndUpdate( val._id,
                    { $pull: { "members": { userId: userId } } },{new: true},(err,data) => {
                            console.log(data);
                  });
                }
            })
      }
    })
  })

  User.findOneAndDelete({ _id: userId })
  .then(data => res.json(data))
  .catch(err => res.status(400).send({err: 'Somthing went wrong'}))

});

module.exports = router