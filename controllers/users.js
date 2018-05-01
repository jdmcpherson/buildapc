var express = require('express')

var router = express.Router()

var knex = require('../db/connection')

var bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/create', function (req, res) {
   console.log("req.body >>>", req.body);

   const newUser = req.body;

   bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
     knex('users').insert({
        username: newUser.username,
        email: newUser.email,
        passwordDigest: hash
      }).then(() => {
         res.send('We are here 4');
      })
      
   });
})

module.exports = router